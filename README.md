# Machine Repository — Central Asset Register (FATP & MLB)

A single-page web app that acts as a central repository of manufacturing/test
equipment across the Chennai, Hosur and Narsapura sites — vendor, cost,
lifecycle, DRI (owner), consumables and repair history — built for CapEx and
repurpose decisions.

This is a **plain static website**. There is no server-side code, no build
step, and no framework. It's three files:

```
index.html          Page structure
style.css            All styling (light + dark mode)
app.js                All app logic (filters, drawer, Firestore sync, auth gate)
firebase-config.js    Your Firebase project keys (see below)
```

Because it's plain HTML/CSS/JS, it can be hosted **anywhere** — Netlify,
GitHub Pages, an internal IIS/nginx/Apache server, an S3 bucket, or just
opened as a local file. There is nothing to install, compile or deploy in
the traditional sense: copy the four files to a web server's document root
and it works.

---

## 1. Shared data (Firebase)

Out of the box, `firebase-config.js` has placeholder values. In that state,
the app quietly runs on **this browser's local storage only** — a single-user
demo; every visitor sees their own independent copy of the data, and nothing
is shared between people.

To make data shared and live across everyone who opens the link (what the
POC was actually built for), wire up a free Firebase project:

1. Go to **console.firebase.google.com**, sign in with any Google account.
2. **Add project** → any name (e.g. "machine-repository") → Google Analytics
   is optional/skip it → **Create project**.
3. Left sidebar → **Build → Firestore Database → Create database** → pick a
   region close to your users → **Start in test mode**.
   (Test mode means anyone with the URL can read/write for the first 30
   days. That's fine for a POC. See the "Locking it down" section below
   before this goes to a wider audience.)
4. Back on the project Overview page, click the **`</>`** (Web) icon →
   register a nickname → **Register app**. Firebase shows you a config
   object — copy those six values into `firebase-config.js` in this folder,
   replacing the `REPLACE_WITH_...` placeholders.
5. Reload the site. The small badge in the top-right of the header should
   switch from "Local demo (not shared)" to "Live · synced with your team".

That's the entire backend. No servers to run, no code beyond pasting those
six values.

### Locking it down (before wider rollout)

Firebase's free ("Spark") tier is genuinely free for this scale of usage —
no credit card required, generous daily read/write quotas. Test-mode
Firestore rules expire after 30 days and then lock everyone out (including
this app) until you set real rules. A reasonable starting rule set, once
you're past the demo stage:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /machines/{docId} {
      allow read, write: if true;   // tighten with Firebase Auth if needed
    }
    match /config/{docId} {
      allow read: if true;
      allow write: if false;        // change the passphrase from the Firebase console instead
    }
  }
}
```

For real internal deployment, IT will likely want to put this behind proper
authentication (Firebase Auth, or better, behind the company's own SSO if
this moves onto an internal server with a real backend) rather than the
client-side passphrase described below.

---

## 2. The "Add Machine" passphrase

This repository's Share model has only two tiers in practice (view / edit),
but the requirement was: everyone with edit access can update existing
machines and log repairs, but only the **Engineering** team should be able
to create brand-new machine records.

There's no server enforcing this — it's a client-side SHA-256 passphrase
check in `app.js` (search for `AUTH GATE`). This is an **honest speed bump,
not real security**: anyone who opens the browser dev tools could bypass it
with effort. It's meant to stop accidental or casual additions by whoever
has the link, not to be cryptographically secure.

- Default passphrase: **`Engineering@2026`**
- Change it any time from inside the app: click **+ Add machine**, enter the
  current passphrase, then use "Change this passphrase" in the modal.
- If/when this moves to a real internal server, replace this with actual
  role-based auth (e.g. checking group membership via SSO) rather than a
  shared passphrase.

---

## 3. Hosting this for the board demo (free)

The fastest option, no account needed:

1. Zip this folder (or use the zip you were given).
2. Go to **app.netlify.com/drop** in a browser.
3. Drag the folder/zip onto the page. Netlify gives you a live public URL
   in a few seconds (something like `random-name-123.netlify.app`).
4. Optional but recommended: click "Claim this site" and sign up free
   (just an email) so the URL is permanent and you can update it later by
   dragging an updated folder onto the same site's dashboard.

Any other static host works identically (GitHub Pages, Vercel, Cloudflare
Pages, an S3 bucket with static hosting enabled) — there's nothing
Netlify-specific in the code.

---

## 4. Handing this to IT for internal hosting

Once approved, IT can host this exactly as-is:

- **Simplest**: copy the 4 files into any web server's document root
  (IIS/nginx/Apache/etc.). No build step, no dependencies to install.
- If they want it fully internal (no external Firebase dependency), the
  `Store` object in `app.js` is a single, self-contained abstraction over
  "wherever the data lives" — swapping Firestore calls for an internal
  REST API or database means editing one object (roughly lines 99–184 of
  `app.js`); nothing else in the app needs to change, since every other
  function only talks to `Store`, not to Firestore directly.
- The Engineering passphrase gate should be replaced with real
  authentication (see section 2) once this is behind the corporate network.

---

## 5. Local development

No build tools needed. To preview changes locally:

```
python3 -m http.server 8000
```

then open `http://localhost:8000` in a browser. (Opening `index.html`
directly as a `file://` URL also works, except the Firebase SDK CDN
scripts may be blocked by some browsers' local-file security settings —
a local server avoids that.)
