# ✅ Quick Fix: Discord Redirect to Railway

## Your Railway URL:
`https://zrx-market-copy-production.up.railway.app`

---

## 🔧 What to Do:

### Step 1: Add FRONTEND_URL to Railway

1. Go to **Railway Dashboard**
2. Click your service → **Variables** tab
3. Click **"+ New Variable"**
4. Add:
   - **Name**: `FRONTEND_URL`
   - **Value**: `https://zrx-market-copy-production.up.railway.app`
5. Click **"Add"**

### Step 2: Add/Update Other Required Variables

Make sure these are also set in Railway:

- `BASE_URL` = `https://zrx-market-copy-production.up.railway.app`
- `DISCORD_REDIRECT_URI` = `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`

---

## 🔧 Update Discord Developer Portal

1. Go to: https://discord.com/developers/applications
2. Your App → **OAuth2** → **Redirects**
3. Add (if not there):
   - `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`
4. **Save Changes**

---

## ✅ Done!

After Railway redeploys (1-2 minutes), Discord login will redirect to your Railway website!

---

**Add `FRONTEND_URL` = `https://zrx-market-copy-production.up.railway.app` to Railway Variables!** 🎯

