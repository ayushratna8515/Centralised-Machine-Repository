/* ============================================================
   FIREBASE CONFIG — paste your project's config here.
   ============================================================
   How to get this (free, ~5 minutes, no credit card):
     1. Go to https://console.firebase.google.com and sign in
        with any Google account.
     2. Click "Add project" → give it any name (e.g. "machine-repo")
        → you can skip Google Analytics → Create project.
     3. In the left sidebar, click "Build" → "Firestore Database"
        → "Create database" → choose a region close to you →
        start in **test mode** (fine for this POC; see README.md
        for a slightly-tighter rule set before wider rollout).
     4. Back in the project Overview page, click the "</>" (Web)
        icon to register a web app → give it any nickname →
        "Register app". Firebase will show you a config object
        that looks like the one below — copy those values in.
     5. Save this file and reload the site. The header badge
        will switch from "Local demo" to "Live · synced with
        your team" once it's wired up correctly.

   Leaving the placeholder values below in place is safe — the
   app detects them and quietly runs on this browser's local
   storage instead (a single-user demo), no errors shown.
   ============================================================ */

var FIREBASE_CONFIG = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};
