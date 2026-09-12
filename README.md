# Financial Literacy App - React SPA Prototype

An interactive single-page application (SPA) prototype built with React for a financial literacy learning platform targeting college students and early-career professionals.

## 🎯 Core Concept

**Learn financial literacy from real professionals in 5-minute lessons. Get ahead, invest confidently, earn certifications.**

FinLearn is a financial education app designed to make learning accessible, engaging, and rewarding through three main screens.

## 📱 Three Interactive Screens

1. **Landing Screen** - Browse modules, choose what to learn, access dashboard
2. **Learning Module** - Interactive lesson with definition, expert video, real-world application, and progress tracking
3. **Progress Dashboard** - Track achievements, earned certifications, and unlock new levels as you progress

## 🎨 Design System

- **Tone:** Chill, approachable, retro schoolhouse vibe
- **Colors:** Brick red (#A0342D), muted emerald (#2D5F4F), warm cream (#F5E6D3), success green (#4A7C59)
- **Typography:** 
  - Headings: Homemade Apple (cursive, from Google Fonts)
  - Body: Urbanist (clean sans-serif, from Google Fonts)
- **Aesthetic:** Vintage schoolhouse warmth with modern clarity

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+) and npm installed
- Git and GitHub account

### Installation

```bash
# Navigate to the project folder
cd "c:\IS 551"

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Deployment

```bash
# Create optimized production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

```
src/
├── App.js                      # Main app component with routing
├── App.css                     # Global styles
├── index.js                    # Entry point
└── components/
    ├── LandingScreen.js        # Screen 1: Module selection
    ├── LearningModule.js       # Screen 2: Interactive lesson
    └── ProgressDashboard.js    # Screen 3: Achievements & progress
public/
├── index.html                  # HTML template with Google Fonts
```

## 🔧 Git Workflow

This repository follows a branch-based workflow:

1. **Initial Commit** - AI-generated React SPA (unedited)
2. **Branch: `design-revisions`** - Edits and improvements
3. **Pull Request** - Review proposed changes
4. **Merge to Main** - Final approved version

### Git Commands

```bash
# Push first commit
git add .
git commit -m "Initial commit: React SPA prototype for financial literacy app"
git push -u origin main

# Create a branch for revisions
git checkout -b design-revisions

# After making edits
git add .
git commit -m "Refine [specific change description]"
git push -u origin design-revisions

# Create Pull Request on GitHub and merge
```

## 📋 Design Review Checklist

- ✅ Landing screen affordance is dominant and immediately clear
- ✅ All three screens have obvious navigation back to landing screen
- ✅ Visual grouping using Gestalt principles (proximity, similarity, continuity)
- ✅ All three screens visually belong to the same product
- ✅ Consistent color palette, typography, and spacing across all screens
- ✅ Supporting content appears only when it supports the primary job
- ✅ Interactive navigation between screens using React Router

## 🚢 Deployment

### Option 1: GitHub Pages (Recommended)

1. Update `homepage` in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://[YOUR_USERNAME].github.io/financial-literacy-app"
   ```

2. Run deployment:
   ```bash
   npm run deploy
   ```

3. Enable GitHub Pages in repository settings

### Option 2: Vercel (Simple & Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Vercel automatically deploys on every push

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 📚 Next Phase

- Add more financial modules with real content
- Integrate video player with actual financial expert videos
- Create user authentication system
- Add progress persistence with database
- Conduct user testing with target persona
- Implement rewards/badges system
- Add more advanced financial topics

---

**Status:** React SPA Prototype Complete | Ready for Revision & Testing

