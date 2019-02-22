/*
Arrays: a single variable used to store different elements, list of 
variable elements
Syntax: 
var arrayName = ["element", "element", 0, 1];
*/

//array with 4 elements, a max index number of 3
var exArray = ["run", "watch tv", "play games", "spend time with family"];
var exVar = 1;

/* How to access specific elements in my array:
arrayName[indexNum];
first element in your array = 0
second element = 1
third element = 2

IF I WANT TO ACCESS MY ELEMENT "RUN"
*/

console.log(exArray[0]);


//1. Create an array listing ingredients to your favorite recipe.  
//Name your array the recipe name. 
var pavlova = ["milk", "eggs", "flour", "sugar", "egg beaters"];
//2. Create an array listing the classes you are taking this semester.
//Name your array "SpringSem19"
var SpringSem19 = ["WebDev2", "Stem", "WorldHistory", "Algebra"];
//3. Create an array listing your favorite all time movies.
//Name your array "FaveMovies"
var FaveMovies =["Fate of the furious", "Pele", "Clash of the Titans", "Wrath of the titans"];
//4. Create an array listing any other "favorites" you have.
//Name your array the category it is.
var faveCelebs =["Neymar","Messi","Ronaldo"]
//5. Access the second element in your recipe array and print it as part of the following sentence 
//"The second ingredient to my favorite recipe is ________."
console.log("The second ingredient to my favorite recipe is," +  pavlova[1]); 
//6. Access the third element in your class list array and print it as part of the following sentence 
//"One of the classes I'm taking this semester is ________."
console.log("One of the classes I am taking this semester is" + SpringSem19[2])
//7. Access the first element in your movie list array and print it as part of the following sentence 
//"One of my favorite movies is ________."
console.log("one of my favorite movies is" + FaveMovies[0])
//8. Access the first element in your last  array and print it as part of the following sentence 
//"One of my favorite __(fill in)__ is ________."
console.log("one of my favorite celebrities is"+faveCelebs[1])
for(var i = 1; i < 10; i = i +2){
    console.log("Hi everyone I can count to " + i);
//var i = i+1;
}