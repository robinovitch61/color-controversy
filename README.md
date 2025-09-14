# Color Controversy

An interactive web app to discover the world's most controversial colors.

Judge colors between two options and see how your choices compare to others. The app tracks your "controversy score" - how often you pick the minority choice for each color.

## ✨ Features

- **Color Judging**: Choose between two color names for randomly presented colors
- **Controversy Scoring**: Track how often you pick the minority choice (session-based)
- **Leaderboard**: See the most controversial colors (closest to 50/50 splits)
- **Color Gallery**: Browse all colors used in the dataset
- **Static Deployment**: No backend required - runs entirely in the browser

## 🏗️ Architecture

This is a **static React application** with no backend dependencies:

- **Frontend**: React + TypeScript + Redux for state management
- **Data**: 337 colors embedded as static JSON (from original database)
- **Persistence**: Session-only (controversy scores reset on refresh)
- **Deployment**: Static files that can be hosted anywhere

## 🚀 Development

```sh
cd react-frontend
npm install
npm start
```

Visit http://localhost:3000 to see the app.

## 📦 Production Build

```sh
cd react-frontend
npm run build
```

The `build/` folder contains static files ready for deployment to any static host:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## 📊 Data

The app includes 337 colors with voting data from the original database. Each color has:
- Hex code (e.g. `#FF5733`)
- Two naming options (e.g. "red" vs "orange")
- Vote counts for each option

The most controversial colors are those with votes closest to a 50/50 split.

## 🎯 How It Works

1. **Judge colors** by choosing between two color names
2. **See results** showing how others voted
3. **Track controversy score** - your percentage of minority choices
4. **Explore leaderboard** of most divisive colors
5. **Browse gallery** of all colors in the dataset

## 📝 License

MIT License - feel free to fork and adapt!

## 🙏 Credits

- Original color survey methodology inspired by [XKCD Color Survey](https://blog.xkcd.com/2010/05/03/color-survey-results/)
- Built with React, TypeScript, and styled-components