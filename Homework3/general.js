"use strict";

//Task 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map((item) => {
    const splitUserNames = item.split(" ");

    // За допомогою методів map і split створимо масиви, в яких ПІБ будуть вказані окремо.

    splitUserNames.forEach((item, index, array) => {
        array.fill(item[0], index, (index + 1));
    });

    /*
        За допомогою методу forEach і fill опрацюємо кожен перший символ і перепишемо
        їм наступне значення в масиві.
    */
   
    return splitUserNames.join(".");

    /*
        Об'єднаємо дані в один масив із роздільником і повернемо його як значення
        для змінної initials.
    */
});

console.log(`Initials: ${initials} (${Array.isArray(initials) && "array" || typeof(initials)})`);

document.querySelector(".result1").innerText = `${initials} (${Array.isArray(initials) && 'array' || typeof(initials)})`;




//Task 2

const currentMaxValue = 4589;
let reverseMaxValue = parseFloat(currentMaxValue.toString().split("").reverse().join(""));

/* 
    Число > Рядок > Розбиття кожного символу на окремий елемент масиву > 
    > Перевертаємо масив > Склеюємо > Переводимо знову в число 
*/

console.log(`Reverse max value: ${reverseMaxValue} (${typeof(reverseMaxValue)})`);

document.querySelector(".result2").innerText = `${reverseMaxValue} (${typeof(reverseMaxValue)})`;




//Task 3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const flatResultsArray = resultsArray.flat(Infinity); // Перетворюємо багаторівневий масив у плоский.
productOfArray = flatResultsArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

/*
    Використовуємо метод reduce для отримання потрібного результату. Множимо перший елемент 
    масиву на другий і отримане значення на третє і так до кінця масиву.
*/

console.log(`Product of array: ${productOfArray} (${typeof(productOfArray)})`); // Результат: 24

document.querySelector(".result3").innerText = `${productOfArray} (${typeof(productOfArray)})`;
