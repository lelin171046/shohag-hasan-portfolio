const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''

export const site = {
  owner: {
    name: 'Shohag Hasan',
    role: 'Video Editor & Motion Designer',
    bio: "I'm Shohag Hasan, a video editor focused on clear storytelling, engaging pacing, and thoughtful visual detail. I work on promotional content, animation, travel videos, podcasts, and thumbnails, adapting each project to the creator, brand, and platform.",
    portrait: 'https://res.cloudinary.com/dg04kyz8n/image/upload/v1795375236/471246658_2403938936604126_3866987642265250416_n_1_ocaxhv.jpg',
    cutoutPortrait: 'https://res.cloudinary.com/dg04kyz8n/image/upload/v1795375236/471246658_2403938936604126_3866987642265250416_n_1_ocaxhv.jpg',
  },

  sectionImages: {
    sidebar: { src: '', alt: '' },
    home: { src: '', alt: '' },
    about: {
      src: 'https://res.cloudinary.com/dg04kyz8n/image/upload/v1795375237/a5d4a7b5-96aa-4052-be96-7a7f14ceb3c7_mdnqqf.jpg',
      alt: 'Shohag Hasan, video editor and motion designer',
    },
    services: { src: '', alt: '' },
    works: { src: '', alt: '' },
    clients: { src: '', alt: '' },
    contact: { src: '', alt: '' },
  },

  contact: {
    email: 'motionhasan4u@gmail.com',
    whatsapp: '+880 1775-587380',
    phone: '+880 1775-587380',
    formEndpoint,
  },

  socialLinks: [],

  navigation: [
    { label: 'Home', anchor: '#home' },
    { label: 'About Me', anchor: '#about' },
    { label: 'My Services', anchor: '#services' },
    { label: 'My Works', anchor: '#works' },
    { label: 'My Clients', anchor: '#clients' },
    { label: 'Get in Touch', anchor: '#contact' },
  ],

  tools: [
    { name: 'Adobe After Effects' },
    { name: 'Adobe Premiere Pro' },
    { name: 'Claude AI-assisted planning' },
  ],

  services: [
    {
      id: 'promotional-brand-videos',
      title: 'Promotional & Brand Videos',
      description:
        'Product promos, brand introductions, campaign edits, and clear calls to action.',
      icon: 'Clapperboard',
    },
    {
      id: 'animation-motion-graphics',
      title: 'Animation & Motion Graphics',
      description:
        'Animated titles, logo animation, transitions, and explainer-style graphics.',
      icon: 'Sparkles',
    },
    {
      id: 'youtube-video-editing',
      title: 'YouTube Video Editing',
      description: 'Pacing, structure, B-roll, captions, and sound cleanup.',
      icon: 'Youtube',
    },
    {
      id: 'reels-shorts-social-ads',
      title: 'Reels, Shorts & Social Ads',
      description: 'Vertical edits, hooks, captions, and platform-ready framing.',
      icon: 'Smartphone',
    },
    {
      id: 'travel-lifestyle-videos',
      title: 'Travel & Lifestyle Videos',
      description: 'Story-led travel edits, music-driven sequences, and color treatment.',
      icon: 'Plane',
    },
    {
      id: 'podcast-editing',
      title: 'Podcast Editing',
      description:
        'Interview cleanup, multicamera-style edits where source footage supports it, captions, and highlight clips.',
      icon: 'Mic',
    },
    {
      id: 'thumbnail-design',
      title: 'Thumbnail Design',
      description: 'Readable layouts, strong visual hierarchy, and creator-focused artwork.',
      icon: 'Image',
    },
    {
      id: 'ai-assisted-content-workflow',
      title: 'AI-Assisted Content Workflow',
      description:
        'Ideation, script refinement, outlines, and planning with tools such as Claude alongside editing software.',
      icon: 'Bot',
    },
  ],

  projects: [
    {
      id: 'project-01',
      title: 'Sample Promotional Edit',
      category: 'Promotional',
      type: 'image',
      url: 'https://res.cloudinary.com/dg04kyz8n/video/upload/v1765209769/PR_Humanizer_Reel_3_hxqrf4.mp4',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample promotional video project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-02',
      title: 'Sample Motion Graphics',
      category: 'Animation',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample motion graphics project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-03',
      title: 'Sample YouTube Edit',
      category: 'YouTube',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample YouTube video project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-04',
      title: 'Sample Shorts Edit',
      category: 'Shorts',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample short-form video project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-05',
      title: 'Sample Travel Film',
      category: 'Travel',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample travel film project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-06',
      title: 'Sample Podcast Clip',
      category: 'Podcast',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample podcast editing project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-07',
      title: 'Sample Thumbnail Set',
      category: 'Thumbnails',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample thumbnail design project',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'project-08',
      title: 'Sample Brand Promo',
      category: 'Promotional',
      type: 'image',
      url: '',
      poster: '',
      description: 'Sample project — replace with your work.',
      alt: 'Placeholder preview for a sample brand promo project',
      featured: false,
      isPlaceholder: true,
    },
  ],

  clients: [],
  testimonials: [],

  content: {
    common: {
      monogram: 'SH',
      hireMe: 'Hire Me',
      viewWorks: 'View My Works',
      getInTouch: 'Get in Touch',
      playProject: 'View project',
      samplePreview: 'Sample preview',
      needsSetup: 'Link needs setup',
      copyrightPrefix: '©',
      rights: 'All rights reserved.',
    },

    hero: {
      eyebrow: 'VIDEO EDITOR & MOTION DESIGNER',
      greeting: "Hi, I'm Shohag Hasan!",
      secondLine: 'I create videos that connect.',
      roleHighlight: 'Video Editor',
      intro:
        'I help creators and brands turn raw footage into engaging stories—from promotional videos and motion graphics to travel films, podcasts, and scroll-stopping social content.',
      toolLabels: ['After Effects', 'Premiere Pro', 'AI-Assisted Workflow'],
      portraitLabel: 'Stylized portrait placeholder. Add your own cutout image in site.js.',
    },

    about: {
      eyebrow: 'ABOUT ME',
      title: 'Editing with purpose, not just effects.',
      kicker: 'A little about my approach',
      portraitPlaceholder: 'https://scontent.fdac177-2.fna.fbcdn.net/v/t39.30808-6/473079996_2416711891993497_8233879651832613748_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x1500&ctp=s1500x1500&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFizkT_MudaecBzJ4xqmM0F_kqPr5EO6Zn-So-vkQ7pmfLKEyHTcrEjUMZInWpkmxWf9c2AsbnmqQGMszLq-93D&_nc_ohc=lFCWwQ-MZpUQ7kNvwHr57Ob&_nc_oc=AdrTbnogvzEdrAN6gXUj-zWU6WV0Vj7z9R3fTaHwO-OvuGLEvxPcAP0v1kk6U9tH1pA&_nc_zt=23&_nc_ht=scontent.fdac177-2.fna&_nc_gid=NQiM_iDBwbikHehwq5ecyw&_nc_ss=7b2a8&oh=00_AQT0Mat_zio_x2-F1d6MAmFWzaxdH4-7mj6RKdHUBVTHKg&oe=6B0911AF',
      button: 'Get in Touch',
      toolsTitle: 'Tools & workflow',
    },

    services: {
      eyebrow: 'MY SERVICES',
      title: 'What I can help you create',
      description:
        'Flexible editing and design support, shaped around your story, your brand, and the platform you are publishing on.',
    },

    works: {
      eyebrow: 'MY WORKS',
      title: 'A look at the work',
      description:
        'Project previews are shown as samples until real videos and images are added to the site data.',
      filters: [
        'All',
        'Promotional',
        'Animation',
        'YouTube',
        'Shorts',
        'Travel',
        'Podcast',
        'Thumbnails',
      ],
      allLabel: 'All',
      emptyState: 'No projects are listed in this category yet.',
      fallbackLabel: 'Open external video',
      modalLabel: 'Project preview',
      closeLabel: 'Close preview',
      invalidMessage: 'This media link is not valid yet. Add a public HTTPS URL in site.js.',
      cloudinaryErrorMessage:
        'This video could not be played. You can try the external link below.',
    },

    clients: {
      eyebrow: 'MY CLIENTS',
      title: 'Collaborations',
      description:
        'Client names, logos, and testimonials will appear here once shared with permission to publish.',
      emptyState: 'Client collaborations will be featured here.',
    },

    contact: {
      eyebrow: 'GET IN TOUCH',
      title: "Let's create something worth watching.",
      description: 'Tell me about your project, platform, and editing goals.',
      fields: {
        name: 'Name',
        email: 'Email',
        service: 'Service',
        details: 'Project details',
        budget: 'Budget (optional)',
      },
      placeholders: {
        name: 'Your name',
        email: 'you@example.com',
        service: 'Choose a service',
        details: 'Tell me about your footage, goals, and platform…',
        budget: 'Optional budget range',
      },
      submit: 'Send message',
      noEndpointNotice:
        "Online sending isn't configured yet. Add a form endpoint in site.js or .env to enable delivery.",
      mailtoIntro: 'Prefer email?',
      mailtoLabel: "Open your email app (this does not send the message automatically)",
      phoneIntro: 'Or call / text:',
      whatsappIntro: 'Prefer WhatsApp?',
      whatsappLabel: 'Open WhatsApp chat',
      validation: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        detailsRequired: 'Please tell me about your project.',
      },
      status: {
        sending: 'Sending your message…',
        success: 'Your message was sent.',
        error: "Something went wrong. Please try again or use another contact option.",
        validation: 'Please check the highlighted fields.',
      },
    },

    footer: {
      note: 'Original copy and assets only.',
    },

    a11y: {
      skipToContent: 'Skip to content',
      siteIntro: 'Site introduction and navigation',
      primaryNavigation: 'Primary navigation',
      mobileNavigation: 'Mobile navigation',
      socialLinks: 'Social links',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      toolsAndWorkflow: 'Tools and workflow',
      portraitOf: 'Portrait of',
      filterProjects: 'Filter projects by category',
      videoUnsupported: 'Your browser does not support embedded video playback.',
    },
  },
}

export default site
