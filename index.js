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

let name = "Gulnara",
  sity;
if (name === "Guzel") {
  sity = "Moscow";
}
if (name === "Gulnara") {
  sity = "Blag";
}
console.log(sity);

let name1 = "Guzel",
  sity1;
switch (name1) {
  // выражение: инструкции
  case "Guzel":
    sity1 = "Moscow";
    break;
  case "Gulnara":
    sity1 = "Blag";
    break;
  default:
    sity1 = "Ufa";
}
console.log(sity1);

//Условный оператор
// выражение1 ? выражение2 : выражение3
let x = 15;
let text = x > 10 ? "x больше 10 " : "x меньше или равно 10";
console.log(text);
