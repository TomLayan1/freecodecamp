
let product1 = {
  item: 'basketball',
  price: 2095,
  'delivery-time': '3 days'
};

let product2 = {
  item: 'basketball',
  price: 2595,
  'delivery-time': '4 days'
};

function comparePrice(product1, product2){
  if (product1.price > product2.price){
    return product2;
  }
  else{
    return product1;
  }
}

console.log(comparePrice(product1, product2));
