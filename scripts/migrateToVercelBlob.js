/**
 * Migration Script: Cloudinary → Vercel Blob Storage
 * 
 * This script downloads all videos from Cloudinary and uploads them to Vercel Blob Storage.
 * Run this once to migrate your videos to a permanent free tier solution.
 * 
 * Prerequisites:
 * 1. Install dependencies: npm install
 * 2. Set BLOB_READ_WRITE_TOKEN in .env.local (get from Vercel Dashboard → Storage → Blob)
 * 3. Ensure Cloudinary credentials are in .env.local
 * 
 * Usage:
 *   node scripts/migrateToVercelBlob.js
 */

require('dotenv').config({ path: '.env.local' });
const { put, list } = require('@vercel/blob');
const { v2: cloudinary } = require('cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Video IDs from videoAssets.ts
const VIDEO_IDS = [
  // Collaborations
  'collab/urban-needs/product-1',
  'collab/urban-needs/product-2',
  'collab/urban-needs/product-3',
  'collab/burger-bae/food-1',
  'collab/burger-bae/food-2',
  'collab/san-kalra/lifestyle-1',
  'collab/san-kalra/lifestyle-2',
  'collab/san-kalra/lifestyle-3',
  'collab/ashmita-arora/content-1',
  'collab/blue-jelly-media/media-1',
  'collab/blue-jelly-media/media-2',
  'collab/blue-jelly-media/draft',
  'collab/dr-chaitanya-challa/cancer-genetic',
  'collab/erasavir/trial-video-compressed',
  'collab/erasavir/ad-cta',
  'collab/rangaai/brand-content',
  'collab/suhana-sethi/bmw-event-compressed',
  
  // Our Work
  'our-work/mini-vlog/bmw-event-compressed',
  'our-work/mini-vlog/daily-lifestyle',
  'our-work/montage/creative-compilation',
  'our-work/person-to-camera/health-wellness',
  'our-work/person-to-camera/lifestyle-selfcare',
  'our-work/ugc/ugc-style',
  'our-work/ugc/cta-ad',
  'our-work/new/creative-showcase-1',
  'our-work/new/creative-showcase-2',
];

async function migrateVideos() {
  console.log('🚀 Starting migration from Cloudinary to Vercel Blob...\n');
  
  // Validate environment variables
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ ERROR: BLOB_READ_WRITE_TOKEN not found in .env.local');
    console.log('\nTo get your token:');
    console.log('1. Go to: https://vercel.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to Storage → Create Blob Store (if not created)');
    console.log('4. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('5. Add it to .env.local\n');
    process.exit(1);
  }

  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('❌ ERROR: Cloudinary credentials missing in .env.local\n');
    process.exit(1);
  }

  console.log(`📊 Found ${VIDEO_IDS.length} videos to migrate\n`);

  const results = {
    success: [],
    failed: [],
    skipped: []
  };

  for (let i = 0; i < VIDEO_IDS.length; i++) {
    const publicId = VIDEO_IDS[i];
    const fileName = publicId.split('/').pop();
    
    console.log(`\n[${i + 1}/${VIDEO_IDS.length}] Processing: ${publicId}`);
    
    try {
      // Build Cloudinary URL
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;
      
      console.log(`   📥 Downloading from Cloudinary...`);
      
      // Download from Cloudinary
      const response = await fetch(cloudinaryUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const sizeInMB = (arrayBuffer.byteLength / (1024 * 1024)).toFixed(2);
      
      console.log(`   ✓ Downloaded ${sizeInMB} MB`);
      console.log(`   ☁️  Uploading to Vercel Blob...`);
      
      // Upload to Vercel Blob with the same path structure
      const blob = await put(`videos/${publicId}.mp4`, arrayBuffer, {
        access: 'public',
        addRandomSuffix: false,
      });
      
      console.log(`   ✅ SUCCESS: ${blob.url}`);
      
      results.success.push({
        cloudinaryId: publicId,
        blobUrl: blob.url,
      });
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`   ❌ FAILED: ${error.message}`);
      results.failed.push({
        cloudinaryId: publicId,
        error: error.message,
      });
    }
  }

  // Print Summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 MIGRATION SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  console.log('='.repeat(70));

  if (results.failed.length > 0) {
    console.log('\n❌ Failed Videos:');
    results.failed.forEach(({ cloudinaryId, error }) => {
      console.log(`   - ${cloudinaryId}: ${error}`);
    });
  }

  if (results.success.length > 0) {
    console.log('\n✅ Next Steps:');
    console.log('1. Update videoAssets.ts to use Vercel Blob URLs');
    console.log('2. Test the videos in your app');
    console.log('3. Once confirmed working, you can delete videos from Cloudinary');
    console.log('\n💡 The migration has created a mapping in vercel-blob-urls.json\n');
    
    // Save URL mapping for reference
    const fs = require('fs');
    const mapping = {};
    results.success.forEach(({ cloudinaryId, blobUrl }) => {
      mapping[cloudinaryId] = blobUrl;
    });
    
    fs.writeFileSync(
      'vercel-blob-urls.json',
      JSON.stringify(mapping, null, 2)
    );
    console.log('📝 Saved URL mapping to: vercel-blob-urls.json\n');
  }
}

// Run migration
migrateVideos().catch(console.error);
