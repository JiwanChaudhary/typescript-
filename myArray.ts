let superHeros: Array<string> = [];
// this means superHeros is a array of string, te array can also be defined as follow
//! const superHeros: string[] = [];
// this is also a way to define array
superHeros.push("hulk");

let heroNumber: number[] = [];
heroNumber.push(2);

type User = {
  name: string;
  isActive: boolean;
};

let allUsers: User[] = [];

//! this below code gives error
// allUsers.push("")

//? we can do this, and it doen not gives error
allUsers.push({ name: "", isActive: true });

//! array inside array
// here MlModel is a array of number which consis of array
const MlModel: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

export {};
