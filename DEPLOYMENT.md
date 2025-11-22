# Deployment Guide

## 🚀 Live URL

Your YSS Analytics Dashboard is now live at:

**https://abcd-shubham.github.io/Dashboard-YSS/**

## 📦 Deployment Method

This app is deployed using **GitHub Pages** - a free static site hosting service provided by GitHub.

## 🔄 How to Redeploy

Whenever you make changes and want to update the live site:

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"
git push origin main

# 2. Deploy to GitHub Pages
npm run deploy
```

The `npm run deploy` command will:
1. Build the production version (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve the updated site

## ⚙️ Configuration Files

### package.json
- Added `homepage` field pointing to your GitHub Pages URL
- Added `predeploy` and `deploy` scripts

### vite.config.js
- Set `base: '/Dashboard-YSS/'` to match your repository name

## 🌐 GitHub Pages Settings

To verify or modify settings:
1. Go to your repository: https://github.com/ABCD-Shubham/Dashboard-YSS
2. Click **Settings** → **Pages**
3. Ensure:
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

## 📝 Notes

- **Free Hosting**: GitHub Pages is completely free for public repositories
- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: Automatically enabled
- **Build Time**: Deployment takes ~1-2 minutes to go live

## 🛠 Troubleshooting

If the site doesn't load:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the `gh-pages` branch exists
3. Wait 2-3 minutes after deployment
4. Clear browser cache and try again

## 📊 Features Deployed

✅ Dashboard with analytics  
✅ Lead management system  
✅ Lead profile details  
✅ Coming soon pages (Inbox & Settings)  
✅ Responsive design  
✅ All screenshots and assets

---

**Deployed on**: November 22, 2025  
**Platform**: GitHub Pages  
**Repository**: https://github.com/ABCD-Shubham/Dashboard-YSS
