// in case of function we must decalare the type, so that we might not run in the error in the future

// function to add two numbers
function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

// function that changes string to upper case
function toUpper(val: string): string {
  return val.toUpperCase();
}

// function for user signup
function signUpUser(name: string, email: string, isAdmin: boolean) {}

// login user
// here either we provide the boolean value for isAdmin or it takes the default value which be declared in the way below of isAdmin variable
let loginUser = (name: string, email: string, isAdmin: boolean = false) => {};

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

const getHello = (s: string): string => {
  return "";
};

const heros = [1, 2, 3];
// const heros = ["thor", "hulk", "ironman"];

heros.map((hero): string => {
  return `hero is ${heros}`;
  //   this function must return an string
  // return 1, will give error
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return 1;, this will give error as function is of type void which means that this function doesnot returns anything
}


function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
