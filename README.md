# 🚀 LaunchPulse — High-Converting Waitlist & Pre-Launch Template

A sleek, responsive, and performance-obsessed waitlist template built for modern SaaS products, AI startups, and developer tools.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features

- **⚡ Blazing Fast:** Powered by Vite — instant HMR and tiny production bundle.
- **🎨 Dark & Light Mode:** Seamless toggle with local storage persistence and system preference detection.
- **⚙️ Config-Driven (`src/config/site.ts`):** Change all headlines, badges, features, and FAQs in **one single file** without touching component code.
- **💌 Interactive Waitlist Form:**
  - Client-side email validation.
  - Interactive confetti burst (`canvas-confetti`).
  - Queue number allocation (e.g., *#1,241 in line*).
  - Remembers returning users via `localStorage`.
- **💻 Interactive Mockup & Bento Grid:** Modern developer aesthetic with glassmorphic cards and interactive tabs.
- **📱 100% Mobile Responsive:** Tested across mobile, tablet, and desktop breakpoints.
- **🧩 Zero Heavy Dependencies:** Lightweight, clean, easily customizable.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ How to Customize in 2 Minutes

Open [`src/config/site.ts`](./src/config/site.ts) to update:

1. **Brand Name & Copy:** Update `name`, `headline`, `subheadline`, and `badge`.
2. **Social Proof Avatars & Counter:** Change `stats.count` and image URLs.
3. **Features:** Modify the 3 Bento cards with your preferred titles and icons.
4. **FAQs:** Add or remove questions in the `faqs` array.
5. **Footer Links:** Add your social handles (X/Twitter, Discord, GitHub).

---

## 📬 Connecting to a Real Backend (Resend, Formspree, Supabase)

Inside [`src/components/EmailForm.tsx`](./src/components/EmailForm.tsx), replace the simulated `setTimeout` in `handleSubmit` with your API call:

```typescript
// Example with Formspree / Custom API
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

---

## 🌐 Deploy to Vercel (1-Click)

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repo and click **Deploy**.

---

## 📄 License

MIT License — Feel free to use this template for your personal and commercial projects!
