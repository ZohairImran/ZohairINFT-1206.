const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Create the images array of objects
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];
// Base URL for all images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// 2. Loop through images and add thumbnails
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;

  // Make it keyboard focusable
  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);

  // Click to update main image
  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  // Keyboard Enter to update main image
  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// 3. Function to update the displayed image
function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

// 4. Darken/Lighten button
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.classList.remove("dark");
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.classList.add("dark");
  }
});
