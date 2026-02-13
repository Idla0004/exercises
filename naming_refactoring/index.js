let discountPercent = 0.2;

function calculatePrice(price, isPremiumMember) {
  if (isPremiumMember) {
    return price - price * discountPercent;
  }
  return price;
}

let finalPrice = calculatePrice(800, true);
console.log(finalPrice);
