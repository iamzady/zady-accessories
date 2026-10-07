/* =========================================================
   ZADY ACCESSORIES
   CLEAN WORKING JAVASCRIPT
========================================================= */

const WHATSAPP_NUMBER = "916385558452";

/* =========================================================
   PRODUCT DATA
========================================================= */

const defaultProducts = [
  {
    id: "M01",
    gender: "men",
    category: "dresses",
    name: "ZADY MEN DRESS 01",
    price: 1299,
    material: "Premium Fabric",
    sizes: ["S", "M", "L", "XL"],
    colours: ["Black", "Mocha"],
    status: "in",
    added: Date.now() - 5 * 86400000,
    orders: 18,
    description: "Premium modern men's outfit.",
    imageType: "dress"
  },
  {
    id: "M02",
    gender: "men",
    category: "dresses",
    name: "ZADY MEN DRESS 02",
    price: 1999,
    material: "Premium Fabric",
    sizes: ["S", "M", "L", "XL"],
    colours: ["Black", "Silver"],
    status: "in",
    added: Date.now() - 12 * 86400000,
    orders: 27,
    description: "Modern premium men's collection.",
    imageType: "dress"
  },
  {
    id: "M03",
    gender: "men",
    category: "dresses",
    name: "ZADY MEN DRESS 03",
    price: 2999,
    material: "Premium Fabric",
    sizes: ["S", "M", "L", "XL"],
    colours: ["Mocha", "Black"],
    status: "sold",
    added: Date.now() - 50 * 86400000,
    orders: 31,
    description: "Limited edition men's collection.",
    imageType: "dress"
  },

  {
    id: "M04",
    gender: "men",
    category: "chains",
    name: "ZADY MEN CHAIN 01",
    price: 799,
    material: "Stainless Steel",
    sizes: ["45cm", "50cm", "55cm"],
    colours: ["Silver", "Black"],
    status: "in",
    added: Date.now() - 7 * 86400000,
    orders: 45,
    description: "Minimal premium stainless steel chain.",
    imageType: "chain"
  },
  {
    id: "M05",
    gender: "men",
    category: "chains",
    name: "ZADY MEN CHAIN 02",
    price: 1499,
    material: "Stainless Steel",
    sizes: ["45cm", "50cm", "55cm"],
    colours: ["Silver", "Mocha"],
    status: "in",
    added: Date.now() - 20 * 86400000,
    orders: 39,
    description: "Stylish everyday chain.",
    imageType: "chain"
  },
  {
    id: "M06",
    gender: "men",
    category: "chains",
    name: "ZADY MEN CHAIN 03",
    price: 2499,
    material: "925 Silver",
    sizes: ["45cm", "50cm", "55cm"],
    colours: ["Silver"],
    status: "in",
    added: Date.now() - 75 * 86400000,
    orders: 52,
    description: "Premium 925 silver chain.",
    imageType: "chain"
  },

  {
    id: "M07",
    gender: "men",
    category: "rings",
    name: "ZADY MEN RING 01",
    price: 599,
    material: "Stainless Steel",
    sizes: ["16", "18", "20", "22"],
    colours: ["Silver", "Black"],
    status: "in",
    added: Date.now() - 10 * 86400000,
    orders: 41,
    description: "Classic men's ring.",
    imageType: "ring"
  },
  {
    id: "M08",
    gender: "men",
    category: "rings",
    name: "ZADY MEN RING 02",
    price: 999,
    material: "Stainless Steel",
    sizes: ["16", "18", "20", "22"],
    colours: ["Silver", "Mocha"],
    status: "in",
    added: Date.now() - 35 * 86400000,
    orders: 48,
    description: "Modern premium ring.",
    imageType: "ring"
  },
  {
    id: "M09",
    gender: "men",
    category: "rings",
    name: "ZADY MEN RING 03",
    price: 1799,
    material: "925 Silver",
    sizes: ["16", "18", "20", "22"],
    colours: ["Silver"],
    status: "sold",
    added: Date.now() - 90 * 86400000,
    orders: 60,
    description: "Premium silver ring.",
    imageType: "ring"
  },

  {
    id: "W01",
    gender: "women",
    category: "dresses",
    name: "ZADY WOMEN DRESS 01",
    price: 1499,
    material: "Premium Fabric",
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["Black", "Mocha"],
    status: "in",
    added: Date.now() - 8 * 86400000,
    orders: 22,
    description: "Elegant women's outfit.",
    imageType: "dress"
  },
  {
    id: "W02",
    gender: "women",
    category: "dresses",
    name: "ZADY WOMEN DRESS 02",
    price: 2299,
    material: "Premium Fabric",
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["Black", "Silver"],
    status: "in",
    added: Date.now() - 17 * 86400000,
    orders: 29,
    description: "Premium women's fashion.",
    imageType: "dress"
  },
  {
    id: "W03",
    gender: "women",
    category: "dresses",
    name: "ZADY WOMEN DRESS 03",
    price: 3499,
    material: "Premium Fabric",
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["Mocha", "Black"],
    status: "in",
    added: Date.now() - 45 * 86400000,
    orders: 37,
    description: "Luxury women's collection.",
    imageType: "dress"
  },

  {
    id: "W04",
    gender: "women",
    category: "chains",
    name: "ZADY WOMEN CHAIN 01",
    price: 899,
    material: "Stainless Steel",
    sizes: ["40cm", "45cm", "50cm"],
    colours: ["Silver", "Black"],
    status: "in",
    added: Date.now() - 9 * 86400000,
    orders: 55,
    description: "Elegant women's chain.",
    imageType: "chain"
  },
  {
    id: "W05",
    gender: "women",
    category: "chains",
    name: "ZADY WOMEN CHAIN 02",
    price: 1599,
    material: "Stainless Steel",
    sizes: ["40cm", "45cm", "50cm"],
    colours: ["Silver", "Mocha"],
    status: "in",
    added: Date.now() - 25 * 86400000,
    orders: 43,
    description: "Stylish premium chain.",
    imageType: "chain"
  },
  {
    id: "W06",
    gender: "women",
    category: "chains",
    name: "ZADY WOMEN CHAIN 03",
    price: 2799,
    material: "925 Silver",
    sizes: ["40cm", "45cm", "50cm"],
    colours: ["Silver"],
    status: "in",
    added: Date.now() - 70 * 86400000,
    orders: 66,
    description: "Premium silver chain.",
    imageType: "chain"
  },

  {
    id: "W07",
    gender: "women",
    category: "rings",
    name: "ZADY WOMEN RING 01",
    price: 699,
    material: "Stainless Steel",
    sizes: ["14", "16", "18", "20"],
    colours: ["Silver", "Black"],
    status: "in",
    added: Date.now() - 6 * 86400000,
    orders: 47,
    description: "Elegant women's ring.",
    imageType: "ring"
  },
  {
    id: "W08",
    gender: "women",
    category: "rings",
    name: "ZADY WOMEN RING 02",
    price: 1199,
    material: "Stainless Steel",
    sizes: ["14", "16", "18", "20"],
    colours: ["Silver", "Mocha"],
    status: "in",
    added: Date.now() - 22 * 86400000,
    orders: 51,
    description: "Modern premium ring.",
    imageType: "ring"
  },
  {
    id: "W09",
    gender: "women",
    category: "rings",
    name: "ZADY WOMEN RING 03",
    price: 1999,
    material: "925 Silver",
    sizes: ["14", "16", "18", "20"],
    colours: ["Silver"],
    status: "in",
    added: Date.now() - 80 * 86400000,
    orders: 72,
    description: "Premium women's silver ring.",
    imageType: "ring"
  }
];


/* =========================================================
   LOCAL STORAGE
========================================================= */

let products =
  JSON.parse(localStorage.getItem("zadyProducts")) ||
  defaultProducts;

let bag =
  JSON.parse(localStorage.getItem("zadyBag")) || [];

let wishlist =
  JSON.parse(localStorage.getItem("zadyWishlist")) || [];

let orders =
  JSON.parse(localStorage.getItem("zadyOrders")) || [];

let reviews =
  JSON.parse(localStorage.getItem("zadyReviews")) || [];

let coupons =
  JSON.parse(localStorage.getItem("zadyCoupons")) || [
    {
      code: "ZADY10",
      type: "percent",
      value: 10,
      min: 999
    },
    {
      code: "WELCOME200",
      type: "fixed",
      value: 200,
      min: 1499
    }
  ];

let currentGender = "men";
let currentCategory = "all";
let currentProduct = null;
let selectedPayment = "UPI";
let selectedCoupon = null;


/* =========================================================
   HELPERS
========================================================= */

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}


function saveData() {
  localStorage.setItem(
    "zadyProducts",
    JSON.stringify(products)
  );

  localStorage.setItem(
    "zadyBag",
    JSON.stringify(bag)
  );

  localStorage.setItem(
    "zadyWishlist",
    JSON.stringify(wishlist)
  );

  localStorage.setItem(
    "zadyOrders",
    JSON.stringify(orders)
  );

  localStorage.setItem(
    "zadyReviews",
    JSON.stringify(reviews)
  );

  localStorage.setItem(
    "zadyCoupons",
    JSON.stringify(coupons)
  );
}


function getProduct(id) {
  return products.find(product => product.id === id);
}


function isNew(product) {
  return Date.now() - product.added <= 30 * 86400000;
}


function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function closeOverlay(id) {
  const element = document.getElementById(id);

  if (element) {
    element.classList.remove("open");
  }
}


function toast(message) {
  const element = document.getElementById("toast");

  if (!element) {
    alert(message);
    return;
  }

  element.textContent = message;
  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 2200);
}


/* =========================================================
   PRODUCT ART
========================================================= */

function placeholderArt(type, extraClass = "") {

  return `
    <div class="product-art ${extraClass}">
      <div class="art-${type}"></div>
    </div>
  `;
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {

  const isWishlisted =
    wishlist.includes(product.id);

  const sold =
    product.status === "sold";

  return `
    <article class="product-card ${sold ? "sold-out" : ""}">

      <div
        class="product-image"
        onclick="quickView('${product.id}')"
      >

        <div class="product-top">

          <span class="product-number">
            ${product.id}
          </span>

          ${
            sold
              ? `<span class="badge sold">SOLD OUT</span>`
              : isNew(product)
                ? `<span class="badge new-badge">NEW</span>`
                : ""
          }

        </div>

        ${placeholderArt(product.imageType)}

        <div class="image-text">
          ZADY
        </div>

      </div>


      <div class="product-content">

        <div class="product-name">
          ${escapeHTML(product.name)}
        </div>

        <div class="product-price">
          ${money(product.price)}
        </div>


        <div class="card-actions">

          <button
            class="card-action heart ${isWishlisted ? "active" : ""}"
            onclick="toggleWishlist('${product.id}',event)"
          >
            ${isWishlisted ? "♥" : "♡"}
          </button>


          <button
            class="card-action"
            onclick="quickView('${product.id}')"
          >
            QUICK VIEW
          </button>


          ${
            sold
              ? `
                <button
                  class="card-action"
                  disabled
                >
                  SOLD
                </button>
              `
              : `
                <button
                  class="card-action"
                  onclick="addToBag('${product.id}')"
                >
                  ADD TO BAG
                </button>
              `
          }

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   INITIALIZE
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {

    const loader =
      document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

  }, 1200);


  renderAll();

  updateCounts();

  setupSearch();

  createQR();

});


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

  renderNewArrivals(
    "men",
    "newMen"
  );

  renderNewArrivals(
    "women",
    "newWomen"
  );

  renderBestSellers();

  updateCounts();
}


/* =========================================================
   NEW ARRIVALS
========================================================= */

function renderNewArrivals(
  gender,
  target
) {

  const element =
    document.getElementById(target);

  if (!element) return;


  const list =
    products
      .filter(product =>
        product.gender === gender &&
        isNew(product)
      )
      .slice(0, 6);


  if (!list.length) {

    element.innerHTML =
      `<div class="empty">
        NO NEW ARRIVALS YET.
      </div>`;

    return;
  }


  element.innerHTML =
    list.map(productCard).join("");
}


/* =========================================================
   BEST SELLERS
========================================================= */

function renderBestSellers() {

  const element =
    document.getElementById("bestSellers");

  if (!element) return;


  const list =
    [...products]
      .sort(
        (a, b) =>
          b.orders - a.orders
      )
      .slice(0, 8);


  element.innerHTML =
    list.map(productCard).join("");
}


/* =========================================================
   CATEGORY
========================================================= */

function showCategory(
  gender,
  category
) {

  currentGender = gender;
  currentCategory = category;

  const overlay =
    document.getElementById(
      "categoryOverlay"
    );

  if (overlay) {
    overlay.classList.add("open");
  }

  renderCategory();
}


function categoryFilter(category) {

  currentCategory = category;

  renderCategory();
}


function goToGender(gender) {

  showCategory(
    gender,
    "all"
  );
}


function renderCategory() {

  const title =
    document.getElementById(
      "categoryTitle"
    );

  const productsArea =
    document.getElementById(
      "categoryProducts"
    );


  if (!productsArea) return;


  if (title) {

    title.textContent =
      currentGender.toUpperCase() +
      (
        currentCategory !== "all"
          ? " — " +
            currentCategory.toUpperCase()
          : ""
      );

  }


  const list =
    products.filter(product =>

      product.gender ===
      currentGender &&

      (
        currentCategory === "all" ||
        product.category ===
        currentCategory
      )

    );


  productsArea.innerHTML =
    list.length

      ? list.map(productCard).join("")

      : `
        <div class="empty">
          NO PRODUCTS FOUND.
        </div>
      `;
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(
  id,
  event
) {

  if (event) {
    event.stopPropagation();
  }


  if (wishlist.includes(id)) {

    wishlist =
      wishlist.filter(
        item => item !== id
      );

    toast(
      "REMOVED FROM WISHLIST"
    );

  } else {

    wishlist.push(id);

    toast(
      "ADDED TO WISHLIST"
    );
  }


  saveData();

  updateCounts();

  renderAll();


  const panel =
    document.getElementById(
      "wishlistPanel"
    );

  if (
    panel &&
    panel.classList.contains("open")
  ) {
    renderWishlist();
  }
}


function updateCounts() {

  const wishlistCount =
    document.getElementById(
      "wishlistCount"
    );

  const bagCount =
    document.getElementById(
      "bagCount"
    );


  if (wishlistCount) {

    wishlistCount.textContent =
      wishlist.length;

  }


  if (bagCount) {

    bagCount.textContent =
      bag.reduce(
        (total, item) =>
          total + item.qty,
        0
      );

  }
}


function openWishlist() {

  renderWishlist();

  const panel =
    document.getElementById(
      "wishlistPanel"
    );

  if (panel) {
    panel.classList.add("open");
  }
}


function closeWishlist() {

  const panel =
    document.getElementById(
      "wishlistPanel"
    );

  if (panel) {
    panel.classList.remove("open");
  }
}


function renderWishlist() {

  const container =
    document.getElementById(
      "wishlistItems"
    );

  if (!container) return;


  const items =
    wishlist
      .map(id => getProduct(id))
      .filter(Boolean);


  if (!items.length) {

    container.innerHTML =
      `
        <div class="empty">
          YOUR WISHLIST IS EMPTY.
        </div>
      `;

    return;
  }


  container.innerHTML =
    items.map(product => `

      <div class="bag-item">

        <div class="mini-image">
          ${placeholderArt(
            product.imageType,
            "mini-art"
          )}
        </div>

        <div>

          <strong>
            ${escapeHTML(
              product.name
            )}
          </strong>

          <div
            style="
              color:#aaa;
              margin-top:6px;
            "
          >
            ${money(product.price)}
          </div>

        </div>


        <button
          class="icon-btn"
          onclick="
            toggleWishlist(
              '${product.id}'
            )
          "
        >
          ♥
        </button>

      </div>

    `).join("");
}


/* =========================================================
   BAG
========================================================= */

function addToBag(id) {

  const product =
    getProduct(id);


  if (
    !product ||
    product.status === "sold"
  ) {

    toast(
      "PRODUCT IS SOLD OUT"
    );

    return;
  }


  const existing =
    bag.find(
      item => item.id === id
    );


  if (existing) {

    existing.qty++;

  } else {

    bag.push({

      id: id,

      qty: 1,

      size:
        product.sizes?.[0] || "",

      colour:
        product.colours?.[0] || ""

    });

  }


  saveData();

  updateCounts();

  toast(
    "ADDED TO BAG"
  );
}


function openBag() {

  renderBag();

  const panel =
    document.getElementById(
      "bagPanel"
    );

  if (panel) {
    panel.classList.add("open");
  }
}


function closeBag() {

  const panel =
    document.getElementById(
      "bagPanel"
    );

  if (panel) {
    panel.classList.remove("open");
  }
}


function changeQty(
  id,
  amount
) {

  const item =
    bag.find(
      product =>
        product.id === id
    );


  if (!item) return;


  item.qty += amount;


  if (item.qty <= 0) {

    bag =
      bag.filter(
        product =>
          product.id !== id
      );

  }


  saveData();

  renderBag();

  updateCounts();
}


function removeFromBag(id) {

  bag =
    bag.filter(
      item =>
        item.id !== id
    );

  saveData();

  renderBag();

  updateCounts();
}


function bagSubtotal() {

  return bag.reduce(
    (total, item) => {

      const product =
        getProduct(item.id);

      if (!product) {
        return total;
      }

      return total +
        product.price *
        item.qty;

    },
    0
  );
}


function deliveryCharge() {

  const subtotal =
    bagSubtotal();


  if (subtotal === 0) {
    return 0;
  }


  return subtotal >= 999
    ? 0
    : 39;
}


function renderBag() {

  const container =
    document.getElementById(
      "bagItems"
    );

  const footer =
    document.getElementById(
      "bagFooter"
    );


  if (!container) return;


  if (!bag.length) {

    container.innerHTML =
      `
        <div class="empty">
          YOUR BAG IS EMPTY.
        </div>
      `;

    if (footer) {
      footer.innerHTML = "";
    }

    return;
  }


  container.innerHTML =
    bag.map(item => {

      const product =
        getProduct(item.id);

      if (!product) {
        return "";
      }


      return `

        <div class="bag-item">

          <div class="mini-image">
            ${placeholderArt(
              product.imageType,
              "mini-art"
            )}
          </div>


          <div>

            <strong>
              ${escapeHTML(
                product.name
              )}
            </strong>


            <div
              style="
                color:#aaa;
                margin-top:5px;
              "
            >
              ${money(
                product.price
              )}
            </div>


            <div class="qty">

              <button
                onclick="
                  changeQty(
                    '${product.id}',
                    -1
                  )
                "
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                onclick="
                  changeQty(
                    '${product.id}',
                    1
                  )
                "
              >
                +
              </button>

            </div>

          </div>


          <button
            class="icon-btn"
            onclick="
              removeFromBag(
                '${product.id}'
              )
            "
          >
            ×
          </button>

        </div>

      `;

    }).join("");


  const subtotal =
    bagSubtotal();

  const delivery =
    deliveryCharge();

  const total =
    subtotal + delivery;


  if (footer) {

    footer.innerHTML = `

      <div class="bag-total">

        <span>
          SUBTOTAL
        </span>

        <strong>
          ${money(subtotal)}
        </strong>

      </div>


      <div class="summary-line">

        <span>
          DELIVERY
        </span>

        <span>
          ${
            delivery === 0
              ? "FREE"
              : money(delivery)
          }
        </span>

      </div>


      <div class="summary-line total">

        <span>
          TOTAL
        </span>

        <strong>
          ${money(total)}
        </strong>

      </div>


      <button
        class="btn cyan"
        style="
          width:100%;
          margin-top:15px;
        "
        onclick="openCheckout()"
      >
        CHECKOUT
      </button>

    `;

  }
}


/* =========================================================
   QUICK VIEW
========================================================= */

function quickView(id) {

  currentProduct =
    getProduct(id);


  if (!currentProduct) {
    return;
  }


  const product =
    currentProduct;


  const container =
    document.getElementById(
      "productView"
    );


  if (!container) return;


  container.innerHTML = `

    <div class="detail-main-image">

      ${placeholderArt(
        product.imageType,
        "detail-art"
      )}

    </div>


    <div class="detail-info">

      <div class="kicker">

        ${product.gender.toUpperCase()}
        /
        ${product.category.toUpperCase()}

      </div>


      <h2>
        ${escapeHTML(
          product.name
        )}
      </h2>


      <div class="detail-price">

        ${money(
          product.price
        )}

      </div>


      <p style="color:#777;">

        ${
          product.status === "sold"
            ? "SOLD OUT"
            : "IN STOCK"
        }

      </p>


      ${
        product.material
          ? `
            <div
              class="option-group"
            >

              <label>
                MATERIAL
              </label>

              <div>
                ${escapeHTML(
                  product.material
                )}
              </div>

            </div>
          `
          : ""
      }


      <div
        class="option-group"
      >

        <label>
          SIZE
        </label>

        <div
          class="options"
        >

          ${
            product.sizes
              .map(
                size =>
                  `
                    <button
                      class="option"
                    >
                      ${size}
                    </button>
                  `
              )
              .join("")
          }

        </div>

      </div>


      <div
        class="option-group"
      >

        <label>
          COLOUR
        </label>

        <div
          class="options"
        >

          ${
            product.colours
              .map(
                colour =>
                  `
                    <button
                      class="option"
                    >
                      ${colour}
                    </button>
                  `
              )
              .join("")
          }

        </div>

      </div>


      <p
        style="
          color:#888;
          line-height:1.7;
        "
      >
        ${escapeHTML(
          product.description
        )}
      </p>


      ${
        product.status === "sold"

          ? `
              <button
                class="btn"
                disabled
              >
                SOLD OUT
              </button>
            `

          : `
              <button
                class="btn cyan"
                onclick="
                  addToBag(
                    '${product.id}'
                  );
                  closeOverlay(
                    'productOverlay'
                  );
                "
              >
                ADD TO BAG
              </button>
            `
      }

    </div>

  `;


  const overlay =
    document.getElementById(
      "productOverlay"
    );

  if (overlay) {
    overlay.classList.add("open");
  }
}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

  const overlay =
    document.getElementById(
      "searchOverlay"
    );

  if (overlay) {
    overlay.classList.add("open");
  }


  const input =
    document.getElementById(
      "searchInput"
    );

  if (input) {

    input.value = "";

    setTimeout(
      () => input.focus(),
      100
    );

  }
}


function setupSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );

  if (!input) return;


  input.addEventListener(
    "input",
    () => {

      const query =
        input.value
          .trim()
          .toLowerCase();


      const result =
        document.getElementById(
          "searchResults"
        );


      if (!result) return;


      if (!query) {

        result.innerHTML = "";

        return;
      }


      const matches =
        products.filter(
          product =>

            product.name
              .toLowerCase()
              .includes(query) ||

            product.category
              .toLowerCase()
              .includes(query) ||

            product.gender
              .toLowerCase()
              .includes(query)
        );


      if (!matches.length) {

        result.innerHTML =
          `
            <div class="empty">
              NO PRODUCTS FOUND.
            </div>
          `;

        return;
      }


      result.innerHTML =
        matches
          .map(productCard)
          .join("");

    }
  );
}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

  if (!bag.length) {

    toast(
      "YOUR BAG IS EMPTY"
    );

    return;
  }


  closeBag();


  selectedCoupon = null;


  const overlay =
    document.getElementById(
      "checkoutOverlay"
    );

  if (overlay) {
    overlay.classList.add("open");
  }


  renderCheckout();
}


function choosePayment(payment) {

  selectedPayment =
    payment;


  const upiArea =
    document.getElementById(
      "upiArea"
    );

  const codArea =
    document.getElementById(
      "codArea"
    );


  if (upiArea) {

    upiArea.style.display =
      payment === "UPI"
        ? "block"
        : "none";

  }


  if (codArea) {

    codArea.style.display =
      payment === "COD"
        ? "block"
        : "none";

  }
}


function renderCheckout() {

  const summary =
    document.getElementById(
      "checkoutSummary"
    );


  if (!summary) return;


  const subtotal =
    bagSubtotal();

  const delivery =
    deliveryCharge();


  summary.innerHTML = `

    <div class="summary-line">

      <span>
        SUBTOTAL
      </span>

      <span>
        ${money(subtotal)}
      </span>

    </div>


    <div class="summary-line">

      <span>
        DELIVERY
      </span>

      <span>
        ${
          delivery === 0
            ? "FREE"
            : money(delivery)
        }
      </span>

    </div>


    <div class="summary-line total">

      <span>
        TOTAL
      </span>

      <strong>
        ${money(
          subtotal + delivery
        )}
      </strong>

    </div>

  `;
}


function applyCoupon() {

  const input =
    document.getElementById(
      "couponInput"
    );


  if (!input) return;


  const code =
    input.value
      .trim()
      .toUpperCase();


  const coupon =
    coupons.find(
      item =>
        item.code === code
    );


  if (!coupon) {

    toast(
      "INVALID COUPON"
    );

    return;
  }


  const subtotal =
    bagSubtotal();


  if (
    coupon.min &&
    subtotal < coupon.min
  ) {

    toast(
      `MINIMUM ORDER ${money(
        coupon.min
      )}`
    );

    return;
  }


  selectedCoupon =
    coupon;


  toast(
    "COUPON APPLIED"
  );

  renderCheckout();
}


function placeOrder() {

  const name =
    document.getElementById(
      "checkoutName"
    )?.value.trim();


  const phone =
    document.getElementById(
      "checkoutPhone"
    )?.value.trim();


  const address =
    document.getElementById(
      "checkoutAddress"
    )?.value.trim();


  const pincode =
    document.getElementById(
      "checkoutPincode"
    )?.value.trim();


  const city =
    document.getElementById(
      "checkoutCity"
    )?.value.trim();


  const state =
    document.getElementById(
      "checkoutState"
    )?.value.trim();


  if (
    !name ||
    !phone ||
    !address ||
    !pincode ||
    !city ||
    !state
  ) {

    toast(
      "PLEASE COMPLETE ALL DETAILS"
    );

    return;
  }


  if (!bag.length) {

    toast(
      "YOUR BAG IS EMPTY"
    );

    return;
  }


  const subtotal =
    bagSubtotal();


  const delivery =
    deliveryCharge();


  let discount = 0;


  if (selectedCoupon) {

    if (
      selectedCoupon.type ===
      "percent"
    ) {

      discount =
        subtotal *
        selectedCoupon.value /
        100;

    } else {

      discount =
        selectedCoupon.value;

    }

  }


  const total =
    Math.max(
      0,
      subtotal +
      delivery -
      discount
    );


  const orderNumber =
    "ZADY-" +
    (
      1001 +
      orders.length
    );


  const order = {

    id: orderNumber,

    name: name,

    phone: phone,

    address: address,

    pincode: pincode,

    city: city,

    state: state,

    payment:
      selectedPayment,

    items:
      bag.map(item => ({
        id: item.id,
        qty: item.qty,
        size: item.size,
        colour: item.colour
      })),

    subtotal: subtotal,

    delivery: delivery,

    discount: discount,

    total: total,

    status: "Pending",

    date: Date.now()

  };


  orders.push(order);

  bag = [];

  saveData();

  updateCounts();


  sendOrderWhatsApp(
    order
  );


  closeOverlay(
    "checkoutOverlay"
  );


  showOrderSuccess(
    order
  );
}


/* =========================================================
   WHATSAPP
========================================================= */

function sendOrderWhatsApp(order) {

  const items =
    order.items
      .map(item => {

        const product =
          getProduct(item.id);

        return (
          product.name +
          " x " +
          item.qty
        );

      })
      .join("\n");


  const message =

`ZADY ACCESSORIES ORDER

Order: ${order.id}

Customer:
${order.name}
${order.phone}

Address:
${order.address}
${order.city}, ${order.state}
${order.pincode}

Products:
${items}

Payment:
${order.payment}

Subtotal:
${money(order.subtotal)}

Delivery:
${
  order.delivery === 0
    ? "FREE"
    : money(order.delivery)
}

Discount:
${money(order.discount)}

Total:
${money(order.total)}

Thank you for shopping with ZADY.`;


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(
      message
    );


  window.open(
    url,
    "_blank"
  );
}


/* =========================================================
   ORDER SUCCESS
========================================================= */

function showOrderSuccess(
  order
) {

  const content =
    document.getElementById(
      "accountContent"
    );


  if (!content) return;


  content.innerHTML = `

    <div
      style="
        text-align:center;
        padding:80px 10px;
      "
    >

      <div
        style="
          font-size:60px;
          color:var(--cyan);
        "
      >
        ✓
      </div>


      <div class="kicker">
        ORDER PLACED
      </div>


      <h2 class="section-title">
        THANK <span>YOU.</span>
      </h2>


      <p
        style="
          color:#888;
          margin:20px;
        "
      >
        Your order number is

        <strong
          style="
            color:#fff;
          "
        >
          ${order.id}
        </strong>

      </p>


      <p
        style="
          color:#666;
          font-size:11px;
        "
      >
        WhatsApp has been opened
        with your order details.
      </p>


      <button
        class="btn cyan"
        style="
          margin-top:25px;
        "
        onclick="
          closeOverlay(
            'accountOverlay'
          )
        "
      >
        CONTINUE SHOPPING
      </button>

    </div>

  `;


  const overlay =
    document.getElementById(
      "accountOverlay"
    );


  if (overlay) {
    overlay.classList.add("open");
  }
}


/* =========================================================
   ACCOUNT
========================================================= */

function openAccount() {

  renderAccount();


  const overlay =
    document.getElementById(
      "accountOverlay"
    );


  if (overlay) {
    overlay.classList.add("open");
  }
}


function renderAccount() {

  const content =
    document.getElementById(
      "accountContent"
    );


  if (!content) return;


  content.innerHTML = `

    <div class="kicker">
      YOUR ZADY SPACE
    </div>


    <h2 class="section-title">
      MY <span>ACCOUNT.</span>
    </h2>


    <div class="auth">

      <p>
        Customer account demo.
      </p>


      <input
        class="input"
        id="customerName"
        placeholder="Your Name"
      >


      <input
        class="input"
        id="customerPhone"
        placeholder="Phone Number"
      >


      <button
        class="btn cyan"
        onclick="saveCustomer()"
      >
        SAVE ACCOUNT
      </button>

    </div>

  `;
}


function saveCustomer() {

  const name =
    document.getElementById(
      "customerName"
    )?.value.trim();


  const phone =
    document.getElementById(
      "customerPhone"
    )?.value.trim();


  if (!name || !phone) {

    toast(
      "ENTER NAME AND PHONE"
    );

    return;
  }


  localStorage.setItem(
    "zadyCustomer",
    JSON.stringify({
      name,
      phone
    })
  );


  toast(
    "ACCOUNT SAVED"
  );
}


/* =========================================================
   ADMIN
========================================================= */

function openAdmin() {

  const overlay =
    document.getElementById(
      "adminLoginOverlay"
    );


  if (overlay) {
    overlay.classList.add("open");
  }
}


function adminLogin() {

  const username =
    document.getElementById(
      "adminUsername"
    )?.value.trim();


  const password =
    document.getElementById(
      "adminPassword"
    )?.value;


  /*
    DEMO LOGIN

    Username:
    admin

    Password:
    zady123
  */


  if (
    username === "admin" &&
    password === "zady123"
  ) {

    closeOverlay(
      "adminLoginOverlay"
    );

    renderAdmin();

    const adminOverlay =
      document.getElementById(
        "adminOverlay"
      );

    if (adminOverlay) {
      adminOverlay.classList.add(
        "open"
      );
    }

    toast(
      "ADMIN LOGIN SUCCESS"
    );

  } else {

    toast(
      "WRONG ADMIN LOGIN"
    );
  }
}


function adminLogout() {

  closeOverlay(
    "adminOverlay"
  );

  toast(
    "ADMIN LOGGED OUT"
  );
}


function adminTab(
  tab,
  button
) {

  document
    .querySelectorAll(
      ".admin-tab"
    )
    .forEach(
      item =>
        item.classList.remove(
          "active"
        )
    );


  if (button) {
    button.classList.add(
      "active"
    );
  }


  renderAdmin(
    tab
  );
}


function renderAdmin(
  tab = "products"
) {

  const content =
    document.getElementById(
      "adminContent"
    );


  if (!content) return;


  const totalProducts =
    products.length;


  const totalOrders =
    orders.length;


  const totalReviews =
    reviews.length;


  const totalCoupons =
    coupons.length;


  const statProducts =
    document.getElementById(
      "statProducts"
    );


  const statOrders =
    document.getElementById(
      "statOrders"
    );


  const statReviews =
    document.getElementById(
      "statReviews"
    );


  const statCoupons =
    document.getElementById(
      "statCoupons"
    );


  if (statProducts) {
    statProducts.textContent =
      totalProducts;
  }


  if (statOrders) {
    statOrders.textContent =
      totalOrders;
  }


  if (statReviews) {
    statReviews.textContent =
      totalReviews;
  }


  if (statCoupons) {
    statCoupons.textContent =
      totalCoupons;
  }


  if (tab === "orders") {

    content.innerHTML =
      renderAdminOrders();

    return;
  }


  if (tab === "reviews") {

    content.innerHTML =
      renderAdminReviews();

    return;
  }


  if (tab === "coupons") {

    content.innerHTML =
      renderAdminCoupons();

    return;
  }


  content.innerHTML =
    renderAdminProducts();
}


function renderAdminProducts() {

  return `

    <h3>
      PRODUCTS
    </h3>

    <p>
      Total products:
      <strong>
        ${products.length}
      </strong>
    </p>


    <div
      style="
        display:grid;
        gap:10px;
      "
    >

      ${
        products
          .map(
            product => `

              <div
                class="bag-item"
              >

                <div>

                  <strong>
                    ${escapeHTML(
                      product.name
                    )}
                  </strong>

                  <div>
                    ${money(
                      product.price
                    )}
                  </div>

                </div>

              </div>

            `
          )
          .join("")
      }

    </div>

  `;
}


function renderAdminOrders() {

  if (!orders.length) {

    return `
      <div class="empty">
        NO ORDERS YET.
      </div>
    `;
  }


  return `

    <h3>
      ORDERS
    </h3>

    ${
      orders
        .slice()
        .reverse()
        .map(
          order => `

            <div
              class="bag-item"
              style="
                display:block;
                margin-bottom:15px;
              "
            >

              <strong>
                ${order.id}
              </strong>

              <div>
                Customer:
                ${escapeHTML(
                  order.name
                )}
              </div>

              <div>
                Phone:
                ${escapeHTML(
                  order.phone
                )}
              </div>

              <div>
                Total:
                ${money(
                  order.total
                )}
              </div>

              <div>
                Payment:
                ${order.payment}
              </div>

            </div>

          `
        )
        .join("")
    }

  `;
}


function renderAdminReviews() {

  if (!reviews.length) {

    return `
      <div class="empty">
        NO REVIEWS YET.
      </div>
    `;
  }


  return `

    <h3>
      REVIEWS
    </h3>

    ${
      reviews
        .map(
          review => `

            <div
              class="bag-item"
            >
              ${escapeHTML(
                JSON.stringify(
                  review
                )
              )}
            </div>

          `
        )
        .join("")
    }

  `;
}


function renderAdminCoupons() {

  return `

    <h3>
      COUPONS
    </h3>

    ${
      coupons
        .map(
          coupon => `

            <div
              class="bag-item"
            >

              <strong>
                ${coupon.code}
              </strong>

              <span>
                ${
                  coupon.type ===
                  "percent"
                    ? coupon.value +
                      "%"
                    : money(
                        coupon.value
                      )
                }
              </span>

            </div>

          `
        )
        .join("")
    }

  `;
}


/* =========================================================
   INSTAGRAM PLACEHOLDER
========================================================= */

function instagramPlaceholder(
  event
) {

  if (event) {
    event.preventDefault();
  }


  toast(
    "INSTAGRAM LINK WILL BE ADDED SOON"
  );
}


/* =========================================================
   QR PLACEHOLDER
========================================================= */

function createQR() {

  const qr =
    document.getElementById(
      "fakeQR"
    );


  if (!qr) return;


  qr.innerHTML = `

    <div
      style="
        padding:20px;
        text-align:center;
        border:1px solid #333;
      "
    >

      <strong>
        ZADY UPI
      </strong>

      <br><br>

      6385558452@pthdfc

    </div>

  `;
}


/* =========================================================
   DEFAULT PAYMENT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    choosePayment(
      "UPI"
    );

  }
);
