/* ===== PUPPY DATA =====
   Swap these out with your real puppies!
   For images, drop photos in the images/ folder and update the paths,
   e.g. "images/bella.jpg"
*/
const puppies = [
    {
      id: 1,
      name: "Bella",
      photo: "https://placedog.net/400/300?id=1",
      estimatedSize: "Miniature · ~12-15 lbs",
      description: "Sweet, playful girl who loves cuddles and belly rubs.",
      mom: { name: "Daisy",  photo: "https://placedog.net/300/300?id=10", size: "Miniature · 14 lbs" },
      dad: { name: "Cooper", photo: "https://placedog.net/300/300?id=11", size: "Miniature · 15 lbs" }
    },
    {
      id: 2,
      name: "Max",
      photo: "https://placedog.net/400/300?id=2",
      estimatedSize: "Standard · ~45-55 lbs",
      description: "Confident, smart boy — great with kids and eager to learn.",
      mom: { name: "Luna",   photo: "https://placedog.net/300/300?id=12", size: "Standard · 48 lbs" },
      dad: { name: "Rocky",  photo: "https://placedog.net/300/300?id=13", size: "Standard · 55 lbs" }
    },
    {
      id: 3,
      name: "Coco",
      photo: "https://placedog.net/400/300?id=3",
      estimatedSize: "Toy · ~6-8 lbs",
      description: "Tiny bundle of joy with a big personality and soft curls.",
      mom: { name: "Pearl",  photo: "https://placedog.net/300/300?id=14", size: "Toy · 7 lbs" },
      dad: { name: "Teddy",  photo: "https://placedog.net/300/300?id=15", size: "Toy · 8 lbs" }
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
  