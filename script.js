// ways to proceed an output

//?Browser
// window.alert('Hello JS');//have priorty

//?in HTML element
document.getElementById('demo').innerHTML ="Hello JS"

//?in Console
console.log('hello console')


//variables
//@ is container to store some value with name

//variable name
var userAge = 23;
var $userAge = 23;//true
var _userAge = 23;//true
var userComment = "good morning";//true
// var 3userAge = 23;//false
// var user Age = 23;//false
// var @userAge = 23;//false
// var var = 23;//false


//datatypes
/*$ 

loosly typed & dynamic typed

loosly typed => didn't define var type before declare it
dynamic typed => i can change data type while run type


Primitive Datatypes
-- Number(10,25.5,0.343)
-- String("",'')->any thing inside them
-- Boolean(true,false)
-- Undefind(var without value)
-- Null (structural root)
-- NaN (special number)

ESC6
--bigInt
--symbol

Structural Datatypes(non primtive)
-- Object
-- Function 

*/


// var personAge = 25;
var personAge = 25.5;
console.log(typeof(personAge));

var personName = "asmaa";
// var personName = "1234";
console.log(typeof(personName));

var isAdmin = false;
console.log(typeof(isAdmin));

var productPrice;
console.log(typeof(productPrice));//undefind

var x = null;
console.log(typeof(x));//object

var lis = [1,2,56,3];
console.log(typeof(lis));//object

var obj = {usname: "asmaa", age: 34};
console.log(typeof(obj));//object



//concatination operator => "+" (between strings||one string and other data types)

var y = "asmaa"+"bahr";
console.log(y);

var z = "5"+5;
console.log(z)//55 string

var a = 5+5+5+"5";
console.log(a)//155 string

var b = "5"+5+5+5;
console.log(b)//5555 string


//implicit conversion
//any math operator unless (+) if they applied on string(number) it will convert it into number then operate function of operator

var c = "5"*"5";
console.log(c);//25 number



//prompt
//?take data from user
/*window.prompt("Enter your user name");*/

//i can recive this input by adding prompt into var
//------------------------------------
// var prom = window.prompt("Enter your user name");
// console.log(prom);
//------------------------------------

//program that takes 2 number from user, return its addition
//------------------------------------
// var num1 = prompt("enter first number");
// var num2 = prompt("enter second number");
// var result = num1 + num2;

//window.alert(result);//it will concat the 2 numbers won't adding them
//>prompt deal with any input to it as string so when adding it will concat
//------------------------------------

//Use method -->Number() >convert string or any type into number

//-----------------------------------
// var n1 = Number(prompt("enter first number"));
// var n2 = Number(prompt("enter second number"));
// var res =n1 + n2;

// window.alert(res);
//------------------------------------

var t = Number(true);
console.log(t);//1

var t = Number(false);
console.log(t);//0

var t = Number("");
console.log(t);//0

var t = Number("as");
console.log(t);//NaN => not a number =>if string is n't a number

var t = Number("as");
console.log(typeof(t));//number

console.log(typeof(NaN));//NUMBER

