# Images

Put owner-owned or properly licensed images here, then reference them from `src/data/site.js`.

Suggested files:

- `sidebar.jpg` — small circular sidebar portrait.
- `hero-cutout.png` — transparent hero cutout with a neutral background removed.
- `about.jpg` — portrait or workspace photo for About Me.
- `services-banner.jpg`, `works-banner.jpg`, `clients-banner.jpg`, `contact-banner.jpg` — wide images for those sections.
- `project-*.jpg` — 16:9 project posters for YouTube or Cloudinary projects.

Example references:

```js
sectionImages: {
  sidebar: { src: '/images/sidebar.jpg', alt: 'Shohag Hasan' },
  home: { src: '/images/hero-cutout.png', alt: 'Shohag Hasan, video editor' },
  about: { src: '/images/about.jpg', alt: 'Shohag at work' },
  services: { src: '/images/services-banner.jpg', alt: 'Editing workspace' },
},

owner: {
  portrait: '/images/sidebar.jpg',
  cutoutPortrait: '/images/hero-cutout.png',
},
```

Do not use the reference site's portrait, identity, or assets. If no images are supplied, the site keeps the layout and shows SH monogram placeholders.
