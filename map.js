  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums){
  results.push(num*2);
}

console.log(results)

// Using map()

const multiplyByTwo = function (num){
  return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);


// Simplified w/ map()

const mapResults2 = nums.map(function(num) {return num * 2});
console.log(mapResults2);

// Simplfied w/ map() + arrow function

const mapResults3 = nums.map(num => num * 2);
console.log(mapResults3);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithIds1 = students.map(i => [i.name, i.id]);
console.log('array in an array', studentWithIds1)

const studentWithIds = students.map(i => ({name: i.name, id: i.id}));
console.log('object in array', studentWithIds)
