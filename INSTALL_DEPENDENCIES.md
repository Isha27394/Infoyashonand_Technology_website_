# Installation Commands

## Required Dependencies

Run these commands in your `frontend` directory:

```bash
# Install Firebase for database integration
npm install firebase

# Install react-modal (if not already installed)
npm install react-modal

# Install react-countup (if not already installed)
npm install react-countup

# Install react-icons (if not already installed)
npm install react-icons

# Install react-router-dom (if not already installed)
npm install react-router-dom
```

## Or install all at once:

```bash
npm install firebase react-modal react-countup react-icons react-router-dom
```

## Verify Installation

Check your `package.json` to ensure these are listed:

```json
{
  "dependencies": {
    "firebase": "^10.x.x",
    "react": "^18.x.x",
    "react-countup": "^6.x.x",
    "react-dom": "^18.x.x",
    "react-icons": "^4.x.x",
    "react-modal": "^3.x.x",
    "react-router-dom": "^6.x.x"
  }
}
```

## Start Development Server

```bash
npm start
```

## Build for Production

```bash
npm run build
```

## Troubleshooting

### If you get module not found errors:

1. Delete `node_modules` and `package-lock.json`:
```bash
rm -rf node_modules package-lock.json
```

2. Reinstall:
```bash
npm install
```

### If Firebase doesn't work:

1. Check your Firebase config in `Home.js`
2. Ensure Realtime Database is enabled in Firebase Console
3. Check database rules allow writes

### If animations don't work:

1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors
