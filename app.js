
//todo ============     Chapter 35 to 38  =================

//?  Q1

// function currentDate (){
//     var date = new Date();
//     console.log(date);
// }
// currentDate();

//?  Q2

// function fullName(first,last){
//     console.log("WELCOME " + first + " " + last)
// }

// fullName("Abdullah","Khamoor");

//? Q3 

// function add (a,b){
//    var val = a + b
//    console.log(val);
// }
// add(+prompt("Enter 1st digit"),+prompt("Enter 2nd digit"));

//? Q4

// function calculate(num1 , num2 ,  operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Division by zero is not allowed";
//         }
//         break;
//       default:
//         return "Invalid operator";
//     }
  
//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//   }
  
// const num1 = +prompt("Enter Num 1");
// const operator = prompt("Enter Operator");
// const num2 = +prompt("Enter Num 2");

// calculate( num1 , num2 , operator);


//?  Q5


// function square(number) {
//     return number * number;
//   }
  
//   const num = 5;
//   const result = square(num);
//   console.log(`The square of ${num}  is ${result}`);


//?  Q6

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const num = 8;
// const result = factorial(num);
// console.log(`The factorial of ${num} is ${result}`);

//? Q7

// function countNumbers(start, end) {
//   if (start > end) {
//     document.write("Start number should be less than or equal to the end number.");
//     return;
//   }

//   for (let i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }

// const startNumber = 1;
// const endNumber = 10;
// countNumbers(startNumber, endNumber);

//?  Q8

// function calculateHypotenuse(base, perpendicular) {
//   function square(num) {
//     return num * num;
//   }

//   const baseSquared = square(base);
//   const perpendicularSquared = square(perpendicular);

//   const hypotenuseSquared = baseSquared + perpendicularSquared;
//   const hypotenuse = Math.sqrt(hypotenuseSquared);

//   return hypotenuse;
// }


// const baseLength = prompt("Enter Base");
// const perpendicularLength = prompt("Enter Perpendicular");
// const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);

// console.log(`The hypotenuse of the right-angled triangle is: ${hypotenuse}`);

//?  Q9

// function calculateRectangleArea(width, height) {
//   const area = width * height;
//   return area;
// }


// const widthValue = 5;
// const heightValue = 10;
// const areaValue = calculateRectangleArea(widthValue, heightValue);
// console.log(`The area of the rectangle is: ${areaValue}`);

//? Q10

// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase();

//   const reversedStr = cleanedStr.split('').reverse().join('');

//   return cleanedStr === reversedStr;
// }

// const testString = "madam";
// if (isPalindrome(testString)) {
//   console.log(`${testString} is a palindrome.`);
// } else {
//   console.log(`${testString} is not a palindrome.`);
// }


//?  Q11


function capitalizeFirstLetter(str){

    var words = str.split(" ");
    
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let firstLetterCapital = words[i][0].toUpperCase() + words[i].slice(1)
        result += firstLetterCapital + " ";
    }
    // console.log(result);
   return result;

}
const str = 'the quick brown fox';
const capitalizedResult = capitalizeFirstLetter(str);
console.log(capitalizedResult);

//? Q12


// function findLongestWord(inputString) {
//   const words = inputString.split(' ');
 
//   let longestWord = '';

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// const inputString = 'Web Development Tutorial';
// const longestWord = findLongestWord(inputString);
// console.log(longestWord);


//? Q13

// function countOccurrences(str, letter) {
//      let count = 0;
  
 
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
  
//   const sampleString = 'JSResourceS.com';
//   const letterToCount = 'o';
  
//   const result = countOccurrences(sampleString, letterToCount);
//   console.log(`The letter '${letterToCount}' occurs ${result} times in the string.`);


//?  Q14

// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference}`);
//   }
  
//   function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area}`);
//   }
  
//   const radius = 5; 
//   calcCircumference(radius);
//   calcArea(radius);

