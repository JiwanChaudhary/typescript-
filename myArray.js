"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superHeros = [];
// this means superHeros is a array of string, te array can also be defined as follow
//! const superHeros: string[] = [];
// this is also a way to define array
superHeros.push("hulk");
var heroNumber = [];
heroNumber.push(2);
var allUsers = [];
//! this below code gives error
// allUsers.push("")
//? we can do this, and it doen not gives error
allUsers.push({ name: "", isActive: true });
//! array inside array
// here MlModel is a array of number which consis of array
var MlModel = [
    [1, 2, 3],
    [1, 2, 3],
];
