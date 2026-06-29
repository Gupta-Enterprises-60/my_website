# Gupta Enterprises Website — Deployment Guide

## Files in this project

```
gupta-enterprises/
├── index.html          ← Main website (home page)
├── css/
│   └── style.css       ← All website styles
├── js/
│   ├── products.js     ← Product data + rendering
│   └── main.js         ← Scroll, nav, filters, form
└── admin/
    ├── index.html      ← Admin panel (password protected)
    └── admin.css       ← Admin panel styles
```

---

## How to host on Hostinger

### Step 1 — Buy hosting
- Go to hostinger.in → Buy "Premium Shared Hosting" (cheapest plan works fine)
- Register a domain like `guptaenterprises.in` (₹699/year approx from GoDaddy or Hostinger)

### Step 2 — Upload your files
1. Log in to Hostinger → go to **hPanel**
2. Click **File Manager**
3. Open the **public_html** folder (delete anything already inside it)
4. Upload ALL files from this project — keeping the folder structure exactly as-is
5. Make sure `index.html` is directly inside `public_html/` (not inside a sub-folder)

### Step 3 — Your website is live!
Visit your domain — it should show the Gupta Enterprises website.
Admin panel is at: `yourdomain.com/admin/`

---

## Admin panel usage

**URL:** `yourdomain.com/admin/`
**Default password:** `admin123`

### CHANGE YOUR PASSWORD FIRST
1. Open admin panel → click **Settings**
2. Enter a new password → Save
3. Keep this password safe — there's no "forgot password" option

### To add a product:
1. Go to admin panel → **Add product**
2. Fill in: Name, Category, Description, Emoji icon, Status
3. Click **Save product**
4. Open your website in a new tab → the product appears instantly

### To edit a product:
1. Go to **Products** tab
2. Click **Edit** next to the product
3. Make changes → Save

### To delete a product:
1. Go to **Products** tab
2. Click **Delete** → confirm

---

## How to update product data permanently (for developer)

Products added via the admin panel are saved in the browser's localStorage.
This means they appear on the same browser/device. For a proper multi-device
setup, update the `PRODUCTS` array in `js/products.js` directly, then re-upload.

For a fully database-backed admin panel (works across all devices), 
the next upgrade is to connect a free service like Supabase or use 
Hostinger's MySQL database — ask your developer or ask Claude Code.

---

## Contact form

The contact form currently shows a success message but does NOT send emails.
To make it actually send emails, add a free service like **Formspree**:
1. Go to formspree.io → create a free account
2. Create a new form → get your form endpoint URL
3. In `index.html`, find the `<form id="contact-form">` tag
4. Change it to: `<form id="contact-form" action="https://formspree.io/f/YOURCODE" method="POST">`
5. Remove the `onsubmit="submitForm(event)"` attribute
6. Re-upload index.html

---

## Updating content

| What to change           | Where to change it                        |
|--------------------------|-------------------------------------------|
| Phone / email            | Admin panel → Settings (or search index.html for "+91") |
| Company address          | Search index.html for "Faridabad"         |
| Hero headline            | index.html → inside `<section id="hero">` |
| Add/remove products      | Admin panel → Add product                 |
| Capabilities section     | index.html → `<section id="capabilities">`|
| Colors                   | css/style.css → `:root` variables at top  |
| Logo                     | Replace the SVG squares with an `<img>` tag |

---

## Support / next steps

- Add real email sending → Formspree (free) or EmailJS
- Add WhatsApp chat button → wa.me link
- Add Google Maps embed → paste iframe in contact section
- Add your own product photos → replace emoji icons with `<img>` tags
- Custom domain email (info@guptaenterprises.in) → set up in Hostinger panel

