// Create a function, findAverageDogAge, that takes in an array of pet objects with age properties and returns the average age of a dog.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];

// findAverageDogAge(pets) // returns 7.5

// users.forEach(function (user) {
//   console.log(user.givenName);  //forEach are just for looping through arrays.
// })

//function method

// const ages = [5, 10];
//
// function getAvg(ages) {
//     const total = ages.reduce((acc, c) => acc + c, 0);
//     return total / ages.length;
// }
//
// const average = getAvg(ages);
// console.log(average);

// look at each object and ask "is this a dog?" if so take that value and add it to a running total, also need to find the total to divide against the running total.


// function findAverageDogAge(pets){
//     let total = 0;
//     let dogCount = 0;
    // pet.forEach((pet) => {
    //     if(pet.type === 'Dog') {
    //         total += pet.age;
    //         dogCount++;
    //
    //     }
    //
    // });
    // return total/dogCount;
//     for(let i = 0; i< pets.length; i+=1){
//         if (pets[i].type === 'Dog') {
//             total += pets[i].age;
//             dogCount++
//         }
//     }
//     return total/ dogCount;
// }
//
// console.log(findAverageDogAge(pets));


// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];

// function returnPetsWithNoFish(pets) {
//     pets.forEach((pet) => {
//         if (pet.type === 'fish') {
//             return pets.slice()
//         }
//
//     });
// }


//didn't work (filter method)
//  petsWithNoFish = pets.filter(function( pets ) {
//     return pets.type !== 'fish';
// });
//
// console.log(petsWithNoFish);

// function returnPetsWithNoFish(pets) {
//     const output = [];
//     pets.forEach(pet => {
//         if(pet.type !== 'Fish') {
//             output.push(pet);
//         }
//     });
//     return output;
// }
//
// console.log(returnPetsWithNoFish(pets));



    // [
    // {
    //     name: 'Mr. Pig',
    //     type: 'Cat',
    //     age: 4,
    // },
    //     {
    //         name: 'Bubba',
    //         type: 'Dog',
    //         age: 5
    //     },
    //     {
    //         name: 'Beans',
    //         type: 'Dog',
    //         age: 3
    //     }
    // ];

// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];

// for loop
// const returnLongestPetName = (animals) => {
//     let longestPetName = "";
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].name.length > longestPetName.length) {
//             longestPetName = animals[i].name;
//         }
//     }
//     return longestPetName;
// };

// // forEach
// const returnLongestPetName = (animals) => {
//     let longestPetName = "";
//     animals.forEach((animal) => {
//         if (animal.name.length > longestPetName.length) {
//             longestPetName = animal.name;
//         }
//     });
//     return longestPetName;
// };
//
//console.log(returnLongestPetName(pets));


// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’

//01/2/23
// function returnLastTwoChars(input) {
//         return input.slice(-2);
// }
// console.log(returnLastTwoChars('cat'));
// console.log(returnLastTwoChars('hello'));
// console.log(returnLastTwoChars('hi'));

// function returnLastTwoChars(input1, input2) {
//         if (input2 === 0) {
//            return '';
//         }
//         return input1.slice(-input2);
// }
// console.log(returnLastTwoChars('cat', 0));
// console.log(returnLastTwoChars('cat', 1));
// console.log(returnLastTwoChars('cat', 2));

//01/03/23
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’

// function iBeforeE (input){
//     let result = input.replaceAll("ei", "ie");
//     return result;
// }
//
// console.log(iBeforeE('ei')) // returns ‘ie’
// console.log(iBeforeE('height')) // returns ‘hieght’
// console.log(iBeforeE('heist')) // returns ‘hiest’
// console.log(iBeforeE('their')) // returns ‘thier’
// console.log(iBeforeE('theirtheir')) // returns ‘thierthier’

// function iBeforeE(input) {
//     let output = '';
//     for (let i = 0; i < input.length; i += 1){
//         if (input )
//     }
// }
//
// const iBeforeE = string => string.split('ei').join('ie');

// function iBeforeE(string){
//     let newString = string.replace(/ei/g, "ie");
//     return newString;
// }


//01/04/23
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// const arr = [1,2,'a','b'];
//
// const filterList = arr.filter(
//     element => typeof element === 'number'
// );
// console.log(filterList);


// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]); // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]); // returns [1,2,123]


// function filterList(input){
//     let array = []
//         for(let i=0; i < input.length; i++){
//             if(typeof input[i])
//         }
// }

// 01/09/23

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.

// function zipArrays(input1, input2) {
//     let arrayOutput = [];
//         if (input1.length === 0){
//             return [];
//         }
//         for(let i=0, i<input1.length;i+=1){
//             arrayOutput.push(input1[i]);
//             arrayOutput.push(input2[i])[]
//         }
//         return arrayOutput;
// }
//
//
// console.log(zipArrays([], [])) // returns []
// console.log(zipArrays([1], [2])) // returns [1, 2]
// console.log(zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a'), 'c', 'b', 'd']
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25])) // returns...

//01/10/23

// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.

//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
//
// function getUserCredentials(users) {
//     const credentials = [];
//     for(let i=0; i < users.length; i++){
//         const user = users[i]
//         credentials.push({ username: user.username, password: user.password});
//     }
//     return credentials;
// }
// console.log (getUserCredentials(users));



/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/
// 01/11/23

// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i+1) { //i++ was the original issue, corrected with i+1)
//     console.log("The value of i is " + i);
//     i++;
// }

//desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

// Create a function, shiftElementsOver, that takes in an array and returns the array with all elements moved one index further into the array. The final element should be moved to the front. Assume the input array will have three or more elements.

//     function shiftElementsOver(arr, places) {
//         let shiftedArray = [];
//         for (var i = 0; i < places; i++) {
//             shiftedArray.unshift(arr.pop());
//         }
//     }
//     console.log(shiftElementsOver());
//
// shiftElementsOver([1, 2, 3, 4, 5]) // returns [5, 1, 2, 3, 4]
// shiftElementsOver(['bob', 'sally', 'mary']) // returns ['mary', 'bob', 'sally']
// shiftElementsOver([null, 123, 'hello world', true]) // returns [true, null, 123, 'hello world']

//01/18/23
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }

// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }


// function goodNeighborhood(neighborhood){
//     let totalSchoolRating = 0;
//
//     for (let i = 0; i < neighborhood.schools.length; i += 1) {
//         totalSchoolRating += neighborhood.schools[i].rating;
//     }
//     return neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === 'low' && totalSchoolRating >= 24;
// }
//
// console.log(goodNeighborhood(neighborhood1)) // returns false due to school rating
// console.log(goodNeighborhood(neighborhood2)) // returns false due to crime rate
// console.log(goodNeighborhood(neighborhood3)) // returns true
// console.log(goodNeighborhood(neighborhood4)) // returns false due to median home price


01/19/2023
// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// function encodeStr (input) {
//     let inputNew = input.toLowerCase()
//     if (typeof input === 'string') {
//         inputNew.replace('a', '@');
//     }
//     if (typeof input === 'string') {
//         inputNew.replace('i', 'i');
//     }
//     if (typeof input === 'string') {
//         inputNew.replace('s', '$');
//     }
// }

// function encodeStr (input) {
//     return input
//         .replace(/a/g, "@")
//         .replace(/S/g, "$")
//         .replace(/i/g, "1");
// }

//replaceALL()

//     if(typeof input === 'i' || input === 'I'){
//         return input.replace('1');
//     }
//     if(typeof input === 's' || input === 'S'){
//         return input.replace('$')
//     }
// }

// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// console.log(encodeStr("apple")) // returns ‘@pple’
// console.log(encodeStr("codeup")) // returns ‘codeup’
// console.log(encodeStr("SASS")) // returns ‘$@$$’
// console.log(encodeStr("bike")) // returns ‘b1ke’


// 01/24/23
// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.




    const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    },
    {
        id: 3,
        str: 'codeup'
    },
    {
        id: 4,
        str: 'x'
    }
]

//     function reverseStrings(strs){
//         for(let i = 0; i < str.length; i += 1) {
//             str[i].str = strs[i].str.split('').reverse().join('');
//         }
//         return strs;
//     }
//
// reverseStrings(strs) // returns...

// function reverseStrings(strs){
//     strs.forEach(function(strObj){
//         strs.obj.str = strObj.str.split('').reverse().join('');
//     });
//     return strs;
// }
// console.log(reverseStrings(strs));



// findAverageDogAge(pets) // returns 7.5

// users.forEach(function (user) {
//   console.log(user.givenName);  //forEach are just for looping through arrays.
// })

//function method

// const ages = [5, 10];
//
// function getAvg(ages) {
//     const total = ages.reduce((acc, c) => acc + c, 0);
//     return total / ages.length;
// }
//
// const average = getAvg(ages);
// console.log(average);
    //
    // [
    // {
    //     id: 1,
    //     str: 'olleh'
    // },
    //     {
    //         id: 2,
    //         str: 'dlrow'
    //     },
    //     {
    //         id: 3,
    //         str: 'puedoc'
    //     },
    //     {
    //         id: 4,
    //         str: 'x'
    //     }
    // ]

//01/26/23

// map method

// let names = users.map(user) => {
//     return user.name;
// }


function logFood (arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`My fav food ${arr[i]}`)
    }
}
let foodArray = ['pizza', 'cheese', 'frito pie', 'BBQ'];
let newSortedArray = foodArray.sort()
logFood(newSortedArray)
