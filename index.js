//Условные инструкции

let n = 5;
if (n > 3) {
  console.log(n);
}

if (n < 3) {
  console.log(n);
} else {
  console.log("не n");
}

// let name = "Gulnara",
//   sity;
// if (name === "Guzel") {
//   sity = "Moscow";
// }
// if (name === "Gulnara") {
//   sity = "Blag";
// }
// console.log(sity);
let name = "Guzel",
  sity;
switch (name) {
  // выражение: инструкции
  case "Guzel":
    sity = "Moscow";
    break;
  case "Gulnara":
    sity = "Blag";
    break;
  default:
    sity = "Ufa";
}
console.log(sity);

//Условный оператор
