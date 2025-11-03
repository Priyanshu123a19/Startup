# 📹 Cloudinary Video Setup Guide

This guide will help you set up Cloudinary for video hosting and deploy your site successfully.

## 🎯 Why Cloudinary?

- ✅ **Free tier**: 25GB storage, 25GB bandwidth/month
- ✅ **Global CDN**: Fast video loading worldwide
- ✅ **No Git size issues**: Videos stored in cloud, not in repository
- ✅ **Automatic optimization**: Videos are compressed and optimized automatically

---

## 📋 Step-by-Step Setup

### Step 1: Create Cloudinary Account

1. Go to: https://cloudinary.com/users/register_free
2. Sign up with your email (completely free)
3. Verify your email
4. Log in to your dashboard

### Step 2: Get Your Credentials

Once logged in to Cloudinary dashboard:

1. You'll see a section called **Account Details**
2. Note down these 3 credentials:
   - **Cloud Name** (e.g., `dxxxxxxx`)
   - **API Key** (e.g., `123456789012345`)
   - **API Secret** (e.g., `abcdefghijklmnopqrstuvwxyz`)

### Step 3: Configure Environment Variables

1. In your project root, copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and replace the placeholders with your actual credentials:
   ```bash
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxxxxxxx
   CLOUDINARY_API_KEY=123456789012345
   CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz
   ```

### Step 4: Install Cloudinary SDK

```bash
npm install cloudinary dotenv
```

### Step 5: Upload Videos to Cloudinary

Run the automated upload script:

```bash
node scripts/uploadToCloudinary.js
```

**What this script does:**
- Uploads all 30 videos automatically
- Organizes them in proper folders (collab/, our-work/)
- Shows progress for each upload
- Takes 10-15 minutes depending on your internet speed

**Example output:**
```
✅ Cloudinary configured successfully!
Cloud Name: dxxxxxxx

⬆️  [1/30] Uploading: collab/urban-needs/product-1 (45.23 MB)
✅ [1/30] Success: collab/urban-needs/product-1
⬆️  [2/30] Uploading: collab/urban-needs/product-2 (32.15 MB)
✅ [2/30] Success: collab/urban-needs/product-2
...
🎉 All videos uploaded successfully!
```

### Step 6: Test Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit:
   - http://localhost:3000/our-work (check bento grid videos)
   - http://localhost:3000/collaborations (check client videos)

3. Verify all videos load and play correctly

### Step 7: Deploy to Production

Once everything works locally:

```bash
# Add environment variables to Vercel
# Go to: https://vercel.com/your-project/settings/environment-variables
# Add the same 3 variables from .env.local

# Commit and push
git add .
git commit -m "Setup Cloudinary video hosting"
git push origin main
```

**Important**: Videos are NOT pushed to GitHub (they're in [`.gitignore`](.gitignore )). Only Cloudinary URLs are used in production.

---

## 📁 Project Structure

```
d:\startup\
├── src/
│   ├── lib/
│   │   └── videoAssets.ts          # Centralized video configuration
│   ├── app/
│   │   ├── our-work/
│   │   │   └── page.tsx            # Uses getOurWorkProjects()
│   │   └── collaborations/
│   │       └── page.tsx            # Uses getCollaborationsArray()
├── scripts/
│   └── uploadToCloudinary.js       # Automated upload script
├── public/
│   └── assets/
│       ├── dp/                     # DP images (kept locally, they're small)
│       ├── collab/                 # Videos (gitignored, on Cloudinary)
│       ├── mini vlog/              # Videos (gitignored, on Cloudinary)
│       ├── montage/                # Videos (gitignored, on Cloudinary)
│       ├── person to camera/       # Videos (gitignored, on Cloudinary)
│       ├── ugc/                    # Videos (gitignored, on Cloudinary)
│       └── new/                    # Videos (gitignored, on Cloudinary)
├── .env.local                      # Your credentials (gitignored)
├── .env.local.example              # Template for credentials
└── CLOUDINARY_SETUP.md             # This file
```

---

## 🎬 Video Organization

### Collaborations (20 videos across 11 clients)

| Client | Videos | Cloudinary Path |
|--------|--------|-----------------|
| Urban Needs | 3 | `collab/urban-needs/` |
| Burger Bae | 2 | `collab/burger-bae/` |
| San Kalra | 3 | `collab/san-kalra/` |
| Ashmita Arora | 1 | `collab/ashmita-arora/` |
| Be Your Best | 2 | `collab/be-your-best/` |
| Blue Jelly Media | 3 | `collab/blue-jelly-media/` |
| Carer | 1 | `collab/carer/` |
| Dr. Chaitanya Challa | 1 | `collab/dr-chaitanya-challa/` |
| Erasavir | 2 | `collab/erasavir/` |
| Rangaai | 1 | `collab/rangaai/` |
| Suhana Sethi | 1 | `collab/suhana-sethi/` |

### Our Work (9 videos)

| Category | Videos | Cloudinary Path |
|----------|--------|-----------------|
| Mini Vlog | 2 | `our-work/mini-vlog/` |
| Montage | 1 | `our-work/montage/` |
| Person to Camera | 2 | `our-work/person-to-camera/` |
| UGC | 2 | `our-work/ugc/` |
| Creative/New | 2 | `our-work/new/` |

---

## 🔧 How It Works

### 1. Video Assets Configuration ([`src/lib/videoAssets.ts`](src/lib/videoAssets.ts))

This file contains:
- All video mappings (local path → Cloudinary ID)
- Helper functions to generate Cloudinary URLs
- Organized by section (collaborations, our work)

```typescript
export const videoAssets = {
  collaborations: {
    urbanNeeds: {
      name: "Urban Needs",
      dp: "/assets/dp/urban needs.jpg",
      videos: [
        {
          title: "Brand Content",
          cloudinaryId: "collab/urban-needs/product-1",
          // Original: 200rsOFF code...mp4
        },
        // ...
      ],
    },
    // ...
  },
  ourWork: [
    {
      id: 1,
      title: "BMW Event Coverage",
      cloudinaryId: "our-work/mini-vlog/bmw-event",
      // ...
    },
    // ...
  ],
};
```

### 2. Helper Functions

```typescript
// Get Cloudinary URL for a video
getVideoUrl("collab/urban-needs/product-1")
// Returns: https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/collab/urban-needs/product-1

// Get all collaborations as array
getCollaborationsArray()

// Get all our work projects
getOurWorkProjects()
```

### 3. Pages Use These Functions

**Collaborations Page:**
```typescript
import { getCollaborationsArray } from "@/lib/videoAssets";
const collaborations = getCollaborationsArray();
```

**Our Work Page:**
```typescript
import { getOurWorkProjects } from "@/lib/videoAssets";
const projects = getOurWorkProjects();
```

---

## ❓ Troubleshooting

### Videos not showing locally

**Problem**: Blank video players or 404 errors

**Solution**:
1. Check `.env.local` has correct credentials
2. Verify `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (must start with `NEXT_PUBLIC_`)
3. Restart dev server: `npm run dev`

### Upload script fails

**Problem**: `ERROR: File not found`

**Solution**:
1. Make sure you're running from project root: `node scripts/uploadToCloudinary.js`
2. Check video files exist in `public/assets/` folders
3. Check file paths in script match your actual folder names

### Slow upload speed

**Problem**: Upload taking too long

**Solution**:
- This is normal for large video files
- Close other apps using internet
- Upload during off-peak hours
- You can pause (Ctrl+C) and resume (re-run script) - Cloudinary skips already uploaded files

### Rate limit errors

**Problem**: `429 Too Many Requests`

**Solution**:
- The script has built-in delays between uploads
- If it still happens, wait a few minutes and re-run
- Already uploaded videos won't be re-uploaded

### Videos show in dev but not production

**Problem**: Videos work on `localhost:3000` but not on deployed site

**Solution**:
1. Add environment variables to Vercel:
   - Go to https://vercel.com/your-project/settings/environment-variables
   - Add all 3 Cloudinary variables
2. Redeploy: `git push origin main`

---

## 💰 Cloudinary Free Tier Limits

- **Storage**: 25 GB
- **Bandwidth**: 25 GB/month
- **Transformations**: 25,000/month

**Your current usage**: ~2-3 GB storage, well within limits! 🎉

If you ever exceed limits:
- Upgrade to paid plan (starts at $99/month)
- Or compress videos further before uploading

---

## 📞 Support

If you encounter issues:

1. **Check Cloudinary Dashboard**: https://cloudinary.com/console
   - View uploaded videos
   - Check usage statistics
   - Test video URLs

2. **Verify Environment Variables**:
   ```bash
   # In project root
   cat .env.local
   ```

3. **Test a single video manually**:
   ```bash
   # Open Node.js REPL
   node
   
   # Test Cloudinary connection
   const cloudinary = require('cloudinary').v2;
   cloudinary.config({
     cloud_name: 'YOUR_CLOUD_NAME',
     api_key: 'YOUR_API_KEY',
     api_secret: 'YOUR_API_SECRET'
   });
   cloudinary.api.resources({ resource_type: 'video', max_results: 5 })
     .then(result => console.log(result));
   ```

---

## ✅ Checklist

Before deploying, ensure:

- [ ] Cloudinary account created
- [ ] Credentials added to `.env.local`
- [ ] `npm install cloudinary dotenv` completed
- [ ] Upload script ran successfully (all videos uploaded)
- [ ] Local testing passed (videos load on localhost)
- [ ] Environment variables added to Vercel
- [ ] `.gitignore` excludes video files
- [ ] Code committed and pushed to GitHub
- [ ] Deployed to Vercel successfully

---

## 🎉 You're Done!

Your site now uses Cloudinary for fast, global video delivery with no GitHub size limits!

**Benefits achieved:**
- ✅ No Git LFS bandwidth limits
- ✅ No 100MB file size errors
- ✅ Fast video loading worldwide (CDN)
- ✅ Automatic video optimization
- ✅ Professional hosting solution
- ✅ Free for your use case

Enjoy your lightning-fast video portfolio! 🚀
