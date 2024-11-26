// Sample Product Data
const products = [
    { id: 1, name: "Men's T-Shirt", category: "men", price: "$20", image: "https://via.placeholder.com/200x150" },
    { id: 2, name: "Women's Dress", category: "women", price: "$35", image: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Cap", category: "accessories", price: "$10", image: "https://via.placeholder.com/200x150" },
    { id: 4, name: "Men's Jeans", category: "men", price: "$40", image: "https://via.placeholder.com/200x150" },
    { id: 5, name: "Women's Handbag", category: "accessories", price: "$50", image: "https://via.placeholder.com/200x150" },
  ];
  
  // Cart
  let cartCount = 0;
  
  // Load Products
  const productGrid = document.getElementById("product-grid");
  
  function displayProducts(category) {
    productGrid.innerHTML = "";
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => {
      productGrid.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="addToCart()">Add to Cart</button>
        </div>
      `;
    });
  }
  
  // Add to Cart
  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }
  
  // Filter Products
  const categoryFilter = document.getElementById("category-filter");
  categoryFilter.addEventListener("change", (e) => {
    displayProducts(e.target.value);
  });
  
  // Initial Display
  displayProducts("all");
  