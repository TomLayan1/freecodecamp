    // NOTE: open console to see result

    // Javascript variables
  
    // global variables
    let cartQuantity = 0;
    let showQuantity = 0;

    // function is called when each quantity button is clicked
    function pickQuantity(number){
      cartQuantity = eval(cartQuantity + number);
      if (number === 0){
        cartQuantity = 0;
        console.log('Cart quantity reset.');
      }
      console.log(`Cart quantity: ${cartQuantity}`);
    }

    // the function is called when the show quantity button is clicked 
    function showCartQuantity(){
      let showQuantity = cartQuantity;
      console.log(`Cart quantity: ${cartQuantity}`);
    }