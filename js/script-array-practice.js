/*
    Project: Assignment 07: Part 1, Practice with Arrays (20 points)
    Date: 11/14/23
    Author: Van Do
*/

//  STEP 1 - STRING ARRAY
console.log('Exercise 1. ---------------- STRING ARRAY, DISPLAY SECOND MOVIE');
let favoriteMovies = [
    'Forrest Gump', 
    'Good Will Hunting', 
    'Catch Me If You Can', 
    'The Pursuit of Happiness',
    'The Terminal',
];
console.log(favoriteMovies[1]);
console.log('');


//  STEP 2 - DECLARE ARRAY, FUNCTION CONSTRUCTOR METHOD
console.log('Exercise 2. ---------------- DISPLAY FIRST MOVIE IN ARRAY');
let favMovies = new Array(5);
favMovies[0] = 'Gone Baby Gone';
favMovies[1] = 'Shutter Island';
favMovies[2] = 'Fargo';
favMovies[3] = 'Gran Torino';
favMovies[4] = 'Gone Girl';
console.log(favMovies[0]);
console.log('');


//  STEP 3 - ADD A NEW M0VIE INTO THE 3RD POSITION WITHIN ARRAY
console.log('Exercise 3. ---------------- ADD A NEW M0VIE INTO THE 3RD POSITION');
favMovies.splice(2, 0, 'Silver Linings Playbook');
console.log(`Array Length: ${favMovies.length}`);
console.log('');


//  STEP 4 - DECLARE ARRAY - LITERAL NOTATION, DELETE FIRST MOVIE
console.log('Exercise 4. ---------------- DELETE FIRST MOVIE');
let goodMovies = []
goodMovies[0] = 'What\'s Eating Gilbert Grape';
goodMovies[1] = 'Saving Private Ryan';
goodMovies[2] = 'Taken';
goodMovies[3] = 'I Am Sam';
goodMovies[4] = 'Benjamin Button';
delete goodMovies[0];
console.log(goodMovies);
console.log('');


//  STEP 5 - DECLARE ARRAY - LITERAL NOTATION, FOR/IN LOOP
console.log('Exercise 5. ---------------- FOR/IN LOOP');
let movies = []
movies[0] = 'The Help';
movies[1] = 'The Green Mile';
movies[2] = 'Hidden Figures';
movies[3] = 'The Rainmaker'
movies[4] = 'Room';
movies[5] = 'One Life';
movies[6] = 'The Notebook';
for (let movie in movies) {
    console.log(movies[movie]);
}
console.log('');


//  STEP 6 -  DECLARE ARRAY - LITERAL NOTATION, FOR/OF LOOP
console.log('Exercise 6. ---------------- FOR/OF LOOP');
for (let movie of movies) {
    console.log(movie);
}
console.log('');


//  STEP 7 - DECLARE ARRAY - LITERAL NOTATION, FOR/OF LOOP, SORTED VIEW
console.log('Exercise 7. ---------------- FOR/OF LOOP, SORTED VIEW')
movies.sort();
for (let movie of movies) {
    console.log(movie); 
}
console.log('');


//  STEP 8 - leastFavMovies
console.log('Exercise 8. ---------------- POPULATE leastFavMovies ARRAY');
console.log('Movies I like:')
console.log('')
for (const movie of movies) {
    console.log(movie);
}
console.log('')

let leastFavMovies = [];
leastFavMovies[0] = 'Dark Crime';
leastFavMovies[1] = 'Compliance';
leastFavMovies[2] = 'The Exorcist';

console.log('Movies I regret watching:')
console.log('')
for (const leastFavMovie of leastFavMovies) {
    console.log(leastFavMovie);
}
console.log('');


//  STEP 9 - concat(), reverse sorted
console.log('Exercise 9. ---------------- CONCAT METHOD, REVERSE SORTED');
const moviesList = movies.concat(leastFavMovies);
moviesList.reverse();
console.log(moviesList);
console.log('');


//  STEP 10 - RETURN LAST ITEM ON LIST 
console.log('Exercise 10. ---------------- RETURN LAST ITEM');
console.log(moviesList[moviesList.length - 1]);
console.log('');


//  STEP 11 - RETURN FIRST ITEM IN ARRAY 
console.log('Exercise 11. ---------------- RETURN FIRST ITEM');
console.log(moviesList[0]);
console.log('');


//  STEP 12 - RETRIEVE INDEX OF NOT LIKED MOVIES, REPLACE WITH LIKED MOVIES
console.log('Exercise 12. ---------------- RETRIEVE INDEX OF NOT LIKED MOVIES, REPLACE WITH LIKED MOVIES');
let retrieve;
function replaceMovies() {
    for (let i = 0; i < leastFavMovies.length; i++) {
        retrieve = moviesList.findIndex( movie => movie === leastFavMovies[i])
        console.log(`index[${retrieve}]`);
    }
    moviesList.splice(retrieve, 3, 'Inception', 'The Green Mile', 'Breakfast at Tiffany\'s' )
}; 

replaceMovies();
console.log(moviesList); 
console.log('');    


//  STEP 13 - MULTI-DIMENSIONAL ARRAY WITH NAME & RANKING
console.log('Exercise 13. ---------------- MULTI-DIMENSIONAL ARRAY WITH NAME & RANKING')
let moviesRated = [
    ['One Life', 1], 
    ['Hidden Figures', 2], 
    ['The Terminal', 3], 
    ['The Green Mile', 4], 
    ['The Pursuit of Happiness', 5]
];

for (let i = 0; i < moviesRated.length; i++) {
    let movieNames = moviesRated.filter((item) => {
      return typeof item !== 'number';
    });
    console.log(movieNames[i][0]);
}
console.log('');


//  STEP 14 -  ANONYMOUS FUNCTION showEmployee. 
console.log('Exercise 14. ---------------- ANONYMOUS FUNCTION showEmployee');
let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY' ]

let showEmployee = function() {
    console.log('EMPLOYEES:');
    console.log('');
    employees.forEach((employee) => {
        console.log(employee);
    })
}
showEmployee();
console.log('');


//  STEP 15 - FUNCTION TO FILTER FALSE, NULL, 0, & BLANK VALUES
console.log('Exercise 15. ---------------- FUNCTION TO FILTER FALSE, NULL, 0, & BLANK VALUES');
let arrayTest = [58, '', 'abcd', true, null, false, 0];

function filterValues(){
    console.log(
        arrayTest
          .filter((x) => { return x !== false; })
          .filter((x) => { return x !== null; })
          .filter((x) => { return x !== ''; })
          .filter((x) => { return x !== 0; })
    )
};
filterValues();
console.log('');


//  STEP 16 - Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
console.log('Exercise 16. ---------------- FUNCTION TO GET RANDOM ITEM IN ARRAY');
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    let item = array[randomIndex];
    return item;
}
let numericArray = [1, 3, 7, 8, 11, 23, 55, 67, 101, 115];

const randomResult = getRandomItem(numericArray);
console.log(randomResult);
console.log('');

//  STEP 17 - FUNCTION TO GET LARGEST NUMBER IN NUMERIC ARRAY
console.log('Exercise 17. ---------------- FUNCTION TO GET LARGEST NUMBER IN ARRAY')
function largestElement(arr) { 
    return Math.max(...arr); 
} 
  
const result = largestElement(numericArray); 
  
console.log("The largest number in the array is: " + result);
console.log('');