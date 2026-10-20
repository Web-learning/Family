
const instagramData = {
  users: [
    {
      id: "u1",
      username: "skinnylaminx",
      name: "Heather Moore",
      profileUrl: "https://www.instagram.com/skinnylaminx/",
      avatar: "https://placehold.co/100x100/014c75/ffffff?text=H"
    },
    {
      id: "u2",
      username: "Duncanmoo",
      name: "Duncan Moore",
      profileUrl: "https://www.instagram.com/Duncanmoo/",
      avatar: "https://placehold.co/100x100/014368/ffffff?text=D"
    },
  {
      id: "u3",
      username: "Fionamatier",
      name: "Fiona Matier",
      profileUrl: "https://www.instagram.com/Fionamatier",
      avatar: "https://placehold.co/100x100/013b5b/ffffff?text=F"
    },
      {
      id: "u4",
      username: "Marionsmallbones",
      name: "Marion Smallbones",
      profileUrl: "https://www.instagram.com/Marionsmallbones/",
      avatar: "https://placehold.co/100x100/01324e/ffffff?text=M"
    },
        {
      id: "u5",
      username: "Gaylepm",
      name: "Gayle Moore",
      profileUrl: "https://www.instagram.com/Gaylepm/",
      avatar: "https://placehold.co/100x100/012a41/ffffff?text=G"
    },
    {
      id: "u6",
      username: "Atholm72",
      name: "Athol Moore",
      profileUrl: "https://www.instagram.com/Atholm72/",
      avatar: "https://placehold.co/100x100/002234/ffffff?text=A"
    },
    {
      id: "u7",
      username: "Dojomoore",
      name: "Donald and Joan",
      profileUrl: "https://www.instagram.com/Dojomoore",
      avatar: "https://placehold.co/100x100/001927/ffffff?text=DoJo"
    },
    {
      id: "u8",
      username: "_paul_edmunds",
      name: "Paul Edmunds",
      profileUrl: "https://www.instagram.com/_paul_edmunds/",
      avatar: "https://placehold.co/100x100/00111a/ffffff?text=P"
    },
    {
      id: "u9",
      username: "",
      name: "Dr Jean Matier Moore",
      profileUrl: "https://orcid.org/0000-0002-0438-8087",
      avatar: "https://placehold.co/100x100/00080d/ffffff?text=J"
    }
  ],

  posts: [
    {
      id: "p1",
      userId: "u1",
      image: "https://placehold.co/600x600/014c75/ffffff?text=H",
      url: "https://skinnylaminx.com/newsletter-signup/",
      caption: "Go sign up! https://skinnylaminx.com/newsletter-signup/",
      hashtags: ["patterns", "designs", "colours", "joy"],
      likes: 912345678,
      createdAt: "Recently"
    },
    {
      id: "p2",
      userId: "u2",
      image: "https://placehold.co/600x600/014368/ffffff?text=D",
      url: "https://www.instagram.com/Duncanmoo/",
      caption: "Pottering",
      hashtags: ["saynotohashtags"],
      likes: 891234567,
      createdAt: "Recently"
    },
    {
      id: "p3",
      userId: "u3",
      image: "https://placehold.co/600x600/013b5b/ffffff?text=F",
      url: "https://www.instagram.com/",
      caption: "Macdonalds - never again.",
      hashtags: ["Bagpipes"],
      likes: 789123456,
      createdAt: "Recently"
    },
    {
      id: "p4",
      userId: "u4",
      image: "https://placehold.co/600x600/01324e/ffffff?text=M",
      url: "https://www.instagram.com/Marionsmallbones/",
      caption: "Art.",
      hashtags: ["Painting"],
      likes: 678912345,
      createdAt: "Recently"
    },
    {
      id: "p5",
      userId: "u5",
      image: "https://placehold.co/600x600/012a41/ffffff?text=G",
      url: "https://www.instagram.com/Gaylepm/",
      caption: "Chemistry, Psychology, Plogiology",
      hashtags: ["Travel"],
      likes: 567891234,
      createdAt: "Recently"
    },
    {
      id: "p6",
      userId: "u6",
      image: "https://placehold.co/600x600/002234/ffffff?text=A",
      url: "https://www.instagram.com/Atholm72/",
      caption: "Art.",
      hashtags: ["Painting"],
      likes: 456789123,
      createdAt: "Recently"
    }, 
    {
      id: "p7",
      userId: "u7",
      image: "https://placehold.co/600x600/001927/ffffff?text=DJ",
      url: "https://www.instagram.com/Dojomoore/",
      caption: "Art.",
      hashtags: ["Painting, gardening, watching rugby"],
      likes: 3456789120,
      createdAt: "Recently"
    },
    {
      id: "p8",
      userId: "u8",
      image: "https://placehold.co/600x600/00111a/ffffff?text=P",
      url: "https://www.instagram.com/_paul_edmunds/",
      caption: "_",
      hashtags: ["#skateboardwheels, #cableties and #PVCcopper"],
      likes: 234567891,
      createdAt: "Recently"
    },
    {
      id: "p9",
      userId: "u9",
      image: "https://placehold.co/600x600/00080d/ffffff?text=J",
      url: "https://orcid.org/0000-0002-0438-8087",
      caption: "Stickers",
      hashtags: ["Reading, Walking"],
      likes: 123456789,
      createdAt: "Recently"
    }
  ]
};

// Safe HTML escaping for text and attributes.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// Only allow normal web URLs.
function safeURL(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol)
      ? url.href
      : "#";
  } catch {
    return "#";
  }
}

// Turn URLs in captions into clickable links.
function linkifyCaption(text) {
  const escaped = escapeHTML(text);
  return escaped.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

const feed = document.getElementById("instagram-feed");
const filter = document.getElementById("feed-filter");
const postCount = document.getElementById("post-count");
const emptyMessage = document.getElementById("empty-message");

// Keep likes in memory while the page is open.
const likedPosts = new Set();

function renderFeed() {
  const selectedUser = filter.value;

  const posts = instagramData.posts.filter(post => {
    if (selectedUser === "all") return true;

    const user = instagramData.users.find(
      item => item.id === post.userId
    );

    return user && user.username === selectedUser;
  });

  postCount.textContent = `${posts.length} POST${posts.length === 1 ? "" : "S"}`;
  emptyMessage.hidden = posts.length > 0;

  feed.innerHTML = posts.map(post => {
    const user = instagramData.users.find(
      item => item.id === post.userId
    );

    if (!user) return "";

    const destination = safeURL(post.url);
    const profile = safeURL(user.profileUrl);
    const liked = likedPosts.has(post.id);
    const likeTotal = post.likes + (liked ? 1 : 0);

    const hashtags = post.hashtags.map(tag => `
      <span class="hashtag">#${escapeHTML(tag.replace(/^#/, ""))}</span>
    `).join("");

    return `
      <article class="post-card">
        <header class="post-header">
          <a href="${profile}" target="_blank" rel="noopener noreferrer"
             aria-label="Visit ${escapeHTML(user.username)}'s profile">
            <img class="avatar"
                 src="${escapeHTML(user.avatar)}"
                 alt="">
          </a>

          <div class="account-info">
            <a class="account-name"
               href="${profile}"
               target="_blank"
               rel="noopener noreferrer">
              ${escapeHTML(user.username)}
            </a>
            <span class="real-name">${escapeHTML(user.name)}</span>
          </div>

          <span class="post-number">${escapeHTML(post.id.toUpperCase())}</span>
        </header>

        <a class="thumbnail-link"
           href="${destination}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Open link for ${escapeHTML(user.username)}'s post">
          <img class="thumbnail"
               src="${escapeHTML(post.image)}"
               alt="Thumbnail for ${escapeHTML(user.username)}'s post"
               loading="lazy">
          <span class="open-label">OPEN LINK ↗</span>
        </a>

        <div class="post-body">
          <div class="post-actions">
            <button class="like-button"
                    type="button"
                    data-like="${escapeHTML(post.id)}"
                    aria-pressed="${liked}">
              ${liked ? "♥ Liked" : "♡ Like"}
            </button>

            <a class="visit-link"
               href="${destination}"
               target="_blank"
               rel="noopener noreferrer">
              Pop in ↗
            </a>
          </div>

          <div class="like-count">
            ${likeTotal.toLocaleString()} likes
          </div>

          <p class="caption">${linkifyCaption(post.caption)}</p>

          <div class="hashtags">${hashtags}</div>
        </div>
      </article>
    `;
  }).join("");
}

// Filter the feed by account.
filter.addEventListener("change", renderFeed);

// Toggle a local demo like.
feed.addEventListener("click", event => {
  const button = event.target.closest("[data-like]");
  if (!button) return;

  const id = button.dataset.like;

  if (likedPosts.has(id)) {
    likedPosts.delete(id);
  } else {
    likedPosts.add(id);
  }

  renderFeed();
});

// Initial render.
renderFeed();
