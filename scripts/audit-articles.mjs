import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const { data } = await sb.from('posts').select('id, title, slug, category, content, featured_image, excerpt, is_published, published_at')
  .gte('id', 140).order('id');

const KNOWLEDGE = ['kien-thuc','kien-thuc-forex','kien-thuc-dau-tu','huong-dan','kinh-nghiem'];

for (const d of data) {
  const c = d.content || '';
  const wc = c.replace(/<[^>]*>/g,'').split(/\s+/).length;
  const h2s = (c.match(/<h2/gi) || []).length;
  const h3s = (c.match(/<h3/gi) || []).length;
  const tables = (c.match(/<table/gi) || []).length;
  const faq = /FAQ|câu hỏi thường/i.test(c);
  const links = (c.match(/href="\//gi) || []).length;
  const hasExcerpt = d.excerpt && d.excerpt.length > 20;
  const hasImage = d.featured_image && d.featured_image.length > 10;
  const route = KNOWLEDGE.includes(d.category) ? '/kien-thuc-forex/' : '/tin-tuc/';

  console.log('---');
  console.log('ID ' + d.id + ' | ' + (d.is_published ? 'Published' : 'Pending'));
  console.log(d.title);
  console.log('URL: https://sanuytin.net' + route + d.slug);
  console.log(wc + ' words | ' + h2s + ' H2 | ' + h3s + ' H3 | ' + tables + ' tables | ' + links + ' links');
  console.log('FAQ:' + (faq?'Y':'N') + ' Excerpt:' + (hasExcerpt?'Y':'N') + ' Image:' + (hasImage?'Y':'N'));
  
  const issues = [];
  if (wc < 600) issues.push('Short(' + wc + 'w)');
  if (tables === 0) issues.push('NoTable');
  if (!faq) issues.push('NoFAQ');
  if (links < 3) issues.push('FewLinks(' + links + ')');
  if (!hasExcerpt) issues.push('NoExcerpt');
  if (!hasImage) issues.push('NoImage');
  
  if (issues.length === 0) console.log('PASS');
  else console.log('ISSUES: ' + issues.join(', '));
}
process.exit(0);
