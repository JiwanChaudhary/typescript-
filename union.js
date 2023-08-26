"use strict";
//! instead of writing type of any, it is better to use union which provides us with multiple options
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "45";
// here it means that the variable Jiwan can either be type of User or Admin
var Jiwan = {
    name: "Jiwan",
    id: 4,
};
Jiwan = { username: "Jc", id: 4 };
// this is possible as Jiwan is either User or Admin
//! function example
// the following thing is possible
function getId(id) {
    console.log("Id is: ".concat(id));
}
getId(5);
getId("li");
//! We can also do the below thing
function getNewId(id) {
    // id.toLowerCase() -> this gives an error
    // but we can do is
    if (typeof id === "string") {
        id.toLowerCase();
        // here id is of type string
    }
    else {
        id + 2;
        // here id is of type number
    }
}
getNewId(4);
getNewId("TO");
//! Array
// here array is of type number
var data1 = [1, 2, 3];
// here array is of type string
var data2 = ["1", "2", "3"];
// here array is of type either number or string or boolean and what so ever
var data3 = [1, 2, 3, "4", true];
//! we can also assign a permanent thing to the variable which cannot be changed further
var pi;
// if we try to change the value of pi, it will error
// pi = 3.145 => this gives error
var packageType;
// here the packageType cannot be anything else than these three
packageType = "normal"; // true
