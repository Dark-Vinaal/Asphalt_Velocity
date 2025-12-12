# Quick Setup Guide

## Important: Asset Folder Setup

For React to serve your videos and images, you need to move the `Assets` and `Logos` folders into the `public` folder.

### Option 1: Manual Move (Windows)
1. Cut the `Assets` folder from the root directory
2. Paste it into the `public` folder
3. Cut the `Logos` folder from the root directory  
4. Paste it into the `public` folder

### Option 2: Using Command Line (Windows PowerShell)
```powershell
Move-Item -Path "Assets" -Destination "public\Assets"
Move-Item -Path "Logos" -Destination "public\Logos"
```

### Option 3: Using Command Line (Git Bash / Linux / Mac)
```bash
mv Assets public/Assets
mv Logos public/Logos
```

## After Moving Assets

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. The app will open at `http://localhost:3000`

## Folder Structure After Setup

```
asphalt-velocity-v2/
├── public/
│   ├── Assets/          ← Moved here
│   ├── Logos/           ← Moved here
│   └── index.html
├── src/
│   ├── components/
│   ├── brands.json
│   └── ...
└── ...
```

## Troubleshooting

- **Videos/Images not loading?** Make sure `Assets` and `Logos` are in the `public` folder
- **Build errors?** Run `npm install` again
- **Port already in use?** React will prompt you to use a different port

