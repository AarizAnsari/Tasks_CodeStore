//Use of Var Keyword
var a = 10;
//var variables are declared globally
//var variables can be re declared
var a = 20;

//var variables can be over written
a = 30; 
//value of a will be 30 in this case
console.log(a);
//Use of Let Keyword
let b = 10;
//let keyword is declared at the block level
{
    let b = 20;
    //the value of b will be 20 in this block but 10 outside it
}
console.log(b);
//let variables can br over written but can't 
// be re declared within the same block

//Use of const Keyword
// Const keyword is used to declare constant values 
//const variables can neither be re declared nor over written
//const keywords must be initialised at the time of declaration

const author = "Aariz";
console.log(author);