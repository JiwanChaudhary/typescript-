"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let User: Array<string | number> = ["jc", 1];
//? Tuples
//! In tuples, the order should also be same as it has declared as below, helpful in api call where the data comes in order
var User = ["jiwan", 12, true]; // this works
// let User: [string, number, boolean] = [true, 123, "jiwan"]; , this gives error as order does not match, so in tuples the order should also match
// for rgb
var rgb = [123.23, 243, 253];
// let NewUser: UserData = ["dh", 12] , this gives error
var NewUser = [12, "jiwan@jiwan.com"]; // this does not gives error
NewUser.push("1"); // this is possible but in line 10 we defined that UserData can only have length 2, but here in line 15 we are allowed to use push method which is bad behaviour of TS and can give error in the future
//? Enum
// both numerics and string, and can also be mixed of numeric and string
// numeric type enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
// here up = 0, down = 1, left = 2, right = 3
// we can not change the enum value as
var MyDirection = direction.up;
// string type enum
var SDirection;
(function (SDirection) {
    SDirection["up"] = "up";
    SDirection["down"] = "down";
    SDirection["left"] = "left";
    SDirection["right"] = "right";
})(SDirection || (SDirection = {}));
var MySDirection = SDirection.up;
var EMyMixed = 0 /* EMixed.NO */;
