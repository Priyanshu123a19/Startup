/**
 * Video Assets Configuration - Vercel Blob Storage
 * 
 * This file manages video assets stored in Vercel Blob Storage.
 * Videos are mapped by their Vercel Blob URLs for reliable, permanent free hosting.
 * 
 * Migration: Videos were migrated from Cloudinary to Vercel Blob Storage
 * to avoid free tier limits and ensure permanent availability.
 */

// Video URL mapping (populated after migration)
// Run: node scripts/migrateToVercelBlob.js to generate these URLs
const VERCEL_BLOB_URLS: Record<string, string> = {
  "collab/urban-needs/product-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/urban-needs/product-1.mp4",
  "collab/urban-needs/product-2": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/urban-needs/product-2.mp4",
  "collab/urban-needs/product-3": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/urban-needs/product-3.mp4",
  "collab/burger-bae/food-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/burger-bae/food-1.mp4",
  "collab/burger-bae/food-2": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/burger-bae/food-2.mp4",
  "collab/san-kalra/lifestyle-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/san-kalra/lifestyle-1.mp4",
  "collab/san-kalra/lifestyle-2": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/san-kalra/lifestyle-2.mp4",
  "collab/san-kalra/lifestyle-3": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/san-kalra/lifestyle-3.mp4",
  "collab/ashmita-arora/content-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/ashmita-arora/content-1.mp4",
  "collab/blue-jelly-media/media-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/blue-jelly-media/media-1.mp4",
  "collab/blue-jelly-media/media-2": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/blue-jelly-media/media-2.mp4",
  "collab/blue-jelly-media/draft": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/blue-jelly-media/draft.mp4",
  "collab/dr-chaitanya-challa/cancer-genetic": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/dr-chaitanya-challa/cancer-genetic.mp4",
  "collab/erasavir/trial-video-compressed": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/erasavir/trial-video-compressed.mp4",
  "collab/erasavir/ad-cta": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/erasavir/ad-cta.mp4",
  "collab/rangaai/brand-content": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/rangaai/brand-content.mp4",
  "collab/suhana-sethi/bmw-event-compressed": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/collab/suhana-sethi/bmw-event-compressed.mp4",
  "our-work/mini-vlog/bmw-event-compressed": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/mini-vlog/bmw-event-compressed.mp4",
  "our-work/mini-vlog/daily-lifestyle": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/mini-vlog/daily-lifestyle.mp4",
  "our-work/montage/creative-compilation": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/montage/creative-compilation.mp4",
  "our-work/person-to-camera/health-wellness": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/person-to-camera/health-wellness.mp4",
  "our-work/person-to-camera/lifestyle-selfcare": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/person-to-camera/lifestyle-selfcare.mp4",
  "our-work/ugc/ugc-style": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/ugc/ugc-style.mp4",
  "our-work/ugc/cta-ad": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/ugc/cta-ad.mp4",
  "our-work/new/creative-showcase-1": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/new/creative-showcase-1.mp4",
  "our-work/new/creative-showcase-2": "https://hpfezxcb028xybmv.public.blob.vercel-storage.com/videos/our-work/new/creative-showcase-2.mp4",
};

// Helper function to generate video URL
const getVideoUrlFromId = (videoId: string) => {
  // If we have a Vercel Blob URL, use it (production)
  if (VERCEL_BLOB_URLS[videoId]) {
    return VERCEL_BLOB_URLS[videoId];
  }
  
  // Fallback to Cloudinary during migration (temporary)
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (cloudName) {
    return `https://res.cloudinary.com/${cloudName}/video/upload/${videoId}.mp4`;
  }
  
  // Development fallback
  console.warn(`No URL found for video: ${videoId}`);
  return `/assets/placeholder-video.mp4`;
};

/**
 * Video Assets organized by section
 */
export const videoAssets = {
  // ====================
  // COLLABORATIONS
  // ====================
  collaborations: {
    urbanNeeds: {
      name: "Urban Needs",
      dp: "/assets/dp/urban needs.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/urban-needs/product-1",
          // Original: 200rsOFF code in my broadcast channel_._._🏷️ oversized tshirts relaxed fit graphic printed puff print high gsm(MP4).mp4
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/urban-needs/product-2",
          // Original: Video-13.mp4
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/urban-needs/product-3",
          // Original: Video-512.mp4
        },
      ],
    },
    
    burgerBae: {
      name: "Burger Bae",
      dp: "/assets/dp/burger bae.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/burger-bae/food-1",
          // Original: 16_02_2025, 12_11_46.mp4
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/burger-bae/food-2",
          // Original: AQPPe5hprMjavywHugnOWD2Gwa4dywGjGGlm_XZ7-SaHvogG8wgznz7SitHDiXFBGyYekHllUM3MbZbar9c1Gmb0iFacQZiTTCvn_44.mp4
        },
      ],
    },
    
    sanKalra: {
      name: "San Kalra",
      dp: "/assets/dp/san kalra.jpg",
      videos: [
        {
          title: "Creator Content",
          cloudinaryId: "collab/san-kalra/lifestyle-1",
          // Original: 21_02_2025, 21_03_51.mp4
        },
        {
          title: "Creator Content",
          cloudinaryId: "collab/san-kalra/lifestyle-2",
          // Original: vacation tan is fun_ daily life wala nahi bhai 😭 _h8 the sun for tans_ but obv love for the cortisol pulses every morn 😮_💨 _trying the _beardo.of(.mp4
        },
        {
          title: "Creator Content",
          cloudinaryId: "collab/san-kalra/lifestyle-3",
          // Original: Video-735.mp4
        },
      ],
    },
    
    ashmitaArora: {
      name: "Ashmita Arora",
      dp: "/assets/dp/ashmita arora .jpg",
      videos: [
        {
          title: "Creator Content",
          cloudinaryId: "collab/ashmita-arora/content-1",
          // Original: Video-835.mp4
        },
      ],
    },
    
    blueJellyMedia: {
      name: "Blue Jelly Media",
      dp: "/assets/dp/blue jelly media.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/blue-jelly-media/media-1",
          // Original: 16_02_2025, 12_11_49.mp4
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/blue-jelly-media/media-2",
          // Original: 21_2_2025, 9_04_23 PM.mov
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/blue-jelly-media/draft",
          // Original: draft .mp4
        },
      ],
    },
    
    drChaitanyaChalla: {
      name: "Dr. Chaitanya Challa",
      dp: "/assets/dp/chaitanya challa.jpg",
      videos: [
        {
          title: "Creator Content",
          cloudinaryId: "collab/dr-chaitanya-challa/cancer-genetic",
          // Original: 33.IS CANCER GENETIC (1).mp4
        },
      ],
    },
    
    erasavir: {
      name: "Erasavir",
      dp: "/assets/dp/erasavir.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/erasavir/trial-video-compressed",
          // Original: 30 oct trial video _compressed.mp4
        },
        {
          title: "Brand Content",
          cloudinaryId: "collab/erasavir/ad-cta",
          // Original: ads cta.mov
        },
      ],
    },
    
    rangaai: {
      name: "Rangaai",
      dp: "/assets/dp/rangaai .webp",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/rangaai/brand-content",
          // Original: 16_02_2025, 12_12_17.mp4
        },
      ],
    },
    
    suhanaSethi: {
      name: "Suhana Sethi",
      dp: "/assets/dp/suhana sethi.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/suhana-sethi/bmw-event-compressed",
          // Original: bmw event(6)_compressed.mov
        },
      ],
    },
  },

  // ====================
  // OUR WORK (Bento Grid)
  // ====================
  ourWork: [
    {
      id: 1,
      title: "BMW Event Coverage",
      description: "High-energy event vlog with dynamic shots and premium production",
      category: "Mini Vlog",
      cloudinaryId: "our-work/mini-vlog/bmw-event-compressed",
      size: "large", // 4 cols x 2 rows
      // Original: mini vlog/bmw event(6)_compressed.mov
    },
    {
      id: 2,
      title: "Daily Lifestyle Vlog",
      description: "Engaging lifestyle content with authentic storytelling",
      category: "Mini Vlog",
      cloudinaryId: "our-work/mini-vlog/daily-lifestyle",
      size: "tall", // 2 cols x 3 rows
      // Original: mini vlog/21_02_2025, 21_03_51.mp4
    },
    {
      id: 3,
      title: "Creative Montage",
      description: "Dynamic montage with seamless transitions and rhythm",
      category: "Montage",
      cloudinaryId: "our-work/montage/creative-compilation",
      size: "medium", // 2 cols x 2 rows
      // Original: montage/21_02_2025, 21_03_52.mp4
    },
    {
      id: 4,
      title: "Health & Wellness Talk",
      description: "Educational person-to-camera content with professional delivery",
      category: "Person to Camera",
      cloudinaryId: "our-work/person-to-camera/health-wellness",
      size: "tall", // 2 cols x 3 rows
      // Original: person to camera/33.IS CANCER GENETIC (1).mp4
    },
    {
      id: 5,
      title: "Lifestyle & Self-Care",
      description: "Authentic daily life content with relatable moments",
      category: "Person to Camera",
      cloudinaryId: "our-work/person-to-camera/lifestyle-selfcare",
      size: "medium", // 2 cols x 2 rows
      // Original: person to camera/vacation tan is fun...
    },
    {
      id: 6,
      title: "UGC Style Content",
      description: "Authentic user-generated style video with natural appeal",
      category: "UGC",
      cloudinaryId: "our-work/ugc/ugc-style",
      size: "medium", // 2 cols x 2 rows
      // Original: ugc/16_02_2025, 12_12_17.mp4
    },
    {
      id: 7,
      title: "Call-to-Action Ad",
      description: "Compelling advertising content with strong conversion focus",
      category: "UGC",
      cloudinaryId: "our-work/ugc/cta-ad",
      size: "large", // 4 cols x 2 rows
      // Original: ugc/ads cta.mov
    },
    {
      id: 8,
      title: "Creative Showcase 1",
      description: "High-quality creative content with cinematic flair",
      category: "Creative",
      cloudinaryId: "our-work/new/creative-showcase-1",
      size: "medium", // 2 cols x 2 rows
      // Original: new/Video-13(1).mp4
    },
    {
      id: 9,
      title: "Creative Showcase 2",
      description: "Professional brand storytelling with visual impact",
      category: "Creative",
      cloudinaryId: "our-work/new/creative-showcase-2",
      size: "medium", // 2 cols x 2 rows
      // Original: new/Video-512.mp4
    },
  ],
};

/**
 * Helper function to get video URL from video ID
 */
export const getVideoUrl = (videoId: string): string => {
  return getVideoUrlFromId(videoId);
};

/**
 * Get all collaborations as an array (for easy mapping in components)
 */
export const getCollaborationsArray = () => {
  return Object.values(videoAssets.collaborations).map((collab) => ({
    brandName: collab.name,
    logo: collab.dp,
    work: collab.videos.map((video) => ({
      title: video.title,
      description: "", // We removed descriptions from display
      media: getVideoUrl(video.cloudinaryId),
      type: "video" as const,
    })),
  }));
};

/**
 * Get our work projects with video URLs
 */
export const getOurWorkProjects = () => {
  return videoAssets.ourWork.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    video: getVideoUrl(project.cloudinaryId),
    category: project.category,
    size: project.size,
  }));
};
