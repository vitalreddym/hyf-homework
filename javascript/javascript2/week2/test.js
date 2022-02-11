// Map and Filter using arrow function
// Double the odd numbers in an array and throws away the even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNumbers = numbers.filter(num => num % 2 !== 0)
    .map(odd => odd * 2);

console.log("The doubled numbers are", oddNumbers);