const products = [
    {
    name: "Margerita",
    description:
      "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    count: 5,
    price: 100,
    category: "Dominos",
    images: [
      { path: "/images/dominos-margerita.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "topping", value: "margherita" }],
  },
  {
    name: "Farmhouse",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    count: 5,
    price: 100,
    category: "Dominos",
    images: [
      { path: "/images/dominos-farmhouse.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "topping", value: "vegetarian" }],
  },
  {
    name: "Barbecue Chicken Pizza",
    description:
      "Pepper barbecue chicken for that extra zing. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    count: 5,
    price: 100,
    category: "Dominos",
    images: [
      { path: "/images/BBQ-chicken-pizza.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "topping", value: "pepperoni" }],
  },
  {
    name: "Chicken Whopper",
    description:
      "Signature Whopper with 7 layers between the buns. Flame grilled chicken patty, fresh onion and juicy tomatoes.",
    count: 5,
    price: 100,
    category: "Burger King",
    images: [
      { path: "/images/chicken-whooper.jpg"},
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "variations", value: "cheeseburger" },
    ],
  },
  {
    name: "Crispy Chicken Burger",
    description:
      "Our Best-Selling Burger with crispy chicken patty.",
    count: 5,
    price: 100,
    category: "Burger King",
    images: [
      { path: "/images/crispy-chicken-burger.jpg"},
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "variations", value: "cheeseburger" },
    ],
  },
  {
    name: "Chicken Tandoori Burger",
    description:
      "Flame grilled tandoori chicken, mint sauce with fresh onions.",
    count: 5,
    price: 100,
    category: "Burger King",
    images: [
      { path: "/images/chicken-tandoori-burger.jpg"},
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "variations", value: "hamburger" },
    ],
  },
  {
    name: "Lazeez Bhuna Murgh",
    description:
      "Crafted in hyderabadi style, tender chicken pieces are dum-pukht with aromatic rice.",
    count: 5,
    price: 100,
    category: "Behrouz Biryani",
    images: [
      { path: "/images/biryani-lazzez-bhuna-murgh.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "style", value: "hyderabadi" },
    ],
  },
  {
    name: "Subz-E-Biryani",
    description:
      "Crafted in lucknowi style, crisp vegetables marinated in a spicier blend.",
    count: 5,
    price: 100,
    category: "Behrouz Biryani",
    images: [
      { path: "/images/biryani-Subz-e-Biryani.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "style", value: "lucknowi" },
    ],
  },
  {
    name: "Zaikedaar Paneer",
    description:
      "Soft, fresh paneer marinated with exquisite royal spices & layered with basmati.",
    count: 5,
    price: 100,
    category: "Behrouz Biryani",
    images: [
      { path: "/images/zaikedaar-paneer.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "style", value: "kolkata" },
    ],
  },
  {
    name: "Dilli Ka Butter Chicken",
    description:
      "Dilli ki aan aur shaan.",
    count: 10,
    price: 200,
    category: "Rang De Basanti Dhaba",
    images: [
      { path: "/images/butter-chicken.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "non-veg" },
    ],
  },
  {
    name: "Manchurian",
    description:
      "Maan churaye Chinese andaz mein.",
    count: 10,
    price: 200,
    category: "Rang De Basanti Dhaba",
    images: [
      { path: "/images/manchurian.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "veg" },
    ],
  },
  {
    name: "Kadhai Paneer",
    description:
      "Kadhai me bhuna hua, pyaar se bana hua. Spicy",
    count: 10,
    price: 200,
    category: "Rang De Basanti Dhaba",
    images: [
      { path: "/images/kadhai-paneer.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "veg" },
    ],
  },
  {
    name: "Barbeque chicken wings",
    description:
      "Deep fried chicken tossed with homemade chef's style barbeque sauce.",
    count: 10,
    price: 200,
    category: "China bowl",
    images: [
      { path: "/images/barbeque-chicken-wings.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "cuisine", value: "sichuan" },
    ],
  },
  {
    name: "Chicken Lollipop",
    description:
      "Maintained chicken wings crafted to lollipop deep fried to perfection served with in house sauces.",
    count: 10,
    price: 200,
    category: "China bowl",
    images: [
      { path: "/images/chicken-lollipop.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "cuisine", value: "cantonese" },
    ],
  },
  {
    name: "Veg Hakka Noodles",
    description:
      "A simple light and tasty dish of noodles tossed with assorted veggies, spices and sauces.",
    count: 10,
    price: 200,
    category: "China bowl",
    images: [
      { path: "/images/veg-hakka-noodles.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "cuisine", value: "candong" },
    ],
  },
  {
    name: "Massala Dosa",
    description:
      "Dosa with potato served seperate, accompanied with sambar and coconut chutney.",
    count: 10,
    price: 200,
    category: "Chennai Express",
    images: [
      { path: "/images/masala-dosa.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "dish" },
    ],
  },
  {
    name: "Sambar",
    description:
      "For dosas/idlis/vadas.",
    count: 10,
    price: 200,
    category: "Chennai Express",
    images: [
      { path: "/images/sambhar.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "curry" },
    ],
  },
  {
    name: "Idli",
    description:
      "Idli served with sambar and chutney.",
    count: 10,
    price: 200,
    category: "Chennai Express",
    images: [
      { path: "/images/idli.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "type", value: "snack" },
    ],
  },
  {
    name: "Chicken Steam Momo",
    description:
      "Momo stuffed with mix of soft juicy boneless chicken, onion and coriander.",
    count: 10,
    price: 200,
    category: "Wow Momo",
    images: [
      { path: "/images/chicken-steam-momo.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "filling", value: "chicken" },
    ],
  },
  {
    name: "Veg Steam Momo",
    description:
      "Momo stuffed with mix of delicious vegetables and coriander.",
    count: 10,
    price: 200,
    category: "Wow Momo",
    images: [
      { path: "/images/veg-momos.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "filling", value: "vegetable" },
    ],
  },
  {
    name: "Corn Cheese Fried Momo",
    description:
      "Filled with shredded cheese and sweet corn and mixed with the flavours of Indian masala.",
    count: 10,
    price: 200,
    category: "Wow Momo",
    images: [
      { path: "/images/corn-cheese-momo.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "filling", value: "cheese" },
    ],
  },
  {
    name: "Chocolate cheesecake",
    description:
      "Parlour like fun in a cake filled with chocolates and cookies.",
    count: 10,
    price: 200,
    category: "Kwality Walls",
    images: [
      { path: "/images/chocolate_cheesecake.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "flavour", value: "chocolate" },
    ],
  },
  {
    name: "Butterscotch",
    description:
      "Creamy butterscotch tub loaded with chunks of caramel coated cashew nuts.",
    count: 10,
    price: 200,
    category: "Kwality Walls",
    images: [
      { path: "/images/butterscotch.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "flavour", value: "butterscotch" },
    ],
  },
  {
    name: "Oreo and Cream Cup",
    description:
      "Crunchy oreo cookie chunks with rich and creamy vanilla in a cup.",
    count: 10,
    price: 200,
    category: "Kwality Walls",
    images: [
      { path: "/images/oreo-ice-cream.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "flavour", value: "vanilla" },
    ],
  },
]

module.exports = products
