# Shohag Hasan — Portfolio

A responsive, one-page React portfolio built with Vite, plain CSS, lucide-react icons, and a 3D lanyard hero. The design uses a dark neon palette: near-black background `#080A08`, deep green surfaces `#151A15`, lime accents `#B6FF3B` / `#D7FF91`, and light text `#F5F5F5`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Configuration

All editable site copy and settings live in `src/data/site.js`.

- **Owner details:** `site.owner` (name, role, bio, `portrait`, `cutoutPortrait`).
- **Section images:** `site.sectionImages` — separate `src`/`alt` for `sidebar`, `home`, `about`, `services`, `works`, `clients`, and `contact`.
- **Contact:** `site.contact.email`, `site.contact.phone`, `site.contact.whatsapp`, and `site.contact.formEndpoint`. Email, phone, and WhatsApp links appear in the Contact section once set.
- **Social links:** `site.socialLinks`. Empty links are hidden automatically.
- **Services / tools / projects / clients / testimonials:** corresponding arrays in `site.js`.

Any `VITE_` value is public and exposed in browser code. The optional contact form endpoint can be set in `.env`:

```bash
cp .env.example .env
VITE_CONTACT_FORM_ENDPOINT=https://your-endpoint.example.com/submit
```

`site.contact.formEndpoint` reads this value. The form posts JSON with `name`, `email`, `service`, `details`, and `budget`. Without an endpoint, the form clearly states that online sending is disabled and never pretends to deliver a message. If a real email is added, a mailto fallback appears with an explanation that it only opens the visitor's email app.

## Images

You can use a different image in every section. Place local files in `public/images/` or use public HTTPS URLs (for example your Cloudinary delivery URLs), then set them in `src/data/site.js`:

```js
sectionImages: {
  sidebar: { src: '/images/sidebar.jpg', alt: 'Shohag Hasan' },
  home: { src: 'https://res.cloudinary.com/.../hero-cutout.png', alt: 'Shohag Hasan, video editor' },
  about: { src: '/images/about.jpg', alt: 'Shohag at work' },
  services: { src: '/images/services-banner.jpg', alt: 'Motion graphics workspace' },
  works: { src: '/images/works-banner.jpg', alt: 'Editing timeline detail' },
  clients: { src: '/images/clients-banner.jpg', alt: 'Collaboration workspace' },
  contact: { src: '/images/contact-banner.jpg', alt: 'Contact and project planning' },
},
```

- `sidebar`, `home`, and `about` replace the portrait/cutout in those areas. If a key is empty, the site falls back to `site.owner.portrait` / `site.owner.cutoutPortrait`, then to the SH monogram.
- `services`, `works`, `clients`, and `contact` render as wide banners above the section content. If a key is empty, no banner is shown.
- Invalid URLs or failed image loads are hidden gracefully; they never break the layout.
- The Home hero renders `sectionImages.home` on an interactive 3D lanyard (`src/components/Lanyard.jsx`) with `owner.name` printed on the card and `owner.role` on the back. Use a CORS-enabled HTTPS image or a local asset so WebGL can read the texture.
- Use your own images only. See `public/images/README.md`.

## Adding projects

Each entry in `site.projects` follows this shape:

```js
{
  id: 'project-01',
  title: 'Project title',
  category: 'Promotional',
  type: 'youtube', // youtube | cloudinary | image
  url: '',
  poster: '',
  description: '',
  alt: '',
  featured: false,
  isPlaceholder: false,
}
```

- **YouTube:** paste a normal watch URL, `youtu.be` URL, shorts URL, live URL, or embed URL. The app validates the host and 11-character video ID, then loads a `youtube-nocookie.com` embed only after the visitor opens the project. Invalid links show a setup message.
- **Cloudinary:** use a public HTTPS video delivery URL containing `/video/upload/`, for example `https://res.cloudinary.com/<cloud>/video/upload/<file>.mp4`. Optionally add an HTTPS poster image. No SDK, uploads, or API secrets are used.
- **Image:** use an HTTPS image URL or a local asset path plus meaningful `alt` text.
- Keep `isPlaceholder: true` for sample cards. They are clearly labeled and have no working play action.
- Categories are the filter labels in `site.content.works.filters`. Unused filters are hidden automatically.

Only one media dialog can be open at a time. It traps and restores focus, closes on Escape or backdrop click, locks background scrolling, and removes the player when closed.

## Clients and testimonials

`site.clients` and `site.testimonials` start empty. Add entries only with the owner's permission to publish names, logos, quotes, or links. Testimonials are hidden until a quote is provided.

## Deployment

`npm run build` outputs a static site to `dist/`. Deploy that folder to any static host. Configure canonical and social preview URLs in `index.html` only after a real deployment domain is known.

## Notes

- No fake metrics, clients, testimonials, contact details, or submission success states are included.
- Claude is described only as assisting with ideas, scripts, planning, and workflow—not as rendering or editing video.
- Reveal animations leave content readable if JavaScript observation fails, and reduced-motion preferences are respected.
