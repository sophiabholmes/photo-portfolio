const photoGrid = document.getElementById("photoGrid");
const emptyState = document.getElementById("emptyState");

let currentCategory = "home";
let currentIndex = 0;


// -------------------------------------
// SHOW PHOTO
// -------------------------------------

function renderCurrentPhoto() {
  const items = photos[currentCategory] || [];

  photoGrid.innerHTML = "";

  if (items.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  const photo = items[currentIndex];

  const viewer = document.createElement("div");
  viewer.className = "photo-viewer";

  viewer.innerHTML = `
    <figure class="full-photo">
      <img
        src="${photo.src}"
        alt="${photo.alt || ""}"
      >

      ${
        photo.caption
          ? `<figcaption>${photo.caption}</figcaption>`
          : ""
      }
    </figure>

    ${
      currentCategory !== "home"
        ? `
          <div class="photo-controls">
            <button
              class="photo-arrow"
              id="previousPhoto"
              aria-label="Previous photo"
            >
              ←
            </button>

            <span class="photo-counter">
              ${currentIndex + 1} / ${items.length}
            </span>

            <button
              class="photo-arrow"
              id="nextPhoto"
              aria-label="Next photo"
            >
              →
            </button>
          </div>
        `
        : ""
    }
  `;

  photoGrid.appendChild(viewer);

  const previousButton = document.getElementById("previousPhoto");
  const nextButton = document.getElementById("nextPhoto");

  if (previousButton && nextButton) {
    previousButton.addEventListener("click", previousPhoto);
    nextButton.addEventListener("click", nextPhoto);
  }
}


// -------------------------------------
// OPEN CATEGORY
// -------------------------------------

function openCategory(category) {
  currentCategory = category;
  currentIndex = 0;

  renderCurrentPhoto();
}


// -------------------------------------
// NEXT
// -------------------------------------

function nextPhoto() {
  const items = photos[currentCategory];

  if (!items || !items.length) return;

  currentIndex = (currentIndex + 1) % items.length;

  renderCurrentPhoto();
}


// -------------------------------------
// PREVIOUS
// -------------------------------------

function previousPhoto() {
  const items = photos[currentCategory];

  if (!items || !items.length) return;

  currentIndex =
    (currentIndex - 1 + items.length) % items.length;

  renderCurrentPhoto();
}


// -------------------------------------
// CATEGORY BUTTONS
// -------------------------------------

document.querySelectorAll(".js-category").forEach(button => {
  button.addEventListener("click", () => {
    openCategory(button.dataset.category);
  });
});


// -------------------------------------
// HOME
// -------------------------------------

document
  .querySelector(".js-home")
  .addEventListener("click", () => {
    openCategory("home");
  });


// -------------------------------------
// KEYBOARD ARROWS
// -------------------------------------

document.addEventListener("keydown", event => {
  const items = photos[currentCategory];

  if (!items || !items.length) return;

  if (event.key === "ArrowRight") {
    nextPhoto();
  }

  if (event.key === "ArrowLeft") {
    previousPhoto();
  }
});


// -------------------------------------
// START ON HOME
// -------------------------------------

openCategory("home");
