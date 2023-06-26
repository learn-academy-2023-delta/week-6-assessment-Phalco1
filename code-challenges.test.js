// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe("nameCapitolizer", () => {
//   it("returns an array with a sentence about each person with their name capitalized.", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//       expect(nameCapitolizer(hitchhikersCharacters).toEqual(
//           ["Ford Prefect is a hitchhiker.", 
//           "Zaphod Beeblebrox is president of the galaxy.", 
//           "Arthur Dent is a radio employee."]))
//   })
// })


// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Declare the function to take in the array of objects.

const nameCapitolizer = (people) => {

// 2.) Create a for loop to iterate over the elements in the array.

  const sentences = [];
  for (let i = 0; i < people.length; i++) {

// 3.) We iterate over the parameter(people[i]) and use the keys of the objects to access the value(name, occupation). 

    const { name, occupation } = people[i];

// 4.) We're going to split the name by each word (' ') and delclare it a new name(nameArray). Assign name array to the ) index.

    let nameArray = name.split(' ')
    nameArray[0]

// 5.)The array is now split with the first name being the 0 index and last name being the 1 index. We'll use charAt to access the first letter of the names; toUpperCase to capitalize the strings; and the slice method at the 1 index to allow the toUppercase to only capialize the 0 index. This will be applied to the 0(first name) and the 1(last name) index.

    const fullName = `${nameArray[0].charAt(0).toUpperCase()}${nameArray[0].slice(1)} ${nameArray[1].charAt(0).toUpperCase()}${nameArray[1].slice(1)}`;

// Now we call upon our empty array and assign it to a string interpolation that has the fullName and occupation objects. Push that data into the empty array and return the array.

    const sentence = `${fullName} is ${occupation}.`;
    sentences.push(sentence);
  }
  return sentences;
}


// console.log(nameCapitolizer(hitchhikersCharacters))



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe("divBy3", () => {
//     it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
//         expect(divBy3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         expect(divBy3(hodgepodge2)).toEqual([ 2, 1, -1 ])
//       })
//     })

// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Declare a function and set a parameter.

const divBy3 = (filteredNum) => {

// 2.) Declare a new variable and assign it to an empty array. Create a for loop to iterate over the array.

    let newArr = []
    for (let i = 0; i < filteredNum.length; i++) {

// 3.) Now we take the new array and use the .push method to push the empty array 

      newArr.push(filteredNum[i] % 3)
    }
    return newArr
  }
console.log(divBy3(hodgepodge1))

// I got the logic right but I could factor in the filter method to work. So the test wont pass due to the strings. I tried different ways with no proper answer. This is the best result I came up with, so far.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.



describe("cubedNum", () => {
    it("returns the sum of all the numbers cubed.", () => {
const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
expect(cubedNum(cubeAndSum1)).toEqual(99)
        expect(cubedNum(cubeAndSum2)).toEqual(1125)
      })
    })

// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Declare a function and set the parameter

const cubedNum = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 3)
    }
    return sum
  }

// console.log(cubedNum(cubeAndSum2))

// It's not passing the test but I feel like it's good to go. It's something minor but I'm having trouble passing.