let discount = 0.2;
let price = 800;

function withDiscount(fullPrice, membersDiscount) {
  if (membersDiscount) {
    return fullPrice - fullPrice * discount;
  }
  return fullPrice;
}

let totalPrice = withDiscount(price, true);
console.log(totalPrice);
