"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let User: Array<string | number> = ["jc", 1];
//! In tuples, the order should also be same as it has declared as below, helpful in api call where the data comes in order
var User = ["jiwan", 12, true]; // this works
// let User: [string, number, boolean] = [true, 123, "jiwan"]; , this gives error as order does not match, so in tuples the order should also match
// for rgb
var rgb = [123.23, 243, 253];
// let NewUser: UserData = ["dh", 12] , this gives error
var NewUser = [12, "jiwan@jiwan.com"]; // this does not gives error
NewUser.push("1"); // this is possible but in line 10 we defined that UserData can only have length 2, but here in line 15 we are allowed to use push method which is bad behaviour of TS and can give error in the future
