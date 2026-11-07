const phoneNumber = "212657709922";
const currency = new Intl.NumberFormat("en-MA", { maximumFractionDigits: 0 });

const fillings = [
  "Brochettes de poulet", "Brochettes de dinde", "Brochettes hachées", "Saucisse",
  "Saucisse de foie", "Saucisse fromage", "Saucisse mixte", "Foie", "Coeur", "Nuggets",
  "Cordon bleu", "Mixte"
];

const makeProducts = (category, items, image, imageAlt) => {
  const categoryId = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return items.map((item, index) => ({
    id: `${categoryId}-${index + 1}`,
    category,
    image,
    imageAlt,
    ...item
  }));
};

const fillingProducts = (category, price, image, imageAlt) => makeProducts(
  category,
  fillings.map((name) => ({ name, price, description: `${category} · ${name.toLowerCase()}` })),
  image,
  imageAlt
);

const pizzaFlavours = [
  { name: "Margarita", small: 20, large: 30 },
  { name: "Végétarienne", small: 25, large: 30 },
  { name: "Poulet", small: 28, large: 38 },
  { name: "Saucisse viande hachée", small: 28, large: 38 },
  { name: "Kebab", small: 28, large: 38 },
  { name: "Thon", small: 28, large: 38 },
  { name: "Charcuterie", small: 28, large: 38 },
  { name: "Pepperoni", small: 35, large: 45 },
  { name: "Quatre saisons", small: 33, large: 48 },
  { name: "Quatre fromages", small: 33, large: 48 },
  { name: "Pizza mixte", small: 33, large: 48 }
];

const menuItems = [
  ...fillingProducts("Ciabatta", 28, "photo-1553909489-cd47e0ef937f", "Ciabatta sandwich with grilled filling"),
  ...fillingProducts("Plats", 40, "photo-1547592180-85f173990554", "Grilled platter with sides"),
  ...fillingProducts("Tacos gratiné", 40, "photo-1626700051175-6818013e1d4f", "Gratinated stuffed tacos"),
  ...fillingProducts("Tacos", 33, "photo-1626700051175-6818013e1d4f", "Tacos with a grilled filling"),
  ...makeProducts("Chicken Ouihrani", [{ name: "Chicken Ouihrani", price: 43, description: "Chicken, fries and salad" }], "photo-1606755962773-d324e0a13086", "Chicken, fries and salad"),
  ...makeProducts("Tacos", [{ name: "Double Tacos", price: 45, description: "Double-filled tacos" }], "photo-1626700051175-6818013e1d4f", "Double stuffed tacos"),
  ...makeProducts("Burgers", [
    { name: "Viande hachée", price: 25, description: "Beef burger" },
    { name: "Chicken", price: 25, description: "Chicken burger" },
    { name: "Double cheese", price: 35, description: "Double cheeseburger" }
  ], "photo-1568901346375-23c9450c58cd", "Burgers from the Ouhrani menu"),
  ...makeProducts("Shawarma", [
    { name: "Normal + frites", price: 25, description: "Shawarma wrap with fries" },
    { name: "Extra + frites", price: 33, description: "Extra shawarma with fries" },
    { name: "Plat + frite", price: 40, description: "Shawarma plate with fries" }
  ], "photo-1529006557810-274b9b2fc783", "Shawarma with fries"),
  ...makeProducts("Salades", [
    { name: "Salade mixte", price: 15, description: "Mixed salad" },
    { name: "Salade Romana", price: 18, description: "Romana salad" },
    { name: "Salade Ouhrani", price: 25, description: "Ouhrani house salad" }
  ], "photo-1512621776951-a57141f2eefd", "Fresh mixed salad"),
  ...makeProducts("Pasticcio", [
    { name: "Viande hachée", price: 30, description: "Ground beef pasticcio" },
    { name: "Poulet", price: 30, description: "Chicken pasticcio" },
    { name: "Dinde", price: 30, description: "Turkey pasticcio" },
    { name: "Saucisse", price: 30, description: "Sausage pasticcio" },
    { name: "Charcuterie", price: 30, description: "Charcuterie pasticcio" },
    { name: "Mixte", price: 35, description: "Mixed pasticcio" },
    { name: "Saucisse de foie", price: 35, description: "Liver sausage pasticcio" },
    { name: "Nuggets", price: 35, description: "Chicken nugget pasticcio" }
  ], "photo-1476224203421-9ac39bcb3327", "Baked pasticcio"),
  ...makeProducts("Suppléments", [
    { name: "Charcuterie", price: 5, description: "Charcuterie topping" },
    { name: "Chicken · 2 pièces", price: 15, description: "Two chicken pieces" },
    { name: "Poulet · 100 g", price: 10, description: "100 g chicken" },
    { name: "Nuggets · 5 pièces", price: 15, description: "Five chicken nuggets" },
    { name: "Nuggets · 7 pièces", price: 20, description: "Seven chicken nuggets" },
    { name: "Fromage", price: 5, description: "Cheese topping" }
  ], "photo-1562967914-608f82629710", "Crispy chicken pieces"),
  ...makeProducts("Les pâtes", [
    { name: "Viande hachée", price: 30, description: "Pasta with ground beef" },
    { name: "Poulet", price: 30, description: "Pasta with chicken" },
    { name: "Dinde", price: 30, description: "Pasta with turkey" },
    { name: "Saucisse", price: 30, description: "Pasta with sausage" },
    { name: "Charcuterie", price: 30, description: "Pasta with charcuterie" },
    { name: "Mixte", price: 35, description: "Mixed pasta" },
    { name: "Saucisse de foie", price: 35, description: "Pasta with liver sausage" },
    { name: "Nuggets", price: 35, description: "Pasta with chicken nuggets" }
  ], "photo-1473093295043-cdd812d0e601", "Pasta with sauce and herbs"),
  ...makeProducts("Pizza", pizzaFlavours.flatMap((pizza) => [
    { name: `${pizza.name} · P`, price: pizza.small, description: "Petite pizza" },
    { name: `${pizza.name} · G`, price: pizza.large, description: "Grande pizza" }
  ]), "photo-1513104890138-7c749659a591", "Freshly baked pizza"),
  ...makeProducts("Boissons", [
    { name: "Eau", price: 4, description: "Bottled water" },
    { name: "Coca-Cola", price: 5, description: "Coca-Cola · 330 ml" },
    { name: "Sprite", price: 5, description: "Sprite · 330 ml" },
    { name: "Pepsi", price: 5, description: "Pepsi · 330 ml" },
    { name: "Fanta Orange", price: 5, description: "Fanta Orange · 330 ml" }
  ], "photo-1513558161293-cdaf765edfd7", "Cold drinks"),
  ...makeProducts("Frite", [{ name: "Frite", price: 7, description: "Portion of fries" }], "photo-1573080496219-bb080dd4f877", "Golden fries")
];

const selectedItems = new Map();
const selectedQuantities = new Map(menuItems.map((item) => [item.id, 1]));
const menuGrid = document.querySelector("#menu-grid");
const orderListElement = document.querySelector(".order-items");
const orderEmpty = document.querySelector(".order-empty");
const sendOrderButton = document.querySelector(".send-order");
const toast = document.querySelector(".toast");
let activeCategory = "All";
let toastTimer;

function formatPrice(price) {
  return `${currency.format(price)} DH`;
}

function imageUrl(image, width = 620) {
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=78`;
}

function renderMenu() {
  const visibleItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  menuGrid.innerHTML = visibleItems.map((item, index) => `
    <article class="menu-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="menu-card-image">
        <img src="${imageUrl(item.image)}" alt="${item.imageAlt}" loading="lazy" />
        <span class="menu-card-category">${item.category}</span>
      </div>
      <div class="menu-card-content">
        <div class="menu-card-title-row"><h3>${item.name}</h3><span class="menu-price">${formatPrice(item.price)}</span></div>
        <p class="menu-card-description">${item.description}</p>
        <div class="menu-card-actions">
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-quantity="minus" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button>
            <output>${selectedQuantities.get(item.id)}</output>
            <button type="button" data-quantity="plus" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
          <button class="add-button" type="button" data-add="${item.id}">Add to order <span aria-hidden="true">+</span></button>
        </div>
      </div>
    </article>
  `).join("");
}

function updateOrderSummary() {
  const entries = [...selectedItems.values()];
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.querySelector(".order-total strong").textContent = formatPrice(total);
  orderEmpty.hidden = entries.length > 0;
  sendOrderButton.disabled = entries.length === 0;
  orderListElement.innerHTML = entries.map((item) => `
    <article class="order-line">
      <img src="${imageUrl(item.image, 180)}" alt="" />
      <div class="order-line-info">
        <h3>${item.name}</h3><span class="order-line-price">${formatPrice(item.price)} each</span>
        <div class="order-line-controls">
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-order-quantity="minus" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button>
            <output>${item.quantity}</output>
            <button type="button" data-order-quantity="plus" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
          <button class="remove-item" type="button" data-remove="${item.id}">Remove</button>
        </div>
      </div>
      <span class="order-line-subtotal">${formatPrice(item.price * item.quantity)}</span>
    </article>
  `).join("");
}

function changeSelectedQuantity(id, direction) {
  const next = Math.max(1, (selectedQuantities.get(id) || 1) + direction);
  selectedQuantities.set(id, next);
  const output = menuGrid.querySelector(`[data-id="${id}"][data-quantity="plus"]`)?.parentElement.querySelector("output");
  if (output) output.textContent = next;
}

function changeOrderQuantity(id, direction) {
  const item = selectedItems.get(id);
  if (!item) return;
  item.quantity += direction;
  if (item.quantity <= 0) selectedItems.delete(id);
  updateOrderSummary();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function sendOrder() {
  const items = [...selectedItems.values()];
  if (!items.length) return;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = items.map((item) => {
    const subtotal = item.price * item.quantity;
    return `${item.name} x ${item.quantity} - ${formatPrice(item.price)} each = ${formatPrice(subtotal)}`;
  });
  const message = [
    "Hello! I'd like to place an order.",
    "",
    ...lines,
    "",
    "----------------------",
    `Total: ${formatPrice(total)}`,
    "",
    "Thank you!"
  ].join("\n");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

menuGrid.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    changeSelectedQuantity(quantityButton.dataset.id, quantityButton.dataset.quantity === "plus" ? 1 : -1);
    return;
  }
  const addButton = event.target.closest("[data-add]");
  if (!addButton) return;
  const item = menuItems.find((menuItem) => menuItem.id === addButton.dataset.add);
  const quantity = selectedQuantities.get(item.id) || 1;
  const existing = selectedItems.get(item.id);
  selectedItems.set(item.id, { ...item, quantity: quantity + (existing?.quantity || 0) });
  updateOrderSummary();
  selectedQuantities.set(item.id, 1);
  const output = addButton.closest(".menu-card").querySelector(".quantity-control output");
  output.textContent = "1";
  showToast(`${item.name} added to your order`);
});

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
  renderMenu();
});

orderListElement.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-order-quantity]");
  if (quantityButton) {
    changeOrderQuantity(quantityButton.dataset.id, quantityButton.dataset.orderQuantity === "plus" ? 1 : -1);
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    selectedItems.delete(removeButton.dataset.remove);
    updateOrderSummary();
  }
});

document.querySelector(".send-order").addEventListener("click", sendOrder);
document.querySelector(".floating-whatsapp").addEventListener("click", () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank", "noopener,noreferrer");
});

document.querySelector(".mobile-menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector(".main-nav");
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !isOpen);
});
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("is-open");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-label", "Open navigation");
  });
});
renderMenu();
updateOrderSummary();
