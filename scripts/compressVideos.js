/**
 * Video Compression Script using ffmpeg
 * 
 * This script compresses the 6 large videos that failed to upload to Cloudinary
 * due to the 100MB free tier limit.
 * 
 * PREREQUISITES:
 * 1. Install ffmpeg first:
 *    - Windows: Download from https://www.gyan.dev/ffmpeg/builds/
 *    - Or use Chocolatey: choco install ffmpeg
 *    - Or use Scoop: scoop install ffmpeg
 * 
 * 2. Verify installation: ffmpeg -version
 * 
 * USAGE:
 * node scripts/compressVideos.js
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

const execPromise = util.promisify(exec);

// Videos that failed to upload (>100MB)
const videosToCompress = [
  {
    name: 'winter-essentials',
    input: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/20 Winter Essentials EVERY Man Needs 2024 _ BeYourBest Fashion by San Kalra(1080P_HD).mp4',
    output: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/20 Winter Essentials EVERY Man Needs 2024 _ BeYourBest Fashion by San Kalra(1080P_HD)_compressed.mp4',
    originalSize: '327 MB',
    targetSize: '80 MB'
  },
  {
    name: 'captions',
    input: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/Copy of Captions_CF2254.MP4',
    output: 'public/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/Copy of Captions_CF2254_compressed.MP4',
    originalSize: '134 MB',
    targetSize: '70 MB'
  },
  {
    name: 'dr-ankur-reel',
    input: 'public/assets/collab/carer -20251031T210230Z-1-001/carer/Dr ankur reel 7.mp4',
    output: 'public/assets/collab/carer -20251031T210230Z-1-001/carer/Dr ankur reel 7_compressed.mp4',
    originalSize: '429 MB',
    targetSize: '90 MB'
  },
  {
    name: 'trial-video',
    input: 'public/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/30 oct trial video .mp4',
    output: 'public/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/30 oct trial video _compressed.mp4',
    originalSize: '100 MB',
    targetSize: '60 MB'
  },
  {
    name: 'bmw-event-suhana',
    input: 'public/assets/collab/suhana sethi-20251031T210705Z-1-001/suhana sethi/bmw event(6).mov',
    output: 'public/assets/collab/suhana sethi-20251031T210705Z-1-001/suhana sethi/bmw event(6)_compressed.mov',
    originalSize: '117 MB',
    targetSize: '70 MB'
  },
  {
    name: 'bmw-event-our-work',
    input: 'public/assets/mini vlog-20251029T190115Z-1-001/mini vlog/bmw event(6).mov',
    output: 'public/assets/mini vlog-20251029T190115Z-1-001/mini vlog/bmw event(6)_compressed.mov',
    originalSize: '117 MB',
    targetSize: '70 MB'
  }
];

/**
 * Check if ffmpeg is installed
 */
async function checkFFmpeg() {
  try {
    await execPromise('ffmpeg -version');
    return true;
  } catch (error) {
    return false;
  }
}

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
 * Compress a single video
 * 
 * ffmpeg parameters explained:
 * -i: Input file
 * -c:v libx264: Use H.264 codec (best compression/quality ratio)
 * -crf 28: Constant Rate Factor (18-28 range, higher = smaller file)
 * -preset medium: Encoding speed (slower = better compression)
 * -c:a aac: Audio codec
 * -b:a 128k: Audio bitrate (lower = smaller file)
 * -movflags +faststart: Enable streaming (video plays while downloading)
 */
async function compressVideo(video, index, total) {
  const inputPath = path.resolve(video.input);
  const outputPath = path.resolve(video.output);

  console.log(`\n⬇️  [${index}/${total}] Compressing: ${video.name}`);
  console.log(`   Original size: ${video.originalSize}`);
  console.log(`   Target size: ${video.targetSize}`);

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ [${index}/${total}] File not found: ${inputPath}`);
    return { success: false, error: 'File not found' };
  }

  const originalSize = getFileSizeMB(inputPath);
  console.log(`   Actual size: ${originalSize} MB`);

  try {
    // ffmpeg command with optimized compression settings
    const command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart "${outputPath}" -y`;
    
    console.log(`   🔧 Processing... (this may take a few minutes)`);
    
    await execPromise(command, { maxBuffer: 1024 * 1024 * 10 });

    const compressedSize = getFileSizeMB(outputPath);
    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);

    console.log(`✅ [${index}/${total}] Success: ${video.name}`);
    console.log(`   Compressed: ${originalSize} MB → ${compressedSize} MB (${reduction}% reduction)`);

    return { success: true, originalSize, compressedSize };
  } catch (error) {
    console.log(`❌ [${index}/${total}] Error compressing ${video.name}`);
    console.log(`   ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Main compression workflow
 */
async function main() {
  console.log('🎬 Video Compression Script for Cloudinary Upload\n');
  console.log('============================================================');

  // Check ffmpeg installation
  console.log('🔍 Checking for ffmpeg...');
  const hasFFmpeg = await checkFFmpeg();

  if (!hasFFmpeg) {
    console.log('❌ ffmpeg is not installed!\n');
    console.log('📥 Please install ffmpeg first:\n');
    console.log('Option 1 - Chocolatey (recommended):');
    console.log('   choco install ffmpeg\n');
    console.log('Option 2 - Scoop:');
    console.log('   scoop install ffmpeg\n');
    console.log('Option 3 - Manual download:');
    console.log('   1. Download from: https://www.gyan.dev/ffmpeg/builds/');
    console.log('   2. Extract to C:\\ffmpeg');
    console.log('   3. Add C:\\ffmpeg\\bin to your PATH');
    console.log('   4. Restart your terminal\n');
    console.log('After installation, run this script again.');
    process.exit(1);
  }

  console.log('✅ ffmpeg is installed!\n');
  console.log(`🚀 Starting compression of ${videosToCompress.length} videos...\n`);
  console.log('This will take 15-30 minutes depending on your CPU speed.\n');
  console.log('============================================================\n');

  const results = [];

  for (let i = 0; i < videosToCompress.length; i++) {
    const video = videosToCompress[i];
    const result = await compressVideo(video, i + 1, videosToCompress.length);
    results.push({ ...video, ...result });

    // Add delay between compressions to prevent CPU overload
    if (i < videosToCompress.length - 1) {
      console.log('   ⏳ Waiting 2 seconds before next compression...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Summary
  console.log('\n============================================================');
  console.log('📊 COMPRESSION SUMMARY');
  console.log('============================================================\n');

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✅ Successful: ${successful.length}/${videosToCompress.length}`);
  console.log(`❌ Failed: ${failed.length}/${videosToCompress.length}\n`);

  if (successful.length > 0) {
    console.log('✅ Successfully compressed:');
    successful.forEach(r => {
      const reduction = ((1 - r.compressedSize / r.originalSize) * 100).toFixed(1);
      console.log(`   - ${r.name}: ${r.originalSize} MB → ${r.compressedSize} MB (${reduction}% smaller)`);
    });
    console.log('');
  }

  if (failed.length > 0) {
    console.log('❌ Failed compressions:');
    failed.forEach(r => {
      console.log(`   - ${r.name}`);
      console.log(`     Path: ${r.input}`);
      console.log(`     Error: ${r.error}`);
    });
    console.log('');
  }

  console.log('============================================================\n');

  if (successful.length > 0) {
    console.log('📝 NEXT STEPS:\n');
    console.log('1. Review the compressed videos to ensure quality is acceptable');
    console.log('2. Update the upload script to use compressed versions');
    console.log('3. Run: node scripts/uploadToCloudinary.js');
    console.log('   (It will automatically upload the newly compressed files)\n');
  }

  if (failed.length > 0) {
    console.log('⚠️  Some videos failed to compress. You can:');
    console.log('   - Try compressing them manually with different settings');
    console.log('   - Use online compression tools');
    console.log('   - Host them on alternative platforms (Vimeo, YouTube unlisted)\n');
  }

  console.log('============================================================');
}

// Run the script
main().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
