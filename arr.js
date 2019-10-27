// функция, которая принимает на вход массив и возвращает новый массив,
// полученный из исходного удалением повторяющихся элементов.
//Взаимный порядок оставшихся элементов в новом массиве должен сохраняться.

export const uniq = arr => {
  const uniq2 = arr.filter(
    (currentValue, index, arr) => arr.indexOf(currentValue) === index
  );
  console.log(uniq2);

  return uniq2;
};

uniq([2, 1, 2, 3]); // [2, 1, 3]
