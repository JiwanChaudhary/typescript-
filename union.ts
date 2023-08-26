//! instead of writing type of any, it is better to use union which provides us with multiple options

let score: number | string = 33;

score = 44;
score = "45";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// here it means that the variable Jiwan can either be type of User or Admin
let Jiwan: User | Admin = {
  name: "Jiwan",
  id: 4,
};

Jiwan = { username: "Jc", id: 4 };
// this is possible as Jiwan is either User or Admin

//! function example
// the following thing is possible
function getId(id: number | string) {
  console.log(`Id is: ${id}`);
}
getId(5);
getId("li");

//! We can also do the below thing
function getNewId(id: number | string) {
  // id.toLowerCase() -> this gives an error
  // but we can do is
  if (typeof id === "string") {
    id.toLowerCase();
    // here id is of type string
  } else {
    id + 2;
    // here id is of type number
  }
}
getNewId(4);
getNewId("TO");

//! Array
// here array is of type number
let data1: Array<number> = [1, 2, 3];

// here array is of type string
let data2: Array<string> = ["1", "2", "3"];

// here array is of type either number or string or boolean and what so ever
let data3: Array<number | string | boolean> = [1, 2, 3, "4", true];

//! we can also assign a permanent thing to the variable which cannot be changed further
let pi: 3.14;
// if we try to change the value of pi, it will error
// pi = 3.145 => this gives error

let packageType: "normal" | "standard" | "premium";
// here the packageType cannot be anything else than these three
packageType = "normal"; // true
// packageType = "advance" // false, gives error

export {};
