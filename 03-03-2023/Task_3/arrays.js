
//A SIMPLE JAVASCRIPT ARRAU
const fruits = ["Banana", "Orange", "Apple", "Mango"];


//POP FUNCTION POPS THE LAST ELEMENT OF THE ARRAY
console.log(fruits.pop());
console.log(fruits);

//PUSH FUNCTION PUSHES THE VALUE AT THE LAST INDEX OF ARRAY
fruits.push('Mango');
console.log(fruits);

//SHIFT FUNCTION REMOVES THE FIRST ELEMENT OF THE ARRAY
//IT SHIFTS THE REST ELEMENTS FORWARD
fruits.shift();
console.log(fruits);

//UNSHIFT FUNCTION INSERTS THE ELEMENT AT THE FIRST POSITION OF ARRAY
fruits.unshift("Lemon");
console.log(fruits);

//LENGTH FUNCTION RETURNS THE LENGTH OF THE ARRAY
console.log(fruits.length);

//DELETE FUNCTION DELETES THE ELEMENT AT THE DESIRED INDEX
//IT CREATES AN UNDEFINED VOID AT THE INDEX WHERE THE ELEMENT IS REMOVED
delete fruits[2];
console.log(fruits);

//CONCAT FUNCTION JOINS TWO ARRAYS INTO A NEW ARRAY
const vegetables = ["Brinjal", "Carrot"];
const new_array = fruits.concat(vegetables);
console.log(new_array);

//SPLICE METHOD CAN BE USED TO EITHER DELETE OR ADD ELEMENTS TO THE ARRAY
fruits.splice(2, 2, "Lemon", "Kiwi"); //ADDING ELEMENTS
fruits.splice(0, 2);  //REMOVING ELEMENTS
console.log(fruits);

//SLICE METHOD IS USED TO SLICE THE ARRAY INTO THE SUBARRAY
const SLICED_ARRAY = fruits.slice(1);
console.log(fruits);

//SORT FUNCTION SORTS THE ARRAY ALPHABETICALLY
fruits.sort();
console.log(fruits);

//REVERSE FUNCTION IS USED TO REVERSE THE ARRAY
fruits.reverse();
console.log(fruits);

//FOREACH IS USED TO ITERATE EVERY ARRAY ELEMENT
const numbers = [4, 5, 32, 7, 2];

numbers.forEach(
    function (value, index) {
        numbers[index] = value + value;
    }
);

console.log(numbers);

//MAP FUNCTION IS USED TO MAP THE VALUE OF EACH ARRAY ELEMENT TO THE NEW ARRAY
const squares = numbers.map(
    function (value) {
        return value * value;
    }
);

console.log(squares);

//FILTER FUNCTION ONLY PASSES THE ELEMENTS TO THE NEW ARRAY 
//WHICH PASSES THE APPLIED CONDITION
const over18 = numbers.filter(
    function (value) {
        return value > 18;
    }
);
console.log(over18);

//REDUCE FUNCTION REDUCES THE WHOLE ARRAY INTO A SINGLE VALUE
const sum = numbers.reduce(
    function (total, value) {
        return total + value;
    }
);
console.log(sum);

//EVERY METHOD CHECKS WETHER EVERY ARRAY ELEMET FOLLOWS A CONDITION
const positive = numbers.every(
    function (value) {
        return value > 0;
    }
);
console.log(positive);

//SOME METHOD CHECKS WETHER SOME ARRAY ELEMETS FOLLOWS A CONDITION
const over10 = numbers.every(
    function (value) {
        return value > 10;
    }
);
console.log(over10);

//INDEXOF METHOD RETURNS THE INDEX OF THE GIVEN VALUE IN THE ARRAY
//IT RETURNS THE FIRST INDEX AT WITCH THE ELEMENT IS FOUND
//IT RETURNS -1 IF THE ELEMENT IS NOT FOUND IN THE ARRAY
const position = fruits.indexOf("Mango");
console.log(position);

//LASTINDEXOF METHOD RETURNS THE LAST INDEX AT WHICH THE ELEMENT IS PRESENT
const last_position = fruits.lastIndexOf("Mango");
console.log(last_position);

//ARRAY.FROM METHOD CONVERTS A DATATYPE OBJECT WITH LENGTH TO AN ARRAY
const from_array = Array.from("ABCDEF");
console.log(from_array);

//****************************************************************************************************************************************************************************/

//JAVASCRIPT OBJECTS

//A SINGLE JS OBJECT CAN BE CREATED AS FOLLOWS
const resident = {
    name: 'john',
    age: 26
}

//TO CREATE MULTIPLE OBJECTS OF SAME TYPE A CLASS AND CONSTRUCTOR IS USED

class person {
    //CREATING THE CONSTRUCTOR USING CONSTRUCTOR KEYWORD
    constructor(name, age) {

        //this keyword refers to the variable to be global variable
        this.name = name;
        this.age = age;
    }
}

//CREATING MULTIPLE OBJECTS USING THE CONSTRUCTOR
const person1 = new person('Adam', 42);
const person2 = new person('Mike', 23);
const person3 = new person('Any', 13);

//ACCESSING AN OBJECT PROPERTY VALUE
console.log(person2.name);

//OBJECT VALUES CAN BE OVERWRITTEN
person2.name = 'Harry';
console.log(person2.name);

//CREATING ARRAY OF OBJECTS
const object_array = [person1, person2, person3];

//SORTING ARRAY OBJECTS BASED ON AGE
object_array.sort(
    function (a, b) {
        return a.age - b.age;
    }
);

//DELETE METHOD IS USED TO DELETE A PROPERTY OF AN OBJECT
delete person3.age;

//NESTED OBJECTS

const information = {
    personal: {
        name: 'Mike',
        marital_status: false
    },
    professional: {
        Qualification: 'Post Graduate',
        Experience: 10
    }
}
//THE OBJECT "INFORMATION" HAVE TWO OBJECTS INSIDE IT

//OBJECT.VALUES AND OBJECT.KEYS METHODS ARE USED TO GET DATA FROM AN OBJECT
console.log(Object.values(person1));
console.log(Object.keys(person1));

//JSON.STRINGIFY IS USED TO CONVERT THE WHOLE OBJECT INTO THE STRING
console.log(JSON.stringify(person3));