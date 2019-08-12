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

//Циклы
//for (выражение-инициализация; выражение- условие; выражение- инкремент) инструкция- тело цикла
// инициализация,т.е. присваеваем первоначальное значение переменной
// условие -если выражение истинно, то цикл будет выполняться, если ложно, то нет
// инкремент/декремент  - обновляем значение нашего счетчика
// for (;;) {} //бесконечный цикл, который не делает ничего
let i;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while (выражение) {инструкция}
let v = 10;
while (v--) {
  console.log(v);
}
// do инструкция while (выражение ) - условие проверяется после тела цикла
let l = 10;
do {
  console.log(l--);
} while (l > 0);

// ключевые слова let и const
let name2 = "Guzel ";
name2 = "Dima";

const pi = 3.14;
console.log(pi, name2);

const names = ["Guz", "Dimon"];
names.push("Art");
console.log(names);

const person = {
  name: "Art",
  age: 31
};
person.name = "Dima";

console.log(person);

if (true) {
  let a = 1;
  // оболасть видимости только этот кусочек кода
}
// a -не видна
for (var index = 0; index < 3; index++) {
  //  3 3 3, т.к. var
  setTimeout(function() {
    console.log(index);
  }, index * 100);
}
for (let index = 0; index < 3; index++) {
  //  0 1 2, т.к. let
  setTimeout(function() {
    console.log(index);
  }, index * 100);
}
// arrow-функции
function square(x) {
  return x * x;
}

const sq = x => x * x;
console.log(square(5));
console.log(sq(5));

const arr = ["1", "2", "3", "4"];
const res = arr
  .map(el => parseInt(el)) //возвращает новый массив с числами
  .filter(num => num % 2) // возвращает только нечетные числа
  .reduce((max, val) => Math.max(max, val), 0); // возвращает максимум

console.log(res);

//rest параметры
function max(...nums) {
  console.log(nums);
}

max(1, 3);
max(1, 3, 4, 3, 5);
max(1);
max();

function m(a, b, ...nums) {
  // первые два будут a и b, а все остальные пойдут в массив,
  //1)рест параметр всегда в конце, 2) возможен только один рест параметр
  console.log(nums);
}
m(1, 3, 4, 3, 5);
m(1, 3);

//spread оператор

const arr1 = [1, 2, 3, 4];
const arr2 = [9, 5, 6, 4];
const res1 = Math.max(...arr1, 2, ...arr2);
console.log(arr1, res1);

const shallowCopy = [...arr, ...arr1];
console.log(shallowCopy);

// Деструктуризация объектов

const person1 = {
  firstName: "Will",
  lastName: "Smith",
  age: 40
};
const { firstName, lastName } = person1;
console.log(firstName, lastName);
const person2 = {
  name: { first: "Wi", last: "Smi" },
  age: 40,
  role: "admin"
};
const {
  name: { first: firstName1, last: lastName1 }, // name - это путь
  role = "user" // значение по умолчанию
} = person2;
console.log(firstName1, lastName1, role);

function connect({ host = "localhost", port = 12345, user = "anonim" } = {}) {
  console.log("host:", host, "port:", port, "user:", user);
}
connect({
  host: "localhost",
  port: 1829,
  user: "Peter"
});

connect({});
connect({
  port: 1829
});

const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak"
};

const { duck, ...otherAnimals } = dict;
console.log(duck, otherAnimals);
