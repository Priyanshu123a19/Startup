# 🚀 Vercel Blob Storage Migration Guide

Your project has been set up to migrate from Cloudinary to **Vercel Blob Storage** - a permanent free tier solution.

## ✅ Why Vercel Blob?

- **500GB bandwidth/month** on free tier (vs Cloudinary's 25GB)
- **Native integration** with Next.js
- **No monthly limits** that reset
- **Better for Next.js projects** deployed on Vercel

---

## 📋 Migration Steps

### Step 1: Install Dependencies

```bash
npm install
```

This installs `@vercel/blob` package (already added to package.json).

### Step 2: Get Vercel Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (or create one)
3. Go to **Storage** tab
4. Click **Create Database** → **Blob**
5. Copy the `BLOB_READ_WRITE_TOKEN`

### Step 3: Configure Environment Variables

Create `.env.local` file (copy from example):

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add:

```bash
# Required for migration
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_XXXXXXXXXXXXXXXX

# Your existing Cloudinary credentials (keep these during migration)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Step 4: Run Migration Script

```bash
node scripts/migrateToVercelBlob.js
```

This will:
- Download all 26 videos from Cloudinary
- Upload them to Vercel Blob Storage
- Generate a mapping file: `vercel-blob-urls.json`
- Show progress for each video

**Expected output:**
```
🚀 Starting migration from Cloudinary to Vercel Blob...

📊 Found 26 videos to migrate

[1/26] Processing: collab/urban-needs/product-1
   📥 Downloading from Cloudinary...
   ✓ Downloaded 12.45 MB
   ☁️  Uploading to Vercel Blob...
   ✅ SUCCESS: https://[random].public.blob.vercel-storage.com/videos/...

...

📊 MIGRATION SUMMARY
======================================================================
✅ Successful: 26
❌ Failed: 0
```

### Step 5: Update Video URLs

After successful migration, you'll have `vercel-blob-urls.json` with all the new URLs.

Copy the URLs from this file into `src/lib/videoAssets.ts`:

```typescript
const VERCEL_BLOB_URLS: Record<string, string> = {
  'collab/urban-needs/product-1': 'https://xxx.public.blob.vercel-storage.com/videos/...',
  'collab/urban-needs/product-2': 'https://xxx.public.blob.vercel-storage.com/videos/...',
  // ... paste all URLs from vercel-blob-urls.json
};
```

### Step 6: Test Your App

```bash
npm run dev
```

Visit your site and verify all videos are loading correctly from Vercel Blob.

### Step 7: Clean Up (Optional)

Once everything works:

1. **Remove Cloudinary variables** from `.env.local` (keep BLOB_READ_WRITE_TOKEN)
2. **Delete videos from Cloudinary** to free up space
3. **Remove Cloudinary package** if not needed: `npm uninstall cloudinary`

---

## 🎯 Video List (26 videos to migrate)

### Collaborations (17 videos)
- Urban Needs: 3 videos
- Burger Bae: 2 videos  
- San Kalra: 3 videos
- Ashmita Arora: 1 video
- Blue Jelly Media: 3 videos
- Dr. Chaitanya Challa: 1 video
- Erasavir: 2 videos
- Rangaai: 1 video
- Suhana Sethi: 1 video

### Our Work (9 videos)
- Mini Vlogs: 2 videos
- Montage: 1 video
- Person to Camera: 2 videos
- UGC: 2 videos
- Creative: 2 videos

---

## ⚠️ Important Notes

- **Migration time**: ~5-10 minutes for 26 videos (depends on file sizes)
- **Bandwidth**: No cost during migration (using Cloudinary free tier one last time)
- **Vercel limits**: 500GB/month bandwidth is very generous for video hosting
- **Backup**: Cloudinary videos remain until you delete them

## 🆘 Troubleshooting

### Error: `BLOB_READ_WRITE_TOKEN not found`
- Make sure you created `.env.local` (not `.env`)
- Copy the token from Vercel Dashboard → Storage → Blob
- Restart the migration script

### Error: `Failed to download from Cloudinary`
- Check your Cloudinary credentials in `.env.local`
- Verify the video exists in your Cloudinary account
- Check if you've hit Cloudinary bandwidth limit (likely the case)

### Videos not loading after migration
- Verify URLs were copied correctly to `videoAssets.ts`
- Check browser console for errors
- Ensure `BLOB_READ_WRITE_TOKEN` is in production environment variables on Vercel

---

## 📊 Cost Comparison

| Service | Free Tier | Monthly Limits | Your Usage |
|---------|-----------|----------------|------------|
| **Cloudinary** | ✅ | 25GB bandwidth | ❌ EXCEEDED |
| **Vercel Blob** | ✅ | 500GB bandwidth | ✅ ~5-10GB |

**Result**: Vercel Blob gives you **20x more bandwidth** for free! 🎉

---

Need help? Check the migration script output for detailed error messages.
