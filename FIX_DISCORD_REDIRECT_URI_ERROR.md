# 🔧 Fix "Invalid OAuth2 redirect_uri" Error

## The Problem

Discord shows: **"Invalid OAuth2 redirect_uri"**

This means the redirect URI doesn't match what's configured in Discord Developer Portal.

---

## ✅ The Fix (2 Steps)

### Step 1: Add DISCORD_REDIRECT_URI to Railway

Your Railway URL: `https://zrx-market-copy-production.up.railway.app`

1. Go to **Railway Dashboard** → Your Service → **Variables** tab
2. Click **"+ New Variable"**
3. Add:
   - **Variable Name**: `DISCORD_REDIRECT_URI`
   - **Value**: `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`
   - ⚠️ **Important**: No trailing slash `/` at the end!
4. Click **"Add"**

---

### Step 2: Add Redirect URI to Discord Developer Portal

1. Go to: **https://discord.com/developers/applications**
2. Click your Discord Application
3. Go to **"OAuth2"** → **"General"** tab
4. Scroll down to **"Redirects"** section
5. Click **"+ Add Redirect"**
6. Enter:
   ```
   https://zrx-market-copy-production.up.railway.app/auth/discord/callback
   ```
   - ⚠️ **Important**: No trailing slash `/` at the end!
7. Click **"Save Changes"** (at the bottom of the page)

---

## ✅ Required Railway Variables Checklist

Make sure all of these are set in Railway:

- ✅ `DISCORD_REDIRECT_URI` = `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`
- ✅ `FRONTEND_URL` = `https://zrx-market-copy-production.up.railway.app`
- ✅ `BASE_URL` = `https://zrx-market-copy-production.up.railway.app`
- ✅ `DISCORD_CLIENT_ID` = (your Discord app client ID)
- ✅ `DISCORD_CLIENT_SECRET` = (your Discord app secret)
- ✅ `DISCORD_BOT_TOKEN` = (your Discord bot token)
- ✅ `GUILD_ID` = (your Discord server ID)

---

## 🎯 After Adding the Redirect URI

1. Railway will auto-redeploy (wait 1-2 minutes)
2. Discord login should work! ✅

---

## ⚠️ Common Mistakes

1. **Trailing slash**: Don't add `/` at the end
   - ❌ Wrong: `https://zrx-market-copy-production.up.railway.app/auth/discord/callback/`
   - ✅ Correct: `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`

2. **Wrong URL**: Make sure it's your Railway URL, not localhost
   - ❌ Wrong: `http://localhost:3000/auth/discord/callback`
   - ✅ Correct: `https://zrx-market-copy-production.up.railway.app/auth/discord/callback`

3. **Not saving in Discord**: Make sure to click **"Save Changes"** in Discord Developer Portal!

---

**Add `DISCORD_REDIRECT_URI` to Railway AND add it to Discord Developer Portal!** 🎯

