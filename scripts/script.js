const headerMenuButton = document.querySelector("header .menu-icon");
headerMenuButton.addEventListener("click", () => {
  const headerMenu = document.querySelector("header ul");
  headerMenu.classList.toggle("opened");
});

//search

const headerSearchButton = document.querySelector("header .search .icon");
headerSearchButton.addEventListener("click", () => {
  const headerSearch = document.querySelector("header .search");
  headerSearch.classList.toggle("opened");
});
const headerSearchInput = document.querySelector("header .search input");
headerSearchInput.addEventListener("blur", () => {
  const headerSearch = document.querySelector("header .search");
  headerSearch.classList.remove("opened");
  headerSearchInput.value = "";
});
const headerSearchMenu = document.querySelector("header .search-menu");
// on input change
headerSearchInput.addEventListener("input", () => {
  headerSearchMenu.innerHTML = "";
  if (headerSearchInput.value === "") {
    headerSearchMenu.classList.remove("opened");
    return;
  }
  headerSearchMenu.classList.add("opened");
  const noData = document.createElement("h4");
  noData.classList.add("no-data");
  noData.textContent = "No data found";
  let dataFound = false;
  dummySearchData
    .filter((data) =>
      data.title.toLowerCase().includes(headerSearchInput.value.toLowerCase())
    )
    .forEach((data) => {
      dataFound = true;
      console.log(data.title);
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
      <img src="${data.image}" alt="${data.title}" />
      <div class="details">
        <h3>${data.title}</h3>
        <p class="price">$${data.price}</p>
      </div>
    `;
      headerSearchMenu.appendChild(item);
    });
  if (!dataFound) {
    headerSearchMenu.appendChild(noData);
  }
});
//home slider
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".home .left-arrow");
const nextButton = document.querySelector(".home .right-arrow");
const navDots = document.querySelector(".nav-dots");
const slideInterval = 5000;
let index = 0;

slides.forEach((slide, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    index = i;
    showSlide(i);
  });
  navDots.appendChild(dot);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  index = index === 0 ? slides.length - 1 : index - 1;
  showSlide(index);
});

nextButton.addEventListener("click", () => {
  index = index === slides.length - 1 ? 0 : index + 1;
  showSlide(index);
});

setInterval(() => {
  index = index === slides.length - 1 ? 0 : index + 1;
  showSlide(index);
}, slideInterval);

// popular section slider
const slidesContainer = document.querySelector(".popular-section .items");
const slide = document.querySelector(".popular-section .items .item");
const previousBtn = document.querySelector(".popular-section .left-arrow");
const nextBtn = document.querySelector(".popular-section .right-arrow");

nextBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth + 16;
});

previousBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth + 16;
});

const dummySearchData = [
  {
    title: "Nike Infinity Pro 2",
    price: 120,
    image: "./images/shoes/infinity-pro-2.png",
  },
  {
    title: "Nike SB React Leo",
    price: 95,
    image: "./images/shoes/sb-react-leo.jpg",
  },
  {
    title: "Nike Air Max 4",
    price: 150,
    image: "./images/shoes/air-max-1.png",
  },
  {
    title: "Nike Air Zoom TR 1",
    price: 130,
    image: "./images/shoes/air-zoom-tr-1.png",
  },
  {
    title: "Nike Air Max Plus Drift",
    price: 185,
    image: "./images/shoes/air-max-plus-drift.png",
  },
  {
    title: "Nike Court Vision Mid Next Nature",
    price: 130,
    image: "./images/shoes/court-vision-mid-next-nature.png",
  },
];
