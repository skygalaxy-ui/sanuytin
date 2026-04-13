import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function migrate() {
  console.log('Fetching posts...');
  const { data: posts, error } = await sb.from('posts').select('id, title, featured_image, content');
  
  if (error) {
    console.error('Error fetching posts:', error);
    return;
  }

  const publicUrlBase = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/post-images/';

  let updatedCount = 0;

  for (const post of posts) {
    let changed = false;
    let newContent = post.content || '';
    let newFeatured = post.featured_image || '';

    // Replace featured_image
    if (newFeatured.startsWith('/images/')) {
      const fileName = newFeatured.replace('/images/', '');
      const localPath = path.join(process.cwd(), 'public', 'images', fileName);
      if (fs.existsSync(localPath)) {
        console.log(`Uploading ${fileName} for post ${post.id}...`);
        const fileBuffer = fs.readFileSync(localPath);
        const { error: uploadErr } = await sb.storage.from('post-images').upload(fileName, fileBuffer, {
          contentType: fileName.endsWith('.png') ? 'image/png' : 'image/jpeg',
          upsert: true
        });
        if (!uploadErr || uploadErr.message.includes('Duplicate')) {
          newFeatured = publicUrlBase + fileName;
          changed = true;
        } else {
          console.error(`Upload error for ${fileName}:`, uploadErr);
        }
      }
    }

    // Replace inline images
    const regex = /\/images\/([^"']+\.(png|jpg|jpeg|webp|svg))/g;
    let match;
    const matchesToReplace = [];
    while ((match = regex.exec(newContent)) !== null) {
      matchesToReplace.push(match);
    }

    // Only upload unique files
    const uploadedInThisPost = new Set();
    
    for (const m of matchesToReplace) {
      const fullMatch = m[0]; // '/images/abc.png'
      const fileName = m[1]; // 'abc.png'
      
      const localPath = path.join(process.cwd(), 'public', 'images', fileName);
      if (fs.existsSync(localPath)) {
        if (!uploadedInThisPost.has(fileName)) {
          console.log(`Uploading inline ${fileName} for post ${post.id}...`);
          const fileBuffer = fs.readFileSync(localPath);
          const { error: uploadErr } = await sb.storage.from('post-images').upload(fileName, fileBuffer, {
            contentType: fileName.endsWith('.png') ? 'image/png' : 'image/jpeg',
            upsert: true
          });
          if (uploadErr && !uploadErr.message.includes('Duplicate')) {
             console.error(`Upload error for inline ${fileName}:`, uploadErr);
             continue;
          }
          uploadedInThisPost.add(fileName);
        }
        
        newContent = newContent.replace(new RegExp(fullMatch, 'g'), publicUrlBase + fileName);
        changed = true;
      }
    }

    if (changed) {
      console.log(`Updating post ${post.id}...`);
      await sb.from('posts').update({
        featured_image: newFeatured,
        content: newContent
      }).eq('id', post.id);
      updatedCount++;
    }
  }

  console.log(`Migration complete! Updated ${updatedCount} posts.`);
}

migrate();
