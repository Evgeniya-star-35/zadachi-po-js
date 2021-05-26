function getShippingCost(country) {
  let message;
  let price;
   
  // Change code below this line
switch (country) { // Change this line
    case "China": // Change this line
     price = 100;
     message = `Shipping to ${country} will cost ${price} credits`;
     // Change this line
      break;

    case "Chile": // Change this line
    price = 250;
  
      message = `Shipping to ${country} will cost ${price} credits`;
     // Change this line
      break;

   case "Australia": // Change this line
    price = 170;
  
      message = `Shipping to ${country} will cost ${price} credits`;
     // Change this line
      break;
    
    case "Jamaica": // Change this line
    price = 120;
  
      message = `Shipping to ${country} will cost ${price} credits`;
     // Change this line
      break;
        
     default: 
        message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
 
 