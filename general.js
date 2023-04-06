"use strict";

// Task 1
/*
    Придумайте правильні змінні для:
    - імʼя користувача на сайті;
    - назва річки в Києві;
    - вік міста, в якому ви мешкаєте.
    * Мають бути рядки.
*/

let userName = "Yury";
let riverName = "Dnipro";
let cityAge = "1541";




// Task 2
// Створіть три приклади змінних — констант.

const countryName = "Ukraine"; // Рядкове значення константи.
const countryArea = 603549;  // Числове значення константи.
const gloryToUkraine = true; // Булеве значення константи.

document.querySelector(".result2").innerText = 
`Country name: ${countryName} (${typeof(countryName)})
Country area: ${countryArea} (${typeof(countryArea)})
Glory to Ukraine: ${gloryToUkraine} (${typeof(gloryToUkraine)})`;



// Task 3
// Створіть три приклади змінних, які можна переприсвоїти.

let companyName = "Google"; //Назва компанії
let employeeName; //Ім'я співробітника
let staffMember = false; //Штатний працівник (так/ні)

console.log(companyName, employeeName, staffMember); //Відображення поточних значень змінних

document.querySelector(".result3").innerText = `Company name: ${companyName}\nEmployee name: ${employeeName}\nStaff member: ${staffMember}`;

/*
    Для трьох раніше оголошених змінних
    ("companyName", "employeeName" і "staffMember"),
    ми встановлюємо нові значення
*/

companyName = "Apple";
employeeName = "Yury";
staffMember = true;

console.log(companyName, employeeName, staffMember); //Відображення нових значень змінних

document.querySelector(".result3").innerText += `\n\nCompany name: ${companyName} (new results)\nEmployee name: ${employeeName} (new results)\nStaff member: ${staffMember} (new results)`;




// Task 4

const greeting = "I'm doing homework!";
const studentName = '' //put your name here.

console.log(`${studentName}: ${greeting}`);

/*
    У разі використання зворотних лапок у рядку буде обчислено 
    вказаний вираз: (: I'm doing homework!).
*/

console.log('${studentName}: greeting');

/*
    При використанні одинарних лапок результатом буде 
    рядок: (${studentName}: greeting).
*/

console.log("${studentName}: ${greeting}");

/*
    При використанні подвійних лапок результатом буде 
    рядок: (${studentName}: ${greeting}).
*/

document.querySelector(".result4").innerText = `Result 1: ${studentName}: ${greeting}` + "\nResult 2: " + '${studentName}: greeting' + "\nResult 3: " + "${studentName}: ${greeting}";




// Task 5
/*
    !!!Kод не працюватиме, оскільки після оголошення змінної стоїть некоректний символ (let studentNumber = 100,).
    Якщо уявити, що це помилка, то результат коду буде наступним:
*/

let studentNumber = 100;
let teacherNumber = 100;

let newStudentResult = ++studentNumber;

/*
    Префіксна форма ++studentNumber збільшує studentNumber 
    та повертає нове значення 101.
*/

let newTeacherResult = teacherNumber++;

/*
    Постфіксна форма teacherNumber++ також збільшує teacherNumber, 
    але повертає попереднє значення 100.
*/

console.log(`Result 1: ${newStudentResult}\nResult 2: ${newTeacherResult}`);
document.querySelector(".result5").innerText = `Result 1: ${newStudentResult}\nResult 2: ${newTeacherResult}`;




// Task 6

const result1 = 18 + "9px" // Відповідь: "189px". Сума числа з рядком дає рядок.
const result2 = 10 - "1"; // Відповідь: 9. Під час віднімання рядок перетворюється на числове значення.
const result3 = null + 0; // Відповідь: 0. null під час додавання приводиться до нуля.
const result4 = 31 + "  -30  "; // Відповідь: "31  -30  ". Сума числа з рядком дає рядок.
const result5 = undefined + 0; // Відповідь: NaN. Помилка в обчисленнях.
const result6 = "example" ?? 0; // Відповідь: "example". Оскільки перше значення визначене.
const result7 = undefined ?? 0; // Відповідь: 0. Оскільки перше значення не визначене.
const result8 = undefined || 0; // Відповідь: 0. Оскільки перше значення операнда ≠ true.
const result9 = 0 && 1; // Відповідь: 0. Оскільки перше значення операнда = false.

console.log(
`Result 1: ${18 + "9px"} (${typeof(18 + "9px")})
Result 2: ${10 - "1"} (${typeof(10 - "1")})
Result 3: ${null + 0} (${typeof(null + 0)})
Result 4: ${31 + "  -30  "} (${typeof(31 + "  -30  ")})
Result 5: ${undefined + 0} (${typeof(undefined + 0)})
Result 6: ${"example" ?? 0} (${typeof("example" ?? 0)})
Result 7: ${undefined ?? 0} (${typeof(undefined ?? 0)})
Result 8: ${undefined || 0} (${typeof(undefined || 0)})
Result 9: ${0 && 1} (${typeof(0 && 1)})`);

document.querySelector(".result6").innerText = 
`Result 1: ${18 + "9px"} (${typeof(18 + "9px")})
Result 2: ${10 - "1"} (${typeof(10 - "1")})
Result 3: ${null + 0} (${typeof(null + 0)})
Result 4: ${31 + "  -30  "} (${typeof(31 + "  -30  ")})
Result 5: ${undefined + 0} (${typeof(undefined + 0)})
Result 6: ${"example" ?? 0} (${typeof("example" ?? 0)})
Result 7: ${undefined ?? 0} (${typeof(undefined ?? 0)})
Result 8: ${undefined || 0} (${typeof(undefined || 0)})
Result 9: ${0 && 1} (${typeof(0 && 1)})`;




// Task 7

console.log(`Result 1: ${null || true && "result" || 1}`);

/*
    null || true — Крок 1. Перше значення операнда ≠ true, отже, виконується друге.
    true && "result" — Крок 2. Перше значення операнда ≠ false, отже, виконується друге.
    "result" || 1 — Крок 3. Перше значення операнда = true, виконується перше. Перевірка завершена.
    Результат: '"result".
*/

console.log(`Result 2: ${null && 1 || "result"}`);

/*
    null || true — Крок 1. Перше значення операнда = false, отже, виконується перше.
    null || "result" — Крок 2. Перше значення операнда ≠ true, отже, виконується друге. Перевірка завершена.
    Результат: "result".
*/

document.querySelector(".result7").innerText = `Result 1: ${null || true && "result" || 1}\nResult 2: ${null && 1 || "result"}`;