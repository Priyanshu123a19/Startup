/**
 * Cloudinary Video Upload Script
 * 
 * This script automatically uploads all videos to Cloudinary with the correct folder structure.
 * 
 * BEFORE RUNNING:
 * 1. Install cloudinary: npm install cloudinary
 * 2. Create .env.local file in root with your credentials:
 *    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
 *    CLOUDINARY_API_KEY=your_api_key
 *    CLOUDINARY_API_SECRET=your_api_secret
 * 
 * TO RUN:
 * node scripts/uploadToCloudinary.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Check if configuration is valid
if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('❌ ERROR: Cloudinary credentials not found!');
  console.error('Please create .env.local file with:');
  console.error('  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
  console.error('  CLOUDINARY_API_KEY=your_api_key');
  console.error('  CLOUDINARY_API_SECRET=your_api_secret');
  process.exit(1);
}

console.log('✅ Cloudinary configured successfully!');
console.log(`Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}\n`);

// Upload function with progress
async function uploadVideo(filePath, cloudinaryId, index, total) {
  const absolutePath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(absolutePath)) {
    console.error(`❌ [${index}/${total}] File not found: ${filePath}`);
    return null;
  }

  try {
    const fileSize = (fs.statSync(absolutePath).size / (1024 * 1024)).toFixed(2);
    console.log(`⬆️  [${index}/${total}] Uploading: ${cloudinaryId} (${fileSize} MB)`);
    
    const result = await cloudinary.uploader.upload(absolutePath, {
      resource_type: 'video',
      public_id: cloudinaryId,
      overwrite: true,
      invalidate: true,
    });
    
    console.log(`✅ [${index}/${total}] Success: ${cloudinaryId}`);
    return result;
  } catch (error) {
    console.error(`❌ [${index}/${total}] Error uploading ${cloudinaryId}:`, error.message);
    return null;
  }
}

// Video mappings (local path => Cloudinary ID)
const videoMappings = [
  // ========== COLLABORATIONS ==========
  
  // Urban Needs (3 videos)
  {
    path: 'public/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/200rsOFF code in my broadcast channel_._._🏷️ oversized tshirts relaxed fit graphic printed puff print high gsm(MP4).mp4',
    cloudinaryId: 'collab/urban-needs/product-1'
  },
  {
    path: 'public/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/Video-13.mp4',
    cloudinaryId: 'collab/urban-needs/product-2'
  },
  {
    path: 'public/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/Video-512.mp4',
    cloudinaryId: 'collab/urban-needs/product-3'
  },
  
  // Burger Bae (2 videos)
  {
    path: 'public/assets/collab/burgerbae-20251031T210213Z-1-001/burgerbae/16_02_2025, 12_11_46.mp4',
    cloudinaryId: 'collab/burger-bae/food-1'
  },
  {
    path: 'public/assets/collab/burgerbae-20251031T210213Z-1-001/burgerbae/AQPPe5hprMjavywHugnOWD2Gwa4dywGjGGlm_XZ7-SaHvogG8wgznz7SitHDiXFBGyYekHllUM3MbZbar9c1Gmb0iFacQZiTTCvn_44.mp4',
    cloudinaryId: 'collab/burger-bae/food-2'
  },
  
  // San Kalra (3 videos)
  {
    path: 'public/assets/collab/san karla -20251031T210638Z-1-001/san karla/21_02_2025, 21_03_51.mp4',
    cloudinaryId: 'collab/san-kalra/lifestyle-1'
  },
  {
    path: 'public/assets/collab/san karla -20251031T210638Z-1-001/san karla/vacation tan is fun_ daily life wala nahi bhai 😭 _h8 the sun for tans_ but obv love for the cortisol pulses every morn 😮_💨 _trying the _beardo.of(.mp4',
    cloudinaryId: 'collab/san-kalra/lifestyle-2'
  },
  {
    path: 'public/assets/collab/san karla -20251031T210638Z-1-001/san karla/Video-735.mp4',
    cloudinaryId: 'collab/san-kalra/lifestyle-3'
  },
  
  // Ashmita Arora (1 video)
  {
    path: 'public/assets/collab/ashmita arora-20251031T205943Z-1-001/ashmita arora/Video-835.mp4',
    cloudinaryId: 'collab/ashmita-arora/content-1'
  },
  
  // Be Your Best (2 videos)
  {
    path: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/20 Winter Essentials EVERY Man Needs 2024 _ BeYourBest Fashion by San Kalra(1080P_HD).mp4',
    cloudinaryId: 'collab/be-your-best/winter-essentials'
  },
  {
    path: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/Copy of Captions_CF2254.MP4',
    cloudinaryId: 'collab/be-your-best/captions'
  },
  
  // Blue Jelly Media (3 videos)
  {
    path: 'public/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/16_02_2025, 12_11_49.mp4',
    cloudinaryId: 'collab/blue-jelly-media/media-1'
  },
  {
    path: 'public/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/21_2_2025, 9_04_23 PM.mov',
    cloudinaryId: 'collab/blue-jelly-media/media-2'
  },
  {
    path: 'public/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/draft .mp4',
    cloudinaryId: 'collab/blue-jelly-media/draft'
  },
  
  // Carer (1 video)
  {
    path: 'public/assets/collab/carer -20251031T210230Z-1-001/carer/Dr ankur reel 7.mp4',
    cloudinaryId: 'collab/carer/dr-ankur-reel'
  },
  
  // Dr. Chaitanya Challa (1 video)
  {
    path: 'public/assets/collab/dr chaitanya challa-20251031T210530Z-1-001/dr chaitanya challa/33.IS CANCER GENETIC (1).mp4',
    cloudinaryId: 'collab/dr-chaitanya-challa/cancer-genetic'
  },
  
  // Erasavir (2 videos)
  {
    path: 'public/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/30 oct trial video .mp4',
    cloudinaryId: 'collab/erasavir/trial-video'
  },
  {
    path: 'public/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/ads cta.mov',
    cloudinaryId: 'collab/erasavir/ad-cta'
  },
  
  // Rangaai (1 video)
  {
    path: 'public/assets/collab/rangaai-20251031T210622Z-1-001/rangaai/16_02_2025, 12_12_17.mp4',
    cloudinaryId: 'collab/rangaai/brand-content'
  },
  
  // Suhana Sethi (1 video)
  {
    path: 'public/assets/collab/suhana sethi-20251031T210705Z-1-001/suhana sethi/bmw event(6).mov',
    cloudinaryId: 'collab/suhana-sethi/bmw-event'
  },
  
  // ========== OUR WORK ==========
  
  // Mini Vlog (2 videos)
  {
    path: 'public/assets/mini vlog-20251029T190115Z-1-001/mini vlog/bmw event(6).mov',
    cloudinaryId: 'our-work/mini-vlog/bmw-event'
  },
  {
    path: 'public/assets/mini vlog-20251029T190115Z-1-001/mini vlog/21_02_2025, 21_03_51.mp4',
    cloudinaryId: 'our-work/mini-vlog/daily-lifestyle'
  },
  
  // Montage (1 video)
  {
    path: 'public/assets/montage-20251029T190231Z-1-001/montage/21_02_2025, 21_03_52.mp4',
    cloudinaryId: 'our-work/montage/creative-compilation'
  },
  
  // Person to Camera (2 videos)
  {
    path: 'public/assets/person to camera -20251029T190034Z-1-001/person to camera/33.IS CANCER GENETIC (1).mp4',
    cloudinaryId: 'our-work/person-to-camera/health-wellness'
  },
  {
    path: 'public/assets/person to camera -20251029T190034Z-1-001/person to camera/vacation tan is fun_ daily life wala nahi bhai 😭 _h8 the sun for tans_ but obv love for the cortisol pulses every morn 😮_💨 _trying the _beardo.of(.mp4',
    cloudinaryId: 'our-work/person-to-camera/lifestyle-selfcare'
  },
  
  // UGC (2 videos)
  {
    path: 'public/assets/ugc -20251029T185609Z-1-001/ugc/16_02_2025, 12_12_17.mp4',
    cloudinaryId: 'our-work/ugc/ugc-style'
  },
  {
    path: 'public/assets/ugc -20251029T185609Z-1-001/ugc/ads cta.mov',
    cloudinaryId: 'our-work/ugc/cta-ad'
  },
  
  // New/Creative (2 videos)
  {
    path: 'public/assets/new/Video-13(1).mp4',
    cloudinaryId: 'our-work/new/creative-showcase-1'
  },
  {
    path: 'public/assets/new/Video-512.mp4',
    cloudinaryId: 'our-work/new/creative-showcase-2'
  },
];

// Main upload function
async function uploadAllVideos() {
  console.log(`\n🚀 Starting upload of ${videoMappings.length} videos to Cloudinary...\n`);
  console.log('This may take 10-15 minutes depending on your internet speed.\n');
  
  const results = {
    success: [],
    failed: []
  };
  
  for (let i = 0; i < videoMappings.length; i++) {
    const { path: filePath, cloudinaryId } = videoMappings[i];
    const result = await uploadVideo(filePath, cloudinaryId, i + 1, videoMappings.length);
    
    if (result) {
      results.success.push(cloudinaryId);
    } else {
      results.failed.push({ path: filePath, cloudinaryId });
    }
    
    // Add a small delay between uploads to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${results.success.length}/${videoMappings.length}`);
  console.log(`❌ Failed: ${results.failed.length}/${videoMappings.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n⚠️  Failed uploads:');
    results.failed.forEach(({ path, cloudinaryId }) => {
      console.log(`   - ${cloudinaryId}`);
      console.log(`     Path: ${path}`);
    });
  }
  
  if (results.success.length === videoMappings.length) {
    console.log('\n🎉 All videos uploaded successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Commit changes: git add . && git commit -m "Switch to Cloudinary"');
    console.log('   3. Push to GitHub: git push origin main');
    console.log('   4. Deploy will automatically use Cloudinary URLs');
  } else {
    console.log('\n⚠️  Some uploads failed. Please check the errors above.');
    console.log('You can re-run this script to retry failed uploads.');
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
}

// Run the upload
uploadAllVideos().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
