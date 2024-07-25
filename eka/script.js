let currentSlide = 0;

function moveSlides(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length / 4; // 3'erli gruplar
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const slideWidth = slides.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlides(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideTwo = 0;

function moveSlidesTwo(direction) {
  const slidesTwo = document.querySelector(".slides__two");
  const totalSlidesTwo = slidesTwo.children.length / 4; // 3'erli gruplar
  currentSlideTwo =
    (currentSlideTwo + direction + totalSlidesTwo) % totalSlidesTwo;
  const slideWidthTwo = slidesTwo.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesTwo.style.transform = `translateX(${-currentSlide * slideWidthTwo}px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesTwo(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideThree = 0;

function moveSlidesThree(direction) {
  const slidesThree = document.querySelector(".slides__three");
  const totalSlidesThree = slidesThree.children.length / 4; // 3'erli gruplar
  currentSlideThree =
    (currentSlideThree + direction + totalSlidesThree) % totalSlidesThree;
  const slideWidthThree = slidesThree.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesThree.style.transform = `translateX(${
    -currentSlide * slideWidthThree
  }px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesThree(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideFour = 0;

function moveSlidesFour(direction) {
  const slidesFour = document.querySelector(".slides__four");
  const totalSlidesFour = slidesFour.children.length / 4; // 3'erli gruplar
  currentSlideFour =
    (currentSlideFour + direction + totalSlidesFour) % totalSlidesFour;
  const slideWidthFour = slidesFour.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesFour.style.transform = `translateX(${
    -currentSlide * slideWidthFour
  }px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesFour(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideFive = 0;

function moveSlidesFive(direction) {
  const slidesFive = document.querySelector(".slides__five");
  const totalSlidesFive = slidesFive.children.length / 4; // 3'erli gruplar
  currentSlideFive =
    (currentSlideFive + direction + totalSlidesFive) % totalSlidesFive;
  const slideWidthFive = slidesFive.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesFive.style.transform = `translateX(${
    -currentSlide * slideWidthFive
  }px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesFive(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideSix = 0;

function moveSlidesSix(direction) {
  const slidesSix = document.querySelector(".slides__six");
  const totalSlidesSix = slidesSix.children.length / 4; // 3'erli gruplar
  currentSlideSix =
    (currentSlideSix + direction + totalSlidesSix) % totalSlidesSix;
  const slideWidthSix = slidesSix.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesSix.style.transform = `translateX(${-currentSlide * slideWidthSix}px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesSix(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

let currentSlideSeven = 0;

function moveSlidesSeven(direction) {
  const slidesSeven = document.querySelector(".slides__seven");
  const totalSlidesSeven = slidesSeven.children.length / 4; // 3'erli gruplar
  currentSlideSeven =
    (currentSlideSeven + direction + totalSlidesSeven) % totalSlidesSeven;
  const slideWidthSeven = slidesSeven.clientWidth / 3; // 4 grup olduğu için genişliği 4'e bölüyoruz
  slidesSeven.style.transform = `translateX(${
    -currentSlide * slideWidthSeven
  }px)`;
}

// Opsiyonel: Slider'ın otomatik kaydırılması
setInterval(() => moveSlidesSeven(1), 3000);

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imgElement.src;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Modal kapatmak için tıklama işlevselliği
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

///////////////////////////////////////////////////////
/////// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
