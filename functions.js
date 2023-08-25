"use strict";
// in case of function we must decalare the type, so that we might not run in the error in the future
Object.defineProperty(exports, "__esModule", { value: true });
// function to add two numbers
function addTwo(num) {
    return num + 2;
    // return "hello";
}
// function that changes string to upper case
function toUpper(val) {
    return val.toUpperCase();
}
// function for user signup
function signUpUser(name, email, isAdmin) { }
// login user
// here either we provide the boolean value for isAdmin or it takes the default value which be declared in the way below of isAdmin variable
var loginUser = function (name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
};
addTwo(5);
toUpper("Jiwan");
signUpUser("jiwan", "jiwan@gmail.com", true);
loginUser("j", "j@j.com");
// another function
// the following case can happen
// function getValue(val: number) {
//   if (val > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = [1, 2, 3];
// const heros = ["thor", "hulk", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(heros);
    //   this function must return an string
    // return 1, will give error
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1;, this will give error as function is of type void which means that this function doesnot returns anything
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
