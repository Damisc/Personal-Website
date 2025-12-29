// Exercise 1
// let rows  =25

// for (let row = 0; row <= rows; row++) {
//     let printVal = ""
//     for (let column = 0; column < row; column++) {
//         printVal += "*"
//     }
//     console.log(printVal)
// }


// Exercise 2
// let originalString = "What are you Doing?"
// console.log(originalString)
// let reverseString = ""

// for (let char of originalString) {
//     reverseString = char + reverseString
// }
// console.log(reverseString)



// Exercise 3
let array = ["Desmond", "fresh", "Horse", "Softener"]
let charCount = {}

console.log(array)

for (let element of array) {
    for (let character of element) {
        if (character in charCount) {
            charCount[character] += 1
        } else {
            charCount[character] = 1
        }
    }
}

console.log(charCount)