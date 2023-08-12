// for drop down menu
function tuggleMenu() {
  const menuNav = document.querySelector('.js-menu');
  if (menuNav.style.display === 'none'){
    menuNav.style.display = 'block';
  }
  else{
    menuNav.style.display = 'none';
  }
}

// for cart quantity
let cartQuantity = '';
function addCartQuantity() {
  cartQuantity = eval(cartQuantity + 1);

  const quantity = document.querySelector('.js-cart-quantity');
  quantity.innerHTML = cartQuantity;
  // console.log(cartQuantity);
}
