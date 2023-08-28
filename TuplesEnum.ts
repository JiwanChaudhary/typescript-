// let User: Array<string | number> = ["jc", 1];
//? Tuples
//! In tuples, the order should also be same as it has declared as below, helpful in api call where the data comes in order
let User: [string, number, boolean] = ["jiwan", 12, true]; // this works
// let User: [string, number, boolean] = [true, 123, "jiwan"]; , this gives error as order does not match, so in tuples the order should also match

// for rgb
let rgb: [number, number, number] = [123.23, 243, 253];

// next example
type UserData = [number, string];

// let NewUser: UserData = ["dh", 12] , this gives error
let NewUser: UserData = [12, "jiwan@jiwan.com"]; // this does not gives error

NewUser.push("1"); // this is possible but in line 10 we defined that UserData can only have length 2, but here in line 15 we are allowed to use push method which is bad behaviour of TS and can give error in the future

//? Enum
// both numerics and string, and can also be mixed of numeric and string

// numeric type enum
enum direction {
  up,
  down,
  left,
  right,
}
// here up = 0, down = 1, left = 2, right = 3
// we can not change the enum value as

let MyDirection = direction.up;

// string type enum
enum SDirection {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

let MySDirection = SDirection.up;

// mixed enum
const enum EMixed {
  NO = 0,
  YES = "true",
}

let EMyMixed = EMixed.NO;

export {};
