# 🚀 Quick Start Guide - How to Open the Website

## Step 1: Move Assets to Public Folder (One-time setup)

**IMPORTANT:** React needs assets in the `public` folder to serve them.

### Windows (PowerShell):
```powershell
Move-Item -Path "Assets" -Destination "public\Assets"
Move-Item -Path "Logos" -Destination "public\Logos"
```

### Or manually:
1. Cut the `Assets` folder from root
2. Paste into `public` folder
3. Cut the `Logos` folder from root
4. Paste into `public` folder

## Step 2: Install Dependencies

Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install React, Tailwind CSS, and all required packages.

## Step 3: Start the Development Server

```bash
npm start
```

## Step 4: Open in Browser

After running `npm start`:
- The terminal will show: **"Compiled successfully!"**
- Your browser will **automatically open** to: **http://localhost:3000**
- If it doesn't open automatically, manually go to: **http://localhost:3000**

## ✅ That's It!

The website will be running on **localhost:3000**

### What You'll See:
- The React development server running
- Hot reload (changes update automatically)
- The Asphalt Velocity website with all features

### To Stop the Server:
Press `Ctrl + C` in the terminal

---

## ❌ Don't Do This:
- ❌ Don't open `index.html` directly in browser (it won't work)
- ❌ Don't copy file path to address bar
- ✅ Use `npm start` and go to `localhost:3000`

---

## Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org/

**"Port 3000 already in use"**
- React will ask to use a different port (like 3001)
- Just say yes, then go to that port in browser

**Videos/Images not showing?**
- Make sure `Assets` and `Logos` are in the `public` folder

