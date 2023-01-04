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


//filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]); // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]); // returns [1,2,123]


// function filterList(input){
//     let array = []
//         for(let i=0; i < input.length; i++){
//             if(typeof input[i])
//         }
// }