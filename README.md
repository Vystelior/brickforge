# BrickForge 🧱

A fan-made streaming site for LEGO Nexo Knights and Legends of Chima, using Google Drive as the video backend.

---

## Project Structure

```
brickforge/
├── index.html          ← Homepage
├── nexo.html           ← Nexo Knights (4 chapters × 2 parts each)
├── chima.html          ← Legends of Chima (3 seasons, placeholder episodes)
├── styles/
│   └── global.css      ← All styles
├── scripts/
│   └── nav.js          ← Navigation logic
└── vercel.json         ← Vercel deployment config
```

---

## Adding Your Google Drive Videos

### Step 1 — Upload your video to Google Drive
Upload each episode file to Google Drive.

### Step 2 — Make the file publicly accessible
Right-click the file → Share → Change to "Anyone with the link" → set to "Viewer".

### Step 3 — Get the File ID
From the share URL:
```
https://drive.google.com/file/d/THIS_IS_YOUR_FILE_ID/view
```
Copy the `FILE_ID` portion.

### Step 4 — Paste into the HTML
Open `nexo.html` or `chima.html` and find the data arrays near the bottom of the file.

Replace `YOUR_DRIVE_FILE_ID_HERE` with your actual file ID:
```js
{ ep: 1, title: "A Tangled Web", driveId: "1aBcDeFgHiJkLmNoPqRsTuVwXyZ" }
```

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)
```bash
npm install -g vercel
cd brickforge
vercel
```
Follow the prompts. Your site will be live at a `.vercel.app` URL.

### Option B — Vercel Dashboard (drag & drop)
1. Go to https://vercel.com/new
2. Click "Browse" and upload the entire `brickforge/` folder
3. Click Deploy — done!

### Option C — GitHub
1. Push the `brickforge/` folder to a GitHub repo
2. Import the repo on https://vercel.com/new
3. Vercel auto-detects static files and deploys instantly

---

## Customising Episode Titles

**Nexo Knights** (`nexo.html`): The chapter titles are placeholders. Update the `chapters` array:
```js
{ number: 1, title: "Your Real Chapter Title", parts: [...] }
```

**Legends of Chima** (`chima.html`): Update the `seasons` array with real episode titles and add/remove episodes as needed.

---

## Notes
- Videos are embedded via Google Drive's `/preview` embed URL
- The player opens in a fullscreen modal overlay
- Works on mobile, tablet, and desktop
- No server required — fully static
