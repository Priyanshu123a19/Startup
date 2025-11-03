/**
 * Check Cloudinary Videos
 * Verifies all uploaded videos are accessible
 */

require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function checkVideos() {
  console.log('🔍 Checking Cloudinary videos...\n');

  const folders = [
    'our-work/mini-vlog',
    'our-work/montage',
    'our-work/person-to-camera',
    'our-work/ugc',
    'our-work/new',
    'collab'
  ];

  for (const folder of folders) {
    try {
      console.log(`📁 ${folder}:`);
      const result = await cloudinary.api.resources({
        resource_type: 'video',
        type: 'upload',
        prefix: folder,
        max_results: 50
      });

      if (result.resources.length === 0) {
        console.log(`   ⚠️  No videos found\n`);
      } else {
        result.resources.forEach(resource => {
          const url = resource.secure_url;
          const size = (resource.bytes / (1024 * 1024)).toFixed(2);
          console.log(`   ✅ ${resource.public_id} (${size} MB)`);
          console.log(`      ${url}`);
        });
        console.log('');
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }
}

checkVideos().catch(console.error);
