    // Javascript variables
  
    // 
    function pickQuantity(number){
      let cartQuantity = 0;

      cartQuantity += number;
      if (number === 0){
        cartQuantity = 0;
        console.log('Cart quantity reset.');
      }
      else(number === 'quantity'){
        cartQuantity = cartQuantity;
      }
      console.log(`Cart quantity: ${cartQuantity}`);
    }