import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function listImages() {
  const { data, error } = await supabase
    .from('posts')
    .select('title, featured_image, featured_image_alt')
    .not('featured_image', 'is', null)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) {
    console.error('Error fetching images:', error)
    return
  }

  console.log('--- LATEST IMAGES FROM ADMIN LIBRARY ---')
  data.forEach(post => {
    console.log(`Title: ${post.title}`)
    console.log(`Alt: ${post.featured_image_alt}`)
    console.log(`URL: ${post.featured_image}`)
    console.log('----------------------------------------')
  })
}

listImages()
