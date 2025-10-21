const menuToggle = document.getElementById("menuToggle");
const menuCategories = document.getElementById("menuCategories");
const menuItems = document.getElementById("menuItems");

menuToggle.addEventListener("click", () => {
  menuCategories.classList.toggle("hidden");
});

const menuData = {
  brunch: [
    { name: "Sunrise Crunch Muffin", price: "£6.95", desc: "Toasted English muffin filled with crispy chicken, beef bacon, egg, and caramelised onion." },
    { name: "Classic English Breakfast", price: "£6.95", desc: "Traditional full breakfast served with eggs, toast, sausage, and beans." },
    { name: "Morning Granola Bowl", price: "£6.50", desc: "Crunchy granola with yogurt, honey, and seasonal fruits." },
    { name: "Pancake", price: "£5.50", desc: "Soft, golden pancakes drizzled with syrup." },
    { name: "Beef Bacon & Egg Wrap", price: "£5.95", desc: "Scrambled egg, smoky beef bacon, caramelised onion, and cheese wrapped to perfection." },
  ],
  burgers: [
    { name: "Classic Beef Burger", price: "£6.95", desc: "Juicy Angus beef patty with lettuce, cheese, and special burger sauce." },
    { name: "Sweet Inferno", price: "£6.95", desc: "Crunchy chicken topped with lettuce, coleslaw and a hint of sweet chili." },
    { name: "Smoky BBQ Beef", price: "£6.95", desc: "Beef patty glazed in BBQ sauce with melted cheese and caramelised onions." },
    { name: "K. BBQ Street Burger", price: "£7.95", desc: "Korean-style Angus beef BBQ burger — tangy, saucy, bold." },
    { name: "Mexican Jalapeño Crunch", price: "£7.95", desc: "Spicy Angus beef burger with jalapeños, nacho crunch, and burger sauce." },
  ],
  wraps: [
    { name: "Classic BBQ / Mayo Chicken Wrap", price: "£5.50", desc: "Crispy chicken with lettuce, cheese and your choice of BBQ or mayo sauce wrapped in tortilla." },
  ],
  loadedFries: [
    { name: "Chicken Loaded Fries", price: "£5.95", desc: "Golden fries topped with saucy chicken and melted cheese." },
    { name: "Mexican Nacho Fiesta", price: "£6.50", desc: "Chicken tenders and fries layered with nachos and spicy sauce." },
  ],
  sides: [
    { name: "BBQ Wings (5pcs)", price: "£4.95", desc: "Tender wings glazed with smoky BBQ sauce." },
    { name: "Crispy Wings (5pcs)", price: "£4.25", desc: "Crisp-fried wings with a golden crunch." },
    { name: "Seasoned Fries", price: "£4.00", desc: "Perfectly seasoned with cajun spice." },
  ],
  drinks: {
    tea: [
      { name: "Masala Tea", price: "£3.00", desc: "Traditional spiced tea brewed to perfection." },
      { name: "Karak Tea", price: "£3.00", desc: "Rich, creamy tea with strong flavours." },
      { name: "Kashmiri Pink Tea", price: "£3.00", desc: "Fragrant pink tea with milk and pistachio." },
      { name: "Saffron Tea", price: "£3.00", desc: "Warm, aromatic tea infused with saffron." },
      { name: "House Tea", price: "£2.50", desc: "Simple, comforting black tea." },
      { name: "Elaichi Tea", price: "£3.00", desc: "Cardamom-flavored tea with a soothing aroma." },
      { name: "Boost Milk", price: "£3.75", desc: "Malted chocolate drink that recharges body and mind." },
    ],
    coffee: [
      { name: "Cappuccino", price: "£3.00", desc: "Espresso, milk, and foam — the perfect trio." },
      { name: "Americano", price: "£2.50", desc: "Smooth espresso with hot water." },
      { name: "Hot Chocolate", price: "£3.50", desc: "Rich, creamy chocolate indulgence." },
      { name: "Mocha", price: "£3.95", desc: "Espresso with chocolate and milk." },
      { name: "Espresso Shot", price: "£1.50/£2", desc: "Pure, strong coffee essence." },
    ],
  },
  specialDrinks: {
    matcha: [
      { name: "Blueberry Matcha", price: "£4.55", desc: "Fruity, fresh, lightly sweet." },
      { name: "Strawberry Matcha", price: "£4.55", desc: "Creamy strawberry notes with smooth matcha." },
      { name: "White Chocolate Matcha", price: "£4.55", desc: "Rich, velvety, indulgent." },
      { name: "Trimasu Matcha", price: "£4.55", desc: "Tiramisu-flavored matcha — soft and gentle." },
      { name: "Sweet-Heat Matcha", price: "£4.55", desc: "Subtle spice, sweet warmth." },
    ],
    latte: [
      { name: "Whipped Honey Latte", price: "£4.55", desc: "Creamy latte with honey sweetness." },
      { name: "Korean Banana Milk Latte", price: "£5.95", desc: "Smooth banana with milk and espresso." },
      { name: "Cracking Latte", price: "£4.45", desc: "Espresso with creamy milk — café classic." },
      { name: "Ube Latte", price: "£4.75", desc: "Sweet purple yam flavor — unique and smooth." },
      { name: "Spanish Iced Latte", price: "£4.95", desc: "Cold, caramelized milk with espresso." },
      { name: "Cracking / Crackle Chocolate Coffee", price: "£4.95", desc: "Rich chocolate with espresso blend." },
      { name: "Chocolate Dalgona Coffee", price: "£4.45", desc: "Fluffy whipped chocolate foam over milk." },
      { name: "The Ultimate Hot Chocolate Coffee", price: "£5.95", desc: "Deep, indulgent chocolate — extra creamy." },
    ],
  },
  shakes: [
    { name: "Avocado Bliss", price: "£5.25", desc: "A silky, creamy avocado shake." },
    { name: "Strawberry Serenade", price: "£5.25", desc: "Sweet strawberry shake, refreshing and light." },
    { name: "Cookies & Cream Obsession", price: "£5.95", desc: "Cookies fused with cream for a heavenly treat." },
    { name: "Mango Mirage", price: "£5.25", desc: "Tropical mango shake — smooth and fruity." },
  ],
  desserts: [
    { name: "Egyptian Lou’a Strawberry", price: "£12.95", desc: "Crispy kunafa with cream cheese, strawberries, pistachio sauce. Add Nutella/Biscoff £1." },
    { name: "Egyptian Lou’a Mango", price: "£13.95", desc: "Kunafa with creamy cheese and ripe mango. Add Nutella/Biscoff £1." },
  ],
  waffles: [
    { name: "Pistachio Kunafa Sandwich", price: "£8.95", desc: "Crispy waffle topped with pistachios." },
    { name: "Oreo Crunch", price: "£5.95", desc: "Waffle topped with crushed Oreo and chocolate sauce." },
    { name: "Strawberry Bloom", price: "£7.50", desc: "Fresh strawberries with creamy milk and foam." },
    { name: "Waffle Bites", price: "£6.95", desc: "Crispy bite-sized waffles — perfect for sharing." },
    { name: "Biscoff Nutella", price: "£5.50", desc: "Waffle with Nutella, Biscoff sauce, and crushed biscuits." },
    { name: "Pistachio Nutella", price: "£5.95", desc: "Nutella waffle topped with pistachio cream." },
    { name: "Oreo Nutella", price: "£5.50", desc: "Waffle layered with Nutella and crushed Oreos." },
  ],
  pancakes: [
    { name: "Biscoff Strawberry-Banana", price: "£6.95", desc: "Pancakes layered with Biscoff, banana, strawberries, and sauce." },
    { name: "Biscoff Nutella", price: "£5.50", desc: "Nutella pancakes with warm Biscoff sauce and crushed biscuits." },
    { name: "Pistachio Nutella", price: "£5.95", desc: "Pancakes with Nutella, pistachio cream, and crushed nuts." },
    { name: "Oreo Nutella", price: "£5.50", desc: "Pancakes with Nutella and crushed Oreos." },
    { name: "Kunafa Crunch Sandwich", price: "£8.95", desc: "Pancakes with pistachio kunafa and Nutella/Biscoff. Add sauce £0.50." },
  ],
  crepe: [
    { name: "Dubai Crepe Pistachio Kunafa", price: "£7.95", desc: "Sweet crepe filled with pistachio cream and kunafa." },
    { name: "Oreo Nutella", price: "£5.95", desc: "Nutella crepe with Oreo crunch." },
    { name: "Choco Berry and Banana", price: "£6.95", desc: "Chocolate crepe with banana and strawberry filling." },
    { name: "Biscoff Nutella", price: "£5.95", desc: "Rich Nutella crepe topped with Biscoff drizzle." },
  ],
};

const categoryList = [
  "brunch", "burgers", "wraps", "loadedFries", "sides", 
  "drinks", "specialDrinks", "shakes", "desserts", 
  "waffles", "pancakes", "crepe"
];

menuCategories.innerHTML = categoryList
  .map(cat => `<div class='category' onclick="showCategory('${cat}')">${cat.replace(/([A-Z])/g, ' $1')}</div>`)
  .join("");

function showCategory(category) {
  let html = `<h2>${category.replace(/([A-Z])/g, ' $1')}</h2>`;

  if (typeof menuData[category][0] === "undefined") {
    // category has subcategories
    for (let sub in menuData[category]) {
      html += `<h3 class="subcategory">${sub.toUpperCase()}</h3>`;
      menuData[category][sub].forEach(item => {
        html += `
          <div class="item">
            <h3>${item.name} — ${item.price}</h3>
            <p>${item.desc}</p>
          </div>`;
      });
    }
  } else {
    // single category
    menuData[category].forEach(item => {
      html += `
        <div class="item">
          <h3>${item.name} — ${item.price}</h3>
          <p>${item.desc}</p>
        </div>`;
    });
  }

  menuItems.innerHTML = html;
}
