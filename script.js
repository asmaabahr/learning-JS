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