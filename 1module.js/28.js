function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
switch (password) { // Change this line
    case null: // Change this line
       message = "Canceled by user!";
     // Change this line
      break;

    case ADMIN_PASSWORD: // Change this line
      message = "Welcome!";
     // Change this line
      break;

   
        
     default: 
        message = "Access denied, wrong password!";
  }
  

 
  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));