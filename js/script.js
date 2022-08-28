const navBar = document.getElementById("nav-bar");
const productDisplay = document.getElementById("products");

function viewBurger() {
  if (navBar.style.display === "none") {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
}

document.getElementById("myBtn").onclick = function () { viewFilters() };
function viewFilters() {
  productDisplay.style.marginTop = "25px";
  document.getElementById("myDropdown").classList.toggle("show")
}

const closeBlob = document.getElementById('close-blob');
const blobOverlay = document.getElementById('huge-blob');
const spiritLink = document.getElementById('spirit-link');
const spiritContent = document.getElementById('spirit-content');
const pageContent = document.getElementById('page-content');

spiritLink.onclick = function () {
  window.scrollTo(0, 0);
  document.getElementById("body").style.overflow = "hidden";
  blobOverlay.classList.toggle("active");
  let spiritContent = `
  <h1>About Helen</h1>
  <img src="img/helen-about.jpg" alt="">
  <div id="about-content">
  <p>Name: Helen</p>
  <p>Location: Japan</p>
  <p>Originally From: New Zealand</p>
  <p>Starsign: Capricorn</p>
  <p>Favourite Food: Cabbages</p>
  <br>
  <p>Midori is a creative outlet for Helen, who is still emotionally recovering from her design degree.</p>
  <p>All items are hand painted and, as such, are one of a kind. They may also have inconsistencies in paint thickness and colour because of the painting process.</p>
  <p>Cat ipsum dolor sit amet, purr purr purr until owner pets why owner not pet me hiss scratch meow and destroy house in 5 seconds for chase ball of string. Why must they do that lick the other cats but ask to be pet then attack owners hand and leave buried treasure in the sandbox for the toddlers cat fur is the new black . Stare at imaginary bug i cry and cry and cry unless you pet me, and then maybe i cry just for fun, who's the baby if it fits i sits furball roll roll roll or hopped up on catnip, and meow to be let in.</p>
  </div>
  `;
  pageContent.innerHTML = spiritContent;
  let delayedContent = setTimeout(delayAnimation, 400);
}
closeBlob.onclick = function () {
  document.getElementById("body").style.overflowY = "auto";
  let delayedContent = setTimeout(delayClose, 100);
  spiritContent.classList.toggle("active");
}

function delayAnimation() {
  spiritContent.classList.toggle("active");
}

function delayClose() {
  blobOverlay.classList.toggle("active");
}

//product array
const product = [
  {
    id: 0,
    image: "blue-yellow1.jpg",
    name: "Honoka",
    size: "m",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 1,
    image: "purple-daisy1.jpg",
    name: "Nico",
    size: "m",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 2,
    image: "grey-green1.jpg",
    name: "Rin",
    size: "xs",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 3,
    image: "purple-blue1.jpg",
    name: "Nozomi",
    size: "l",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 4,
    image: "pink-lime1.jpg",
    name: "Maki",
    size: "l",
    price: 20,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 5,
    image: "burgundy-yellow1.jpg",
    name: "Umi",
    size: "m",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 6,
    image: "purple-red1.jpg",
    name: "Eli",
    size: "m",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 7,
    image: "white-purple1.jpg",
    name: "Hanayo",
    size: "l",
    price: 20,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 8,
    image: "yellow-blue.jpg",
    name: "Kitori",
    size: "l",
    price: 20,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 9,
    image: "navy-yellow1.jpg",
    name: "Chika",
    size: "s",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  },
  {
    id: 10,
    image: "grey-yellow1.jpg",
    name: "Haru",
    size: "xl",
    price: 40,
    description: "100% Cotton hand painted with colour fast fabric paint.",
  }
]

const products = document.getElementById("products");
showAllProducts();


const modalButtonsArray = document.getElementsByClassName("modal-button");
// console.log(modalButtonsArray);

const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const productInfo = document.getElementById("information");
const closeBtn = document.getElementById("close-button");

generateButtons();

closeBtn.onclick = function () {
  closeModal();
  clearInterval();
}

function openModal(i) {
  productInfo.innerHTML = `
  <div class="product-details">
      <img src="img/${product[i].image}" alt="${product[i].name}">
      <div class="content-wrapper">
      <h2>${product[i].name}</h2>
      <h3>Size: ${product[i].size}</h3>
      <h5>$${product[i].price}</h5>
      <h5>${product[i].description}</h5>
      </div>
  </div>`;
  modalOverlay.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn() {
    modalContent.classList.toggle("active");
  }
}

function closeModal() {
  modalContent.classList.toggle("active");
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn() {
    modalOverlay.classList.toggle("active");
  }
}

// ------------------notifcations bar---------------
const notifications = document.getElementById("notifications");

//generate buttons

function generateButtons() {
  for (let i = 0; i < modalButtonsArray.length; i++) {
    // show the individual button
    // console.log(modalButtonsArray[i]);
    modalButtonsArray[i].onclick = function () {
      // console.log("you clicked on a button");
      // put the buttons id into a variable
      let currentButtonId = this.id;
      // let currentButtonId = this
      openModal(currentButtonId);
    }
  }
}

//filtering
const filterBtn = document.getElementById("size-filter-button");
filterBtn.onclick = function () {
  filterSize();
}

function filterSize() {
  productDisplay.innerHTML = "";
  let checkedBoxes = document.querySelectorAll("input[name=size]:checked");

  const selectedSizes = [];

  for (let i = 0; i < checkedBoxes.length; i++) {
    selectedSizes.push(checkedBoxes[i].value);
  }

  if (selectedSizes.length == 0) {
    showAllProducts();
    notifications.innerHTML = `
    <div class="alert">Showing all products.</div>
    `
    generateButtons();
  } else {
    notifications.innerHTML = "";
    notifications.innerHTML = `
    <div id="size-preface">Size: </div>
    `
    for (let i = 0; i < selectedSizes.length; i++) {
      notifications.innerHTML += `
      <div class="alert-product">${selectedSizes[i]}</div>
      `
    }
    for (let i = 0; i < selectedSizes.length; i++) {
      if (selectedSizes[i] == "xs") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "xs") {
            generateProducts(i);
            generateButtons();
          }//end if statement
        }//end loop checking all
      }//end of if statement

      if (selectedSizes[i] == "s") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "s") {
            generateProducts(i);
            generateButtons();
          } //end if statement
        } //end loop checking all
      } //end of if statement

      if (selectedSizes[i] == "m") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "m") {
            generateProducts(i);
            generateButtons();
          } //end if statement
        } //end loop checking all
      } //end of if statement

      if (selectedSizes[i] == "l") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "l") {
            generateProducts(i);
            generateButtons();
          } //end if statement
        } //end loop checking all
      }//end of if statement

      if (selectedSizes[i] == "xl") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "xl") {
            generateProducts(i);
            generateButtons();
          } //end if statement
        } //end loop checking all
      }//end of if statement

      if (selectedSizes[i] == "xxl") {
        for (let i = 0; i < product.length; i++) {
          if (product[i].size == "xxl") {
            generateProducts(i);
            generateButtons();
          } //end if statement
        } //end loop checking all
      }//end of if statement
    }// end of for loop
    generateButtons();
  }//end of the else statement
}// end of filter genre function

function showAllProducts() {
  for (let i = 0; i < product.length; i++) {
    products.innerHTML += `
      <div class="product-profile">
      <div class="image-container">
          <img src="img/${product[i].image}" alt="${product[i].name}">
        </div>
          <div class="content-wrapper">
          <h4>${product[i].name}</h4>
          <h5>Size: ${product[i].size}</h5>
          <a class="button modal-button" id="${product[i].id}">View Product<i class="bi bi-arrow-right-short"></i></a>
          </div>
      </div>
      `
  }
}

function generateProducts(i) {
  products.innerHTML += `
    <div class="product-profile">
      <div class="image-container">
        <img src="img/${product[i].image}" alt="${product[i].name}">
      </div>
        <div class="content-wrapper">
        <h4>${product[i].name}</h4>
        <h5>Size: ${product[i].size}</h5>
        <a class="button modal-button" id="${product[i].id}">View Product<i class="bi bi-arrow-right-short"></i></a>
        </div>
    </div>
    `
}

const addProductBtn = document.getElementById("add-new-button");
const productModalOverlay = document.getElementById("product-modal-overlay");
const productModalContent = document.getElementById("product-modal-content");
const productCloseBtn = document.getElementById("product-close-button");


addProductBtn.onclick = function () {
  openNewProductModal();
}

productCloseBtn.onclick = function () {
  closeProductModal();
}

function openNewProductModal() {
  addProductBtn.classList.toggle("hidden");
  productModalOverlay.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeInProduct, 300);
  function fadeInProduct() {
    productModalContent.classList.toggle("active");
  }
}

function closeProductModal() {
  productModalContent.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeInProduct, 300);
  function fadeInProduct() {
    productModalOverlay.classList.toggle("active");
    addProductBtn.classList.toggle("hidden");
  }
}

const submitProductBtn = document.getElementById("submit-product-button");
const productName = document.getElementById("product-name");
const productImgUrl = document.getElementById("product-img-url");
const productGenre = document.getElementById("product-size");
const productSize = document.getElementById("product-price");
const productDes = document.getElementById("product-description");

submitProductBtn.onclick = function () {
  let newProduct = {
    id: product.length,
    image: productImgUrl.value,
    name: productName.value,
    size: productGenre.value,
    price: productSize.value,
    description: productDes.value,
  }
  product.push(newProduct);
  generateButtons();
  closeProductModal();
  showAllProducts();
  generateButtons();
}
