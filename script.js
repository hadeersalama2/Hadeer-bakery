function addToCart(event) {
  const button = event.target;
  const name = button.getAttribute("data-name");
  const price = parseFloat(button.getAttribute("data-price"));
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  cart.push({ name, price });

  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const badge = document.getElementById("cart-badge");

  if (cart.length > 0) {
    badge.textContent = cart.length;
    badge.style.display = "block";
  } else {
    badge.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", updateCartBadge);

////////////////////////////////////////////////////////////
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");

  if (index >= slides.length) {
    currentIndex = slides.length - 1;
  } else if (index < 0) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });

  updateButtons();
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function updateButtons() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".carousel-item");

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  prevButton.style.opacity = currentIndex === 0 ? 0.5 : 1;
  nextButton.style.opacity = currentIndex === slides.length - 1 ? 0.5 : 1;
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});
