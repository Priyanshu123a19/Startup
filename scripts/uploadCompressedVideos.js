/**
 * Upload Compressed Videos to Cloudinary
 * 
 * This script uploads only the newly compressed videos that failed initially
 * due to 100MB size limit.
 * 
 * Run: node scripts/uploadCompressedVideos.js
 */

require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Validate configuration
if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 
    !process.env.CLOUDINARY_API_KEY || 
    !process.env.CLOUDINARY_API_SECRET) {
  console.log('❌ Error: Cloudinary credentials not found in .env.local');
  console.log('Please make sure you have set:');
  console.log('  - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
  console.log('  - CLOUDINARY_API_KEY');
  console.log('  - CLOUDINARY_API_SECRET');
  process.exit(1);
}

console.log('✅ Cloudinary configured successfully!');
console.log(`Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}\n`);

// Only the 4 compressed videos that need to be uploaded
const videoMappings = [
  {
    localPath: 'public/assets/compressed/Copy of Captions_CF2254.mp4',
    cloudinaryId: 'collab/be-your-best/captions-compressed',
    name: 'captions-compressed'
  },
  {
    localPath: 'public/assets/compressed/30 oct trial video .mp4',
    cloudinaryId: 'collab/erasavir/trial-video-compressed',
    name: 'trial-video-compressed'
  },
  {
    localPath: 'public/assets/compressed/bmw event(6).mov',
    cloudinaryId: 'collab/suhana-sethi/bmw-event-compressed',
    name: 'bmw-event-suhana-compressed'
  },
  {
    localPath: 'public/assets/compressed/bmw event(6).mov',
    cloudinaryId: 'our-work/mini-vlog/bmw-event-compressed',
    name: 'bmw-event-our-work-compressed'
  }
];

/**
 * Get file size in MB
 */
function getFileSizeMB(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / (1024 * 1024)).toFixed(2);
  } catch (error) {
    return 'N/A';
  }
}

/**
 * Upload a single video to Cloudinary
 */
async function uploadVideo(video, index, total) {
  const fullPath = path.resolve(video.localPath);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ [${index}/${total}] File not found: ${video.name}`);
    console.log(`   Path: ${fullPath}\n`);
    return { success: false, error: 'File not found' };
  }

  const fileSize = getFileSizeMB(fullPath);
  console.log(`⬆️  [${index}/${total}] Uploading: ${video.cloudinaryId} (${fileSize} MB)`);

  try {
    const result = await cloudinary.uploader.upload(fullPath, {
      resource_type: 'video',
      public_id: video.cloudinaryId,
      folder: '',
      overwrite: true,
    });

    console.log(`✅ [${index}/${total}] Success: ${video.cloudinaryId}`);
    return { success: true, result };
  } catch (error) {
    console.log(`❌ [${index}/${total}] Error uploading ${video.cloudinaryId}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Main upload workflow
 */
async function main() {
  console.log('🚀 Starting upload of 4 compressed videos to Cloudinary...\n');
  console.log('This may take 5-10 minutes depending on your internet speed.\n');
  console.log('============================================================\n');

  const results = [];

  for (let i = 0; i < videoMappings.length; i++) {
    const video = videoMappings[i];
    const result = await uploadVideo(video, i + 1, videoMappings.length);
    results.push({ ...video, ...result });

    // Add delay between uploads to avoid rate limiting
    if (i < videoMappings.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Summary
  console.log('\n============================================================');
  console.log('📊 UPLOAD SUMMARY');
  console.log('============================================================');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✅ Successful: ${successful.length}/${videoMappings.length}`);
  console.log(`❌ Failed: ${failed.length}/${videoMappings.length}`);

  if (failed.length > 0) {
    console.log('\n⚠️  Failed uploads:');
    failed.forEach(r => {
      console.log(`   - ${r.cloudinaryId}`);
      console.log(`     Path: ${r.localPath}`);
      console.log(`     Error: ${r.error}`);
    });
  }

  console.log('\n============================================================');

  if (successful.length === videoMappings.length) {
    console.log('🎉 All compressed videos uploaded successfully!\n');
    console.log('📝 NEXT STEPS:\n');
    console.log('1. Test locally: npm run dev');
    console.log('2. Visit http://localhost:3000/collaborations');
    console.log('3. Visit http://localhost:3000/our-work');
    console.log('4. Verify videos play correctly');
    console.log('5. Add env vars to Vercel and deploy!\n');
  } else if (failed.length > 0) {
    console.log('⚠️  Some uploads failed. Please check the errors above.');
    console.log('You can re-run this script to retry failed uploads.\n');
  }

  console.log('============================================================');
}

// Run the script
main().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
