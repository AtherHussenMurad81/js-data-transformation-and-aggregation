const cartItems = [
  { category: "Electronics", item: "Laptop", price: 80000, quantity: 1 },
  { category: "Peripherals", item: "Mouse", price: 500, quantity: 2 },
  { category: "Peripherals", item: "Keyboard", price: 1500, quantity: 1 },
  { category: "Audio", item: "Headphone", price: 2000, quantity: 1 },
];

const bestSellingItem = cartItems.reduce((bestItem, item) => {
  const { category, price, quantity } = item;
  //   console.log(category, price, quantity);
  //   console.log("items", item[price]);
  console.log(bestItem, item);
  if (!bestItem[category]) {
    bestItem[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  bestItem[category].totalRevenue += price * quantity;
  bestItem[category].itemCount += quantity;

  return bestItem;
}, {});

console.log(bestSellingItem);
