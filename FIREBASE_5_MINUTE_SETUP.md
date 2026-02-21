# Firebase Setup in 5 Minutes ⚡

## Current Status
✅ Website is working perfectly
✅ Scroll animations are active
✅ Scroll-to-top button is working
⚠️ Contact form needs Firebase to save data

## Quick Setup Steps

### 1️⃣ Create Firebase Project (2 minutes)

1. Open: https://console.firebase.google.com/
2. Click: **"Add project"**
3. Name: `infoyashonand-website` (or any name)
4. Click: **"Continue"** → **"Continue"** → **"Create project"**
5. Wait for project creation
6. Click: **"Continue"**

### 2️⃣ Enable Realtime Database (1 minute)

1. In left sidebar, click: **"Build"** → **"Realtime Database"**
2. Click: **"Create Database"**
3. Location: Choose closest to you (e.g., `us-central1`)
4. Security rules: Select **"Start in test mode"**
5. Click: **"Enable"**

### 3️⃣ Get Your Config (1 minute)

1. Click the **gear icon** ⚙️ next to "Project Overview"
2. Click: **"Project settings"**
3. Scroll down to **"Your apps"**
4. Click the **web icon** `</>`
5. App nickname: `website`
6. Click: **"Register app"**
7. **COPY** the entire `firebaseConfig` object

### 4️⃣ Update Your Code (1 minute)

1. Open: `frontend/src/pages/Home.js`
2. Find line ~54 (search for `firebaseConfig`)
3. Replace this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDummy-Key-Replace-With-Your-Actual-Key",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

4. With YOUR config (paste what you copied):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",  // Your actual key
  authDomain: "infoyashonand-website.firebaseapp.com",  // Your actual domain
  databaseURL: "https://infoyashonand-website-default-rtdb.firebaseio.com",  // Your actual URL
  projectId: "infoyashonand-website",  // Your actual project ID
  storageBucket: "infoyashonand-website.appspot.com",  // Your actual bucket
  messagingSenderId: "123456789012",  // Your actual sender ID
  appId: "1:123456789012:web:abc123"  // Your actual app ID
};
```

5. **Save the file** (Ctrl+S or Cmd+S)

### 5️⃣ Test It! (30 seconds)

1. Your app will auto-reload
2. Scroll to the contact form
3. Fill it out:
   - Name: Test User
   - Email: test@example.com
   - Subject: Testing
   - Message: This is a test
4. Click: **"Send Message"**
5. You should see: **"✅ Message sent successfully!"**

### 6️⃣ Verify Data Saved (30 seconds)

1. Go back to Firebase Console
2. Click: **"Realtime Database"** in left sidebar
3. You should see:
```
contacts
  └─ -NxYz123abc
      ├─ name: "Test User"
      ├─ email: "test@example.com"
      ├─ subject: "Testing"
      ├─ message: "This is a test"
      └─ timestamp: "2025-11-23T..."
```

## ✅ Done!

Your contact form is now saving to Firebase!

## What If It Doesn't Work?

### Check 1: Console Errors
- Press F12 to open browser console
- Look for red error messages
- Common fix: Make sure you copied the ENTIRE config

### Check 2: Database URL
- Must end with `.firebaseio.com`
- Must start with `https://`
- Example: `https://your-project-default-rtdb.firebaseio.com`

### Check 3: Test Mode Rules
In Firebase Console → Realtime Database → Rules, should be:
```json
{
  "rules": {
    ".read": "now < 1735689600000",
    ".write": "now < 1735689600000"
  }
}
```

If you see permission errors, change to:
```json
{
  "rules": {
    "contacts": {
      ".write": true,
      ".read": true
    }
  }
}
```

## Alternative: Test Without Firebase

If you want to test the website without setting up Firebase right now:

**Everything works except data storage:**
- ✅ All animations
- ✅ Scroll-to-top button
- ✅ Form validation
- ✅ All interactions
- ⚠️ Form shows "not configured" message
- ℹ️ Form data appears in browser console (F12)

You can set up Firebase later when you're ready to go live!

## Need the Config Again?

Firebase Console → Project Settings → Scroll down → Your apps → Web app → Config

## Security for Production

Once you're ready to launch, update database rules:

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

This allows anyone to submit the form but only you (when authenticated) can read the data.
