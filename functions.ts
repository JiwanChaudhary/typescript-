// in case of function we must decalare the type, so that we might not run in the error in the future

// function to add two numbers
function addTwo(num: number) {
  return num + 2;
}

// function that changes string to upper case
function toUpper(val: string) {
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

export {};
