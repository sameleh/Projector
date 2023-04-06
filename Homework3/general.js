"use strict";

//Task 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map((item) => {
    const splitUserNames = item.split(" ");

    // За допомогою методів map і split створимо масиви, в яких ПІБ будуть вказані окремо.

    const preInitials = splitUserNames.reduce((accumulator, currentValue) => {
        return accumulator + currentValue[0] + "." ;
    }, '');

    /*
        За допомогою reduce перебираємо значення і виводимо тільки перший символ 
        значення і складаємо в один масив.
    */

    return preInitials;
});

initials.sort(); // Сортуємо масив за алфавітом.

console.log(`Initials: ${initials} (${Array.isArray(initials) && "array" || typeof(initials)})`);

document.querySelector(".result1").innerText = `${initials} (${Array.isArray(initials) && 'array' || typeof(initials)})`;




//Task 2

const currentMaxValue = -4589;
let reverseMaxValue = Math.sign(currentMaxValue) * parseFloat(currentMaxValue.toString().split("").reverse().join(""));

/* 
    Число > Рядок > Розбиття кожного символу на окремий елемент масиву 
    > Перевертаємо масив > Склеюємо > Переводимо знову в число
    Перевіряємо за допомогою Math.sign() чи є початкове число від'ємним (-1)
    або позитивним (1) і множимо на перевернутий варіант числа.
*/

console.log(`Reverse max value: ${reverseMaxValue} (${typeof(reverseMaxValue)})`);

document.querySelector(".result2").innerText = `${reverseMaxValue} (${typeof(reverseMaxValue)})`;




//Task 3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const flatResultsArray = resultsArray.flat(Infinity); // Перетворюємо багаторівневий масив у плоский.
productOfArray = flatResultsArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

/*
    Використовуємо метод reduce для отримання потрібного результату. Множимо перший елемент 
    масиву на другий і отримане значення на третє і так до кінця масиву.
*/

console.log(`Product of array: ${productOfArray} (${typeof(productOfArray)})`); // Результат: 24

document.querySelector(".result3").innerText = `${productOfArray} (${typeof(productOfArray)})`;