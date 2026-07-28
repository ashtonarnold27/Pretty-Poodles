/* ===== PUPPY DATA =====
   Swap these out with your real puppies!
   For images, drop photos in the images/ folder and update the paths,
   e.g. "images/bella.jpg"
*/
const puppies = [
    {
      id: 1,
      name: "boy 1",
      photo: "images/boy1.jpg",
      estimatedSize: "Miniature Poodle· ~12-15 lbs",
      description: "Sweet, playful boy who loves cuddles and belly rubs.",
      mom: { name: "Daisy",  photo: "https://placedog.net/300/300?id=10", size: "Miniature · 14 lbs" },
      dad: { name: "Cooper", photo: "https://placedog.net/300/300?id=11", size: "Miniature · 15 lbs" }
    },
    {
      id: 2,
      name: "boy 2",
      photo: "images/boy2.jpg",
      estimatedSize: "Miniature Poodle · ~12-15 lbs",
      description: "Confident, smart boy — great with kids and eager to learn.",
      mom: { name: "Luna",   photo: "https://placedog.net/300/300?id=12", size: "Standard · 48 lbs" },
      dad: { name: "Rocky",  photo: "https://placedog.net/300/300?id=13", size: "Standard · 55 lbs" }
    },
    {
      id: 3,
      name: "boy 3",
      photo: "images/boy3.jpg",
      estimatedSize: "Miniature Poodle · ~12-15 lbs",
      description: "Tiny bundle of joy with a big personality and soft curls.",
      mom: { name: "Pearl",  photo: "https://placedog.net/300/300?id=14", size: "Toy · 7 lbs" },
      dad: { name: "Teddy",  photo: "https://placedog.net/300/300?id=15", size: "Toy · 8 lbs" }
    },
    {
      id: 4,
      name: "girl 1",
      photo: "images/girl1.jpg",
      estimatedSize: "Miniature Poodle· ~12-15 lbs",
      description: "Gentle, easygoing girl who loves naps and being close to his people.",
      mom: { name: "Daisy",  photo: "https://placedog.net/300/300?id=16", size: "Miniature · 14 lbs" },
      dad: { name: "Cooper", photo: "https://placedog.net/300/300?id=17", size: "Miniature · 15 lbs" }
    },
    {
      id: 5,
      name: "girl 2",
      photo: "images/girl2.jpg",
      estimatedSize: "Miniature Poodle · ~12-15 lbs",
      description: "Curious, affectionate girl with the softest apricot curls.",
      mom: { name: "Pearl",  photo: "https://placedog.net/300/300?id=18", size: "Toy · 7 lbs" },
      dad: { name: "Teddy",  photo: "https://placedog.net/300/300?id=19", size: "Toy · 8 lbs" }
    },
    {
      id: 6,
      name: "Coming Soon",
      photo: "https://placedog.net/400/300?id=6",
      estimatedSize: "Standard · ~50-60 lbs",
      description: "Energetic, loyal boy who loves to play fetch and make new friends.",
      mom: { name: "Luna",   photo: "https://placedog.net/300/300?id=20", size: "Standard · 48 lbs" },
      dad: { name: "Rocky",  photo: "https://placedog.net/300/300?id=21", size: "Standard · 55 lbs" }
    }
  ];
  
  /* ===== BUILD PUPPY CARDS ===== */
  const puppyGrid = document.getElementById("puppyGrid");
  
  puppies.forEach(puppy => {
    const card = document.createElement("div");
    card.className = "puppy-card";
    card.innerHTML = `
      <img src="${puppy.photo}" alt="${puppy.name}" />
      <div class="puppy-card-body">
        <h3>${puppy.name}</h3>
        <p class="size">${puppy.estimatedSize}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(puppy));
    puppyGrid.appendChild(card);
  });
  
  /* ===== MODAL LOGIC ===== */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody    = document.getElementById("modalBody");
  const modalClose   = document.getElementById("modalClose");
  
  function openModal(puppy) {
    modalBody.innerHTML = `
      <img class="modal-puppy-img" src="${puppy.photo}" alt="${puppy.name}" />
      <h2>${puppy.name}</h2>
      <span class="size-badge">Est. adult size: ${puppy.estimatedSize}</span>
      <p>${puppy.description}</p>
  
      <div class="parents">
        <h3>Meet the Parents</h3>
        <div class="parent-grid">
          <div class="parent-card">
            <img src="${puppy.mom.photo}" alt="${puppy.mom.name}" />
            <div class="parent-name">Mom · ${puppy.mom.name}</div>
            <div class="parent-size">${puppy.mom.size}</div>
          </div>
          <div class="parent-card">
            <img src="${puppy.dad.photo}" alt="${puppy.dad.name}" />
            <div class="parent-name">Dad · ${puppy.dad.name}</div>
            <div class="parent-size">${puppy.dad.size}</div>
          </div>
        </div>
      </div>
    `;
    modalOverlay.classList.add("active");
  }
  
  function closeModal() {
    modalOverlay.classList.remove("active");
  }
  
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
  
  /* ===== MOBILE NAV TOGGLE ===== */
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  navLinks.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => navLinks.classList.remove("active"))
  );
  