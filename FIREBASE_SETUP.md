# Firebase Setup Instructions

## Step 1: Install Firebase Dependencies

Run the following command in your frontend directory:

```bash
npm install firebase
```

## Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter your project name
4. Follow the setup wizard

## Step 3: Enable Realtime Database

1. In your Firebase project, go to "Build" > "Realtime Database"
2. Click "Create Database"
3. Choose your location
4. Start in "Test mode" (for development)

## Step 4: Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>)
4. Register your app
5. Copy the firebaseConfig object

## Step 5: Update Home.js

Replace the firebaseConfig in `frontend/src/pages/Home.js` (around line 54) with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 6: Database Rules (Optional - for production)

In Firebase Console > Realtime Database > Rules, update to:

```json
{
  "rules": {
    "contacts": {
      ".write": true,
      ".read": "auth != null"
    }
  }
}
```

## Features Added

✅ Scroll animations on all sections
✅ Scroll-to-top button (appears after scrolling 300px)
✅ Firebase Realtime Database integration for contact form
✅ Form validation
✅ Success/error messages
✅ Smooth animations and transitions

## Testing

1. Start your development server: `npm start`
2. Scroll down the page to see animations
3. Fill out the contact form and submit
4. Check Firebase Console > Realtime Database to see the submitted data
5. Click the orange arrow button (bottom-right) to scroll to top
