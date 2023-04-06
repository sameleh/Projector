"use strict";

//Task 1

let randomString = ""; // Призначаємо строкову змінну з порожнім рядком.
let finalResult; // У цю змінну передамо фінальний результат.
const maxValue = 6; // Максимальне значення символів.

while (randomString.length < maxValue) { 
    
    // Запускаємо цикл, який відбуватиметься доти, доки довжина рядка не становитиме 6.
    
    randomString += Math.floor(Math.random() * 10) + 1;
    
    /*
        Використовуємо метод random і множимо на ту кількість, у межах якої нам потрібен результат.
        Отримуємо дробові значення, які за допомогою методу floor округляємо в менший бік. 
        Інтрервал має значення від 0 до 9. Щоб інтервал був у межах від 1 до 10, додаємо 1.

        Отримане значення об'єднуємо з початковим значенням (порожнім рядком), у результаті отримаємо 
        нове значення рядка. Дія відбувається доти, доки довжина рядка не стане рівною 6 символам.
    */
}

if (randomString.length > maxValue) {
    finalResult = randomString.slice(0, 6);
} else {
    finalResult = randomString;
}

/*
    Іноді останнє додане значення може бути двозначним (10), для таких випадків ми обрізаємо 
    рядок і відразу перезаписуємо попередній.
*/

console.log(`Final result: ${finalResult} (${typeof(finalResult)})`);
document.querySelector(".result1").innerText = `${finalResult} (${typeof(finalResult)})`;