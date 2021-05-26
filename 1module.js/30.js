function getNameLength(name) {
  const quatity = name.length;
  
  const message = `Name ${name} is ${quatity} characters long`; // Change this line

  return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));
