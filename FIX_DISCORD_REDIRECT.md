# 🔧 Fix Discord OAuth Redirect to Vercel

## The Problem

Discord authentication redirects you to `localhost` instead of your Vercel website.

## ✅ The Fix

You need to set `FRONTEND_URL` environment variable in Railway to your Vercel URL!

---

## Step 1: Add FRONTEND_URL to Railway

1. Go to Railway → Your Service → **Variables** tab
2. Click **"+ New Variable"**
3. Add:
   - **Variable Name**: `FRONTEND_URL`
   - **Value**: `https://zrx-market-git-main-zrxmarkets-projects.vercel.app`
4. Click **"Add"**

---

## Step 2: Update DISCORD_REDIRECT_URI

Make sure `DISCORD_REDIRECT_URI` points to your **Railway backend** URL:

- **Variable Name**: `DISCORD_REDIRECT_URI`
- **Value**: `https://YOUR-RAILWAY-URL.railway.app/auth/discord/callback`
  - Replace `YOUR-RAILWAY-URL` with your actual Railway backend URL

---

## Step 3: Update Discord Developer Portal

1. Go to: https://discord.com/developers/applications
2. Your Application → **OAuth2** → **Redirects**
3. Make sure you have:
   - `https://YOUR-RAILWAY-URL.railway.app/auth/discord/callback`
   - (This is the BACKEND URL, not Vercel!)

---

## Step 4: Update Frontend API URL

Your frontend (on Vercel) needs to point to your Railway backend:

1. Go to Vercel Dashboard
2. Your Project → **Settings** → **Environment Variables**
3. Add:
   - **Variable Name**: `VITE_API_URL`
   - **Value**: `https://YOUR-RAILWAY-URL.railway.app`
   - (Your Railway backend URL)
4. Redeploy frontend on Vercel

---

## 📋 Summary

**Railway (Backend) Variables:**
- `FRONTEND_URL` = `https://zrx-market-git-main-zrxmarkets-projects.vercel.app`
- `DISCORD_REDIRECT_URI` = `https://YOUR-RAILWAY-URL.railway.app/auth/discord/callback`
- `BASE_URL` = `https://YOUR-RAILWAY-URL.railway.app`

**Vercel (Frontend) Variables:**
- `VITE_API_URL` = `https://YOUR-RAILWAY-URL.railway.app`

**Discord OAuth Redirect:**
- Should be: `https://YOUR-RAILWAY-URL.railway.app/auth/discord/callback`
- (Backend URL, not frontend!)

---

## ✅ After Adding FRONTEND_URL

Railway will redirect to your Vercel website after Discord login instead of localhost!

---

**Add `FRONTEND_URL` = your Vercel URL to Railway Variables!** 🔧

