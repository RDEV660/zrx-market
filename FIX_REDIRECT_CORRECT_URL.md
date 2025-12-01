# 🔧 Fix Discord Login Redirect - Your Railway URL

## Your URLs:

- **Railway Backend**: `https://zrx-market-copy-production.up.railway.app/`
- **Vercel Frontend**: `https://zrx-market-git-main-zrxmarkets-projects.vercel.app`

---

## ✅ The Fix: Add FRONTEND_URL to Railway

### Option 1: If Railway is serving your website (recommended)

If Railway is serving both backend and frontend, set `FRONTEND_URL` to your Railway URL:

1. Go to **Railway Dashboard** → Your Service → **Variables** tab
2. Click **"+ New Variable"** or edit existing
3. Add/Update:
   - **Variable Name**: `FRONTEND_URL`
   - **Value**: `https://zrx-market-copy-production.up.railway.app`
4. Click **"Add"** or **"Update"**

### Option 2: If Vercel is serving frontend separately

If Vercel has the frontend and Railway only has backend:

1. **In Railway Variables:**
   - `FRONTEND_URL` = `https://zrx-market-git-main-zrxmarkets-projects.vercel.app`
   - `BASE_URL` = `https://zrx-market-copy-production.up.railway.app`
   - `DISCORD_REDIRECT_URI` = `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`

2. **In Vercel Environment Variables:**
   - `VITE_API_URL` = `https://zrx-market-copy-production.up.railway.app`

---

## 📋 Required Railway Variables

Make sure you have all of these in Railway:

- `FRONTEND_URL` = `https://zrx-market-copy-production.up.railway.app` ⭐ **This fixes the redirect!**
- `BASE_URL` = `https://zrx-market-copy-production.up.railway.app`
- `DISCORD_REDIRECT_URI` = `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`
- `DISCORD_CLIENT_ID` = (your Discord app client ID)
- `DISCORD_CLIENT_SECRET` = (your Discord app secret)
- `DISCORD_BOT_TOKEN` = (your Discord bot token)
- `GUILD_ID` = (your Discord server ID)
- `MIDDLEMAN_CHANNEL_ID` = (your middleman channel ID)
- `MIDDLEMAN_ROLE_ID` = (your middleman role ID)
- `SESSION_SECRET` = (random secret string)
- `PORT` = `3000` (or let Railway auto-assign)

---

## 🔧 Update Discord Developer Portal

1. Go to: https://discord.com/developers/applications
2. Your Application → **OAuth2** → **Redirects**
3. Make sure you have:
   - `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`
4. If not, click **"+ Add Redirect"** and add it
5. Click **"Save Changes"**

---

## ✅ After Adding/Updating Variables

1. Railway will auto-redeploy when you update variables
2. Wait 1-2 minutes for deployment to complete
3. Try Discord login again - it should redirect to your Railway website!

---

**The key fix: Set `FRONTEND_URL` = `https://zrx-market-copy-production.up.railway.app` in Railway!** 🎯

