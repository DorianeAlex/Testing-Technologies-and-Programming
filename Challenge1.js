// Write a function expression called reverseString(). 
//It should accept a single argument representing a person's name

// let reverseString = name => {
//     var newString = "";
//     for (var i = name.length - 1; i >= 0; i--) {
//         newString += name[i];
//     }
//     return newString;
// }

// const reverseString = str => str.split("").reverse().join("");
// console.log (reverseString("John"));
// console.log (reverseString("James"));



// // Write a function expression called reverseArray(). It should accept an array as a single argument.

// let reverseArray = array => {
//     // using the .toReversed() method combined with the .length to go through the value of the array
//     let reversedArray = array.toReversed(array.length);
//     return reversedArray;
//     }

// console.log (reverseArray([1,2,3,4,5,6]))
// console.log (reverseArray(["I", "like", "JavaScript"]))


// Write a function expression called mostExpensiveItem(). 
// It should accept an array of items as a single argument. 
// It should return the item that has the most cost tied up, calculated by the amount in stock * price.
let items = [
        { item: "irn bru", price: 3.25, stock: 50 },
        { item: "fanta", price: 3.98, stock: 45 },
        { item: "diet coke", price: 4.40, stock: 38 }, 
        { item: "7up", price: 3.99, stock: 42 }, 
     ];

let mostExpensiveItem = array => {
    let mostExpensiveItemObj = {};
    let mostExpensiveItemCost = 0;

    for (let i = 0; i < array.length; i++){
        const costTiedUpSingleItem = array[i].price * array[i].stock;

        if (costTiedUpSingleItem > mostExpensiveItemCost) {
            mostExpensiveItemCost = costTiedUpSingleItem;
            mostExpensiveItemObj = array[i];
        }
    }

    return mostExpensiveItemObj;
}

console.log(mostExpensiveItem(items))

// function mostExpensiveItem(items){
    
//      let mostExpensive = stock * price;
//      return mostExpensive;

// }

const mostExpensiveItem = (items) => {

};

const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]; 