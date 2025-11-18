const magazineData = {
  ticker: [
    "Breaking: New AI newsroom assistant launches across major publications",
    "Exclusive: Climate-positive cities pilot 15-minute neighborhood grids",
    "Deep Dive: Indie podcasters rewrite the audio playbook for 2026",
    "Spotlight: Designers build tactile interfaces with biomaterials",
  ],
  featured: [
    {
      id: "ai-newsroom",
      title: "Inside the AI reporters redefining modern newsrooms",
      category: "Technology",
      readTime: "7 min read",
      date: "Nov 13, 2025",
      image: "https://media.istockphoto.com/id/2238653607/photo/mature-influencer-recording-podcast-using-ai-modern-journalism.jpg?b=1&s=612x612&w=0&k=20&c=QtmIUcLn8Jm-ASNNPCc-aO90b8fq4OgrrRD7EdX8s0M=",
      excerpt:
        "Hybrid editorial teams are pairing machine intelligence with human judgment to ship nuanced, data-rich reporting. We follow three newsrooms inside their transformation.",
    },
    {
      id: "city-prototypes",
      title: "Prototype cities that feel like community again",
      category: "Lifestyle",
      readTime: "6 min read",
      date: "Nov 10, 2025",
      image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg",
      excerpt:
        "Urban collectives are turning vacant storefronts into micro-hubs that connect generations, spark local commerce, and rewild concrete neighborhoods.",
    },
    {
      id: "fashion-ledgers",
      title: "The fashion collectives opening their supply chains",
      category: "Business",
      readTime: "5 min read",
      date: "Nov 8, 2025",
      image: "https://images.pexels.com/photos/8705767/pexels-photo-8705767.jpeg",
      excerpt:
        "From open ledgers to regenerative textiles, meet the independent labels proving transparency can scale without losing soul.",
    },
  ],
  latest: [
    {
      id: "audio-documentaries",
      title: "Indie audio documentaries are quietly booming",
      category: "Culture",
      readTime: "4 min read",
      date: "Nov 12, 2025",
      image: "https://images.pexels.com/photos/3912959/pexels-photo-3912959.jpeg",
      description: "Small production houses are crafting intimate stories with bespoke distribution—no algorithms required.",
    },
    {
      id: "climate-travel",
      title: "How climate literacy reshapes travel coverage",
      category: "Travel",
      readTime: "6 min read",
      date: "Nov 11, 2025",
      image: "https://images.pexels.com/photos/3467767/pexels-photo-3467767.jpeg",
      description: "Regenerative itineraries and local stewardship define the next era of wanderlust journalism.",
    },
    {
      id: "tactile-interfaces",
      title: "Studios crafting tactile interfaces for calm computing",
      category: "Technology",
      readTime: "8 min read",
      date: "Nov 9, 2025",
      image: "https://images.pexels.com/photos/3912975/pexels-photo-3912975.jpeg",
      description: "Biomaterials, ambient light, and haptic cues are ushering in devices that feel human again.",
    },
    {
      id: "biodiverse-menus",
      title: "Biodiverse menus bring flavor back to the table",
      category: "Food",
      readTime: "5 min read",
      date: "Nov 7, 2025",
      image: "https://images.pexels.com/photos/5965666/pexels-photo-5965666.jpeg",
      description: "Chefs and farmers are co-designing dishes that restore ecosystems one plate at a time.",
    },
    {
      id: "remote-leadership",
      title: "Remote-first newsrooms share their playbook",
      category: "Business",
      readTime: "7 min read",
      date: "Nov 6, 2025",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Daily rituals, transparent budgets, and communal archives are making distributed journalism resilient.",
    },
    {
      id: "mindful-design",
      title: "Designing mindful spaces in high-tempo cities",
      category: "Design",
      readTime: "6 min read",
      date: "Nov 5, 2025",
      image: "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg",
      description: "Architects blend biophilia and sensory zoning to bring calm to concrete jungles.",
    },
  ],
  categories: [
    "Technology",
    "Lifestyle",
    "Travel",
    "Health & Fitness",
    "Entertainment",
    "Business",
  ],
  categoryPosts: {
    Technology: [
      {
        id: "ai-newsroom",
        title: "Inside the AI reporters redefining modern newsrooms by Morgan Fields",
        image: "https://media.istockphoto.com/id/2238653607/photo/mature-influencer-recording-podcast-using-ai-modern-journalism.jpg?b=1&s=612x612&w=0&k=20&c=QtmIUcLn8Jm-ASNNPCc-aO90b8fq4OgrrRD7EdX8s0M=",
        author: "Morgan Fields",
        date: "Nov 13, 2025",
        comments: 26,
      },
      {
        id: "tactile-interfaces",
        title: "Studios crafting tactile interfaces for calm computing by Ravi Noor",
        image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
        author: "Ravi Noor",
        date: "Nov 9, 2025",
        comments: 14,
      },
    ],
    Lifestyle: [
      {
        id: "city-prototypes",
        title: "Prototype cities that feel like community again",
        image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
        author: "Elena Chávez",
        date: "Nov 10, 2025",
        comments: 19,
      },
      {
        id: "mindful-design",
        title: "Designing mindful spaces in high-tempo cities",
        image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        author: "Priya Natarajan",
        date: "Nov 5, 2025",
        comments: 11,
      },
    ],
    Travel: [
      {
        id: "climate-travel",
        title: "How climate literacy reshapes travel coverage",
        image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
        author: "Hana Lee",
        date: "Nov 11, 2025",
        comments: 9,
      },
      {
        id: "slow-map",
        title: "Slow maps: travel guides for the regenerative era",
        image: "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg",
        author: "Hana Lee",
        date: "Oct 31, 2025",
        comments: 22,
      },
    ],
    "Health & Fitness": [
      {
        id: "holistic-fitness",
        title: "Holistic fitness collectives blend rest with training",
        image: "https://images.pexels.com/photos/376401/pexels-photo-376401.jpeg",
        author: "Priya Natarajan",
        date: "Nov 4, 2025",
        comments: 17,
      },
      {
        id: "nutrition-labs",
        title: "Community nutrition labs bring science to supper",
        image: "https://images.pexels.com/photos/3184194/pexels-photo-3184194.jpeg",
        author: "Nina Walcott",
        date: "Oct 29, 2025",
        comments: 13,
      },
    ],
    Entertainment: [
      {
        id: "audio-documentaries",
        title: "Indie audio documentaries are quietly booming",
        image: "https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg",
        author: "Jonah Patel",
        date: "Nov 12, 2025",
        comments: 32,
      },
      {
        id: "immersive-theater",
        title: "Immersive theater meets community archives",
        image: "https://images.pexels.com/photos/11329860/pexels-photo-11329860.jpeg",
        author: "Elena Chávez",
        date: "Nov 2, 2025",
        comments: 15,
      },
    ],
    Business: [
      {
        id: "fashion-ledgers",
        title: "The fashion collectives opening their supply chains",
        image: "https://images.pexels.com/photos/8705767/pexels-photo-8705767.jpeg",
        author: "Lina Sorenson",
        date: "Nov 8, 2025",
        comments: 27,
      },
      {
        id: "remote-leadership",
        title: "Remote-first newsrooms share their playbook",
        image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
        author: "Morgan Fields",
        date: "Nov 6, 2025",
        comments: 21,
      },
    ],
  },
  editorsPick: [
    {
      id: "biodiverse-menus",
      title: "Biodiverse menus bring flavor back to the table",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      excerpt: "Meet the chefs designing regenerative menus with indigenous ingredients and zero-waste kitchens.",
    },
    {
      id: "story-systems",
      title: "Story systems for distributed creative teams",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      excerpt: "How creative collectives are building living strategy docs that keep remote contributors aligned.",
    },
  ],
  trending: {
    Week: [
      {
        id: "ai-newsroom",
        title: "Inside the AI reporters redefining modern newsrooms",
        date: "Nov 13, 2025",
      },
      {
        id: "audio-documentaries",
        title: "Indie audio documentaries are quietly booming",
        date: "Nov 12, 2025",
      },
      {
        id: "fashion-ledgers",
        title: "The fashion collectives opening their supply chains",
        date: "Nov 8, 2025",
      },
    ],
    Month: [
      {
        id: "city-prototypes",
        title: "Prototype cities that feel like community again",
        date: "Nov 10, 2025",
      },
      {
        id: "climate-travel",
        title: "How climate literacy reshapes travel coverage",
        date: "Nov 11, 2025",
      },
      {
        id: "mindful-design",
        title: "Designing mindful spaces in high-tempo cities",
        date: "Nov 5, 2025",
      },
    ],
    Year: [
      {
        id: "slow-map",
        title: "Slow maps: travel guides for the regenerative era",
        date: "Aug 22, 2025",
      },
      {
        id: "holistic-fitness",
        title: "Holistic fitness collectives blend rest with training",
        date: "Jul 18, 2025",
      },
      {
        id: "immersive-theater",
        title: "Immersive theater meets community archives",
        date: "Jun 03, 2025",
      },
    ],
  },
  videos: [
    {
      id: "video-1",
      title: "How future cities design for belonging",
      duration: "12:08",
      thumbnail: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
      url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    },
    {
      id: "video-2",
      title: "Designing mindful workspaces for hybrid teams",
      duration: "08:42",
      thumbnail: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
      url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    },
  ],
  authors: {
    "Morgan Fields": {
      bio: "Editor-at-large digging into the intersection of emerging technology and human-centered storytelling.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    "Elena Chávez": {
      bio: "Global correspondent documenting neighborhood-scale innovations and inclusive design.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
  },
  articles: {
    "ai-newsroom": {
      title: "Inside the AI reporters redefining modern newsrooms",
      hero: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      category: "Technology",
      author: "Morgan Fields",
      date: "Nov 13, 2025",
      readTime: "7 min read",
      tags: ["AI", "Newsrooms", "Automation"],
      content: [
        "<p>Across the globe, editorial teams are experimenting with AI copilots that surface research threads, build source dossiers, and even draft early headline explorations. Rather than replacing journalists, the most successful deployments amplify their reporting instincts.</p>",
        "<p>At Northstar Media, a 28-person newsroom, AI automates transcription and clustering interview themes. Reporters receive structured summaries in minutes, freeing hours of analysis for deeper storytelling.</p>",
        '<blockquote>"AI is our newsroom\'s research assistant—not the journalist," says editor-in-chief Amira Sloan. "It gives us breadth so our reporters can focus on depth."</blockquote>',
        "<p>Transparency remains critical. Newsrooms publish methodology notes explaining where algorithms assist and where humans make the call, reinforcing trust with readers.</p>",
      ],
    },
    "city-prototypes": {
      title: "Prototype cities that feel like community again",
      hero: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      category: "Lifestyle",
      author: "Elena Chávez",
      date: "Nov 10, 2025",
      readTime: "6 min read",
      tags: ["Urbanism", "Community"],
      content: [
        "<p>With the rise of 15-minute city prototypes, local councils are reclaiming vacant lots and storefronts to create micro-hubs of cultural exchange.</p>",
        "<p>From shared maker studios to night markets powered by cooperative energy grids, these experiments offer blueprints for inclusive, vibrant neighborhoods.</p>",
      ],
    },
  },
  comments: [
    {
      name: "Hana Lee",
      message: "Loved the emphasis on transparency. Our travel desk is piloting something similar!",
      time: "2 hours ago",
    },
    {
      name: "Ravi Noor",
      message: "Keeping humans in the loop is the differentiator. Great reporting.",
      time: "6 hours ago",
    },
  ],
};

const templates = {
  header: `
    <nav class="navbar navbar-expand-lg bg-body border-bottom py-3 sticky-top">
      <div class="container">
        <a class="navbar-brand brand-mark" href="index.html">
          <span>MS</span>
          Magazine Site
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryNav" aria-controls="primaryNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="primaryNav">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Magazine Site</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center gap-3 gap-lg-4">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="category.html" id="navCategories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu shadow-sm border-0" aria-labelledby="navCategories">
                  <li><a class="dropdown-item" href="category.html?name=Technology">Technology</a></li>
                  <li><a class="dropdown-item" href="category.html?name=Lifestyle">Lifestyle</a></li>
                  <li><a class="dropdown-item" href="category.html?name=Travel">Travel</a></li>
                  <li><a class="dropdown-item" href="category.html?name=Business">Business</a></li>
                  <li><a class="dropdown-item" href="category.html?name=Design">Design</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
            <form class="d-flex me-lg-3 mb-3 mb-lg-0" role="search">
              <input class="form-control rounded-pill" type="search" placeholder="Search stories..." aria-label="Search" />
            </form>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-outline-secondary theme-toggle-btn" data-toggle-theme aria-label="Toggle dark mode">
                <span class="theme-symbol" data-theme-symbol aria-hidden="true"></span>
              </button>
              <a class="btn btn-outline-primary rounded-pill" href="login.html">Login</a>
              <a class="btn btn-primary rounded-pill" href="registration.html">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  ticker: `
    <div class="news-ticker py-2">
      <div class="container d-flex align-items-center justify-content-between ticker-wrapper">
        <div class="d-flex align-items-center gap-3">
          <span class="badge text-bg-light text-uppercase">Breaking</span>
          <div class="text-white-50 small">${new Date().toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}</div>
        </div>
        <div class="overflow-hidden flex-grow-1 ms-4">
          <div class="ticker-list"></div>
        </div>
        <div class="d-none d-md-flex align-items-center gap-3">
          <i class="fas fa-cloud-sun text-warning"></i>
          <span class="small text-white-50">18°C • Partly Cloudy</span>
        </div>
      </div>
    </div>
  `,
  footer: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">

          <!-- BRAND -->
          <div class="footer-brand">
            <h5 class="brand-mark text-white mb-3"><span>MS</span> Magazine Site</h5>
            <p>Stories that move the culture forward. Independent journalism covering technology, lifestyle, design, travel, and the world ahead.</p>
            <a class="btn btn-outline-light rounded-pill" href="about.html">About our newsroom</a>
          </div>

          <!-- NAVIGATION + CATEGORIES -->
          <div class="footer-links">
            <div>
              <h6 class="text-uppercase small text-white-50 mb-3">Navigation</h6>
              <div class="footer-nav">
                <a href="index.html">Home</a>
                <a href="category.html">Categories</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="login.html">Membership</a>
              </div>
            </div>

            <div>
              <h6 class="text-uppercase small text-white-50 mb-3">Categories</h6>
              <div class="footer-contact" data-footer-categories></div>
            </div>
          </div>

          <!-- SOCIAL + NEWSLETTER -->
          <div class="footer-newsletter">
            <h6 class="text-uppercase small text-white-50 mb-3">Follow us</h6>
            <div class="social-links">
              <a href="https://www.linkedin.com" class="social-link social-link--linkedin" aria-label="LinkedIn">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn icon" />
              </a>
              <a href="https://www.instagram.com" class="social-link social-link--instagram" aria-label="Instagram">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram icon" />
              </a>
              <a href="https://www.facebook.com" class="social-link social-link--facebook" aria-label="Facebook">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook icon" />
              </a>
              <a href="https://www.twitter.com" class="social-link social-link--x" aria-label="Twitter">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter icon" />
              </a>
            </div>

            <h6 class="text-uppercase small text-white-50 mt-4 mb-3">Newsletter</h6>
            <form class="d-flex gap-2 flex-wrap" data-newsletter>
              <input type="email" class="form-control rounded-pill" placeholder="Email address" required />
              <button class="btn btn-primary rounded-pill" type="submit">Subscribe</button>
            </form>
          </div> <!-- END .footer-newsletter -->

        </div>

        <div class="footer-bottom">
          <span>© <span data-year></span> Magazine Site. All rights reserved.</span>
          <nav aria-label="Footer">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  `,
};

function injectTemplate(selector, template) {
  const target = document.querySelector(selector);
  if (target) {
    target.innerHTML = template;
  }
}

function renderTicker() {
  const list = document.querySelector(".ticker-list");
  if (!list) return;
  const items = magazineData.ticker
    .map((headline) => `<span><i class="fas fa-bolt text-warning me-2"></i>${headline}</span>`)
    .join("");
  list.innerHTML = items + items; // duplicate for seamless loop
}

function renderFeatured() {
  const container = document.querySelector("[data-featured]");
  if (!container) return;
  const indicators = document.querySelector("[data-featured-indicators]");
  container.innerHTML = magazineData.featured
    .map((item, index) => {
      const isActive = index === 0 ? "active" : "";
      const ariaCurrent = index === 0 ? "true" : "false";
      if (indicators) {
        indicators.insertAdjacentHTML(
          "beforeend",
          `<button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="${index}" class="${isActive}" aria-label="${item.title}" aria-current="${ariaCurrent}"></button>`
        );
      }
      return `
        <div class="carousel-item ${isActive}" data-article-link="${item.id}">
          <img src="${item.image}" class="d-block w-100" alt="${item.title}" />
          <div class="carousel-caption text-lg-start text-center">
            <span class="badge bg-primary-subtle text-primary-emphasis mb-2">${item.category}</span>
            <h2 class="display-6">${item.title}</h2>
            <p class="mb-3">${item.excerpt}</p>
            <div class="d-flex gap-3 align-items-center text-white-50 mb-3">
              <span><i class="far fa-clock me-2"></i>${item.readTime}</span>
              <span><i class="far fa-calendar me-2"></i>${item.date}</span>
            </div>
            <a href="article.html?id=${item.id}" class="btn btn-primary rounded-pill">Read more</a>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderLatest() {
  const grid = document.querySelector("[data-latest]");
  if (!grid) return;
  grid.innerHTML = magazineData.latest
    .map(
      (item) => `
        <article class="card card-article">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" />
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2 mb-2">
              <span class="badge text-bg-light text-uppercase">${item.category}</span>
              <span class="text-muted small"><i class="far fa-clock me-1"></i>${item.readTime}</span>
            </div>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text text-muted">${item.description}</p>
            <div class="d-flex justify-content-between align-items-center mt-3 text-muted small">
              <span><i class="far fa-calendar me-1"></i>${item.date}</span>
              <a href="article.html?id=${item.id}" class="link-hover text-primary">Read more <i class="fas fa-arrow-right ms-1"></i></a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCategorySections() {
  const container = document.querySelector("[data-category-sections]");
  if (!container) return;
  container.innerHTML = magazineData.categories
    .map((category) => {
      const posts = magazineData.categoryPosts[category] ?? [];
      return `
        <section class="category-section my-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="category-title mb-0">${category}</h3>
            <a href="category.html?name=${encodeURIComponent(category)}" class="text-decoration-none fw-semibold">View all <i class="fas fa-arrow-right ms-1"></i></a>
          </div>
          <div class="article-grid">
            ${posts
              .map(
                (post) => `
                  <article class="card card-article">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}" />
                    <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <div class="text-muted small mt-3 d-flex flex-wrap gap-3">
                        <span><i class="far fa-user me-1"></i>${post.author}</span>
                        <span><i class="far fa-calendar me-1"></i>${post.date}</span>
                      </div>
                      <a href="article.html?id=${post.id}" class="link-hover text-primary mt-3">Read story <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderEditorsPick() {
  const container = document.querySelector("[data-editors-pick]");
  if (!container) return;
  container.innerHTML = magazineData.editorsPick
    .map(
      (item) => `
        <article class="card pick-card">
          <img src="${item.image}" alt="${item.title}" />
          <div class="card-body">
            <span class="badge text-bg-light text-uppercase">Editor's Pick</span>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text text-muted">${item.excerpt}</p>
            <a href="article.html?id=${item.id}" class="link-hover text-primary">Read now <i class="fas fa-arrow-right ms-1"></i></a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTrending(view = "Week") {
  const container = document.querySelector("[data-trending-list]");
  if (!container) return;
  const data = magazineData.trending[view] ?? [];
  container.innerHTML = data
    .map(
      (item) => `
        <li class="list-group-item bg-transparent border-0 px-0">
          <a href="article.html?id=${item.id}" class="d-flex justify-content-between align-items-start text-decoration-none text-body">
            <div>
              <h6 class="mb-1">${item.title}</h6>
              <small class="text-muted">${item.date}</small>
            </div>
            <i class="fas fa-arrow-right text-primary"></i>
          </a>
        </li>
      `
    )
    .join("");
}

function renderVideos() {
  const container = document.querySelector("[data-video-grid]");
  if (!container) return;
  container.innerHTML = magazineData.videos
    .map(
      (video) => `
        <article class="video-card position-relative">
          <img src="${video.thumbnail}" alt="${video.title}" />
          <a class="play-btn text-white" href="${video.url}" target="_blank" rel="noopener">
            <i class="fas fa-play"></i>
          </a>
          <div class="video-overlay position-absolute bottom-0 start-0 end-0 p-4">
            <span class="badge bg-light text-dark mb-2"><i class="far fa-clock me-1"></i>${video.duration}</span>
            <h5>${video.title}</h5>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFooterCategories() {
  const list = document.querySelector("[data-footer-categories]");
  if (!list) return;
  list.innerHTML = magazineData.categories
    .map((category) => `<a href="category.html?name=${encodeURIComponent(category)}">${category}</a>`)
    .join("");
}

function handleTrendingTabs() {
  const tabs = document.querySelectorAll("[data-trending-tab]");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");
      renderTrending(tab.dataset.trendingTab);
    });
  });
  renderTrending();
}

function initNewsletterForms() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (!input?.value) return;
      toast("Thanks for subscribing! Check your inbox soon.");
      form.reset();
    });
  });
}

function toast(message) {
  const container = document.createElement("div");
  container.className = "toast align-items-center text-bg-primary border-0 position-fixed top-0 end-0 m-3";
  container.setAttribute("role", "alert");
  container.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;
  document.body.appendChild(container);
  const toastInstance = new bootstrap.Toast(container, { delay: 3200 });
  toastInstance.show();
  container.addEventListener("hidden.bs.toast", () => container.remove());
}

function initThemeToggle() {
  const toggle = document.querySelector("[data-toggle-theme]");
  if (!toggle) return;
  const storageKey = "magazine-site-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let state = localStorage.getItem(storageKey) ?? (prefersDark ? "dark" : "light");
  const symbol = toggle.querySelector("[data-theme-symbol]");
  const syncAppearance = () => {
    applyTheme(state);
    localStorage.setItem(storageKey, state);
    if (symbol) symbol.dataset.theme = state;
    toggle.setAttribute("aria-label", state === "dark" ? "Switch to light mode" : "Switch to dark mode");
  };
  syncAppearance();
  toggle.addEventListener("click", () => {
    state = state === "dark" ? "light" : "dark";
    syncAppearance();
  });
}

function applyTheme(mode) {
  document.body.classList.toggle("dark-mode", mode === "dark");
}

function renderArticlePage() {
  const container = document.querySelector("[data-article]");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") ?? "ai-newsroom";
  const article = magazineData.articles[id];
  if (!article) {
    container.innerHTML = `<div class="alert alert-warning">We couldn't find that story. <a href="index.html">Head back home.</a></div>`;
    return;
  }
  const author = magazineData.authors[article.author];
  container.innerHTML = `
    <header class="mb-4">
      <div class="d-flex flex-wrap gap-3 align-items-center text-muted">
        <span class="badge text-bg-primary text-uppercase">${article.category}</span>
        <span><i class="far fa-calendar me-1"></i>${article.date}</span>
        <span><i class="far fa-clock me-1"></i>${article.readTime}</span>
      </div>
      <h1 class="display-5 fw-bold mt-3">${article.title}</h1>
      <div class="d-flex flex-wrap align-items-center gap-3 text-muted mt-2">
        <div class="d-flex align-items-center gap-2">
          <i class="far fa-user"></i>
          <span>${article.author}</span>
        </div>
        <div class="d-flex gap-2">
          ${article.tags.map((tag) => `<span class="badge bg-body-secondary text-uppercase">${tag}</span>`).join("")}
        </div>
      </div>
    </header>
    <figure class="article-hero mb-4">
      <img src="${article.hero}" class="w-100" alt="${article.title}" />
    </figure>
    <article class="article-content fs-5">
      ${article.content.join("")}
    </article>
    <section class="my-5">
      <h5>Share this article</h5>
      <div class="d-flex gap-2 mt-3">
        <a class="btn btn-outline-secondary rounded-pill" href="https://www.facebook.com/sharer/sharer.php?u=${location.href}" target="_blank"><i class="fab fa-facebook-f me-2"></i>Facebook</a>
        <a class="btn btn-outline-secondary rounded-pill" href="https://twitter.com/intent/tweet?url=${location.href}" target="_blank"><i class="fab fa-x-twitter me-2"></i>Twitter</a>
        <a class="btn btn-outline-secondary rounded-pill" href="https://www.linkedin.com/shareArticle?mini=true&url=${location.href}" target="_blank"><i class="fab fa-linkedin-in me-2"></i>LinkedIn</a>
        <a class="btn btn-outline-secondary rounded-pill" href="https://api.whatsapp.com/send?text=${location.href}" target="_blank"><i class="fab fa-whatsapp me-2"></i>WhatsApp</a>
      </div>
    </section>
    <section class="author-card d-flex flex-column flex-md-row gap-4 align-items-start mt-5">
      <img src="${author?.avatar ?? "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"}" alt="${article.author}" />
      <div>
        <h5>${article.author}</h5>
        <p class="text-muted">${author?.bio ?? ""}</p>
        <div class="d-flex gap-3">
          <a href="${author?.socials?.twitter ?? "#"}" class="text-decoration-none text-primary"><i class="fab fa-x-twitter me-1"></i>Twitter</a>
          <a href="${author?.socials?.linkedin ?? "#"}" class="text-decoration-none text-primary"><i class="fab fa-linkedin-in me-1"></i>LinkedIn</a>
        </div>
      </div>
    </section>
    <section class="mt-5">
      <h5>Comments</h5>
      <div class="list-group list-group-flush my-4">
        ${magazineData.comments
          .map(
            (comment) => `
              <article class="list-group-item bg-transparent px-0">
                <div class="comment-card card px-3 py-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <strong>${comment.name}</strong>
                    <small class="text-muted">${comment.time}</small>
                  </div>
                  <p class="mb-0 text-muted">${comment.message}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <form class="comment-form card border-0 shadow-sm p-4">
        <h6 class="mb-3">Join the conversation</h6>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Your name" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="you@example.com" required />
          </div>
          <div class="col-12">
            <label class="form-label">Message</label>
            <textarea class="form-control" placeholder="Share your thoughts..." required></textarea>
          </div>
        </div>
        <button class="btn btn-primary rounded-pill mt-3" type="submit">Post comment</button>
      </form>
    </section>
  `;
  const form = container.querySelector(".comment-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("Thanks for sharing your thoughts!");
    form.reset();
  });
  renderRelated(container, id);
}

function renderRelated(container, currentId) {
  const relatedSection = document.querySelector("[data-related]");
  if (!relatedSection) return;
  const related = magazineData.latest.filter((item) => item.id !== currentId).slice(0, 3);
  relatedSection.innerHTML = related
    .map(
      (item) => `
        <article class="card card-article">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" />
          <div class="card-body">
            <span class="badge text-bg-light text-uppercase mb-2">${item.category}</span>
            <h5 class="card-title">${item.title}</h5>
            <p class="text-muted">${item.description}</p>
            <a href="article.html?id=${item.id}" class="link-hover text-primary mt-3">Read more <i class="fas fa-arrow-right ms-1"></i></a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCategoryPage() {
  const grid = document.querySelector("[data-category-grid]");
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const heading = document.querySelector("[data-category-heading]");
  const list = name ? Object.values(magazineData.categoryPosts[name] ?? []) : magazineData.latest.concat(...Object.values(magazineData.categoryPosts).flat());
  heading.textContent = name ? `${name} stories` : "All magazine stories";
  grid.innerHTML = list
    .map(
      (item) => `
        <article class="card card-article">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <div class="text-muted small d-flex flex-wrap gap-3 my-3">
              <span><i class="far fa-user me-1"></i>${item.author ?? "Staff"}</span>
              <span><i class="far fa-calendar me-1"></i>${item.date ?? ""}</span>
            </div>
            <a href="article.html?id=${item.id}" class="link-hover text-primary mt-auto">Read story <i class="fas fa-arrow-right ms-1"></i></a>
          </div>
        </article>
      `
    )
    .join("");
}

function updateActiveNav() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  links.forEach((link) => {
    const target = link.getAttribute("href") ?? "";
    link.classList.toggle("active", page && target.includes(page));
  });
}

function updateYear() {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initTickerPause() {
  const ticker = document.querySelector(".ticker-list");
  if (!ticker) return;
  ticker.addEventListener("mouseenter", () => ticker.style.animationPlayState = "paused");
  ticker.addEventListener("mouseleave", () => ticker.style.animationPlayState = "running");
}

function initHomepage() {
  renderTicker();
  renderFeatured();
  renderLatest();
  renderCategorySections();
  renderEditorsPick();
  renderTrending();
  renderVideos();
  handleTrendingTabs();
  initTickerPause();
}

function initPage() {
  injectTemplate("[data-component='header']", templates.header);
  injectTemplate("[data-component='ticker']", templates.ticker);
  injectTemplate("[data-component='footer']", templates.footer);
  renderFooterCategories();
  renderTicker();
  renderTrending();
  renderVideos();
  initNewsletterForms();
  initThemeToggle();
  updateActiveNav();
  updateYear();

  const page = document.body.dataset.page;
  switch (page) {
    case "home":
      initHomepage();
      break;
    case "category":
      renderCategoryPage();
      renderTrending();
      handleTrendingTabs();
      break;
    case "article":
      renderArticlePage();
      renderTrending();
      handleTrendingTabs();
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", initPage);

