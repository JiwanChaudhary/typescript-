// string
let greetings: string = "Hello Jiwan";

greetings.toLowerCase();
console.log(greetings);

// number

// for any type of number which is either integer or float or double or anything else, we do use type number for it

// let userId: number = 334466.5;

// for the bove code we can also just don't write that userId is of type number, TypeScript will automatically detect that it is number which is quite cool feature of TypeScript which is call type inference
let userId = 334466.5;
userId.toFixed();

// if we write userId = "Jiwan"; then this will give error as userId is of type number

// type inference in typescript

// What is type inference in TypeScript?

// We know that typescript is a typed language. By the word type inference, we mean when the type is not explicitly declared by the user, and the typescript itself has to infer the type on its own. Type inference is very helpful in type checking when there are is no explicit type annotation available in typescript.

// boolean
let isTrue: boolean = true;

// any

// here any says that I don't wanna check the type, the type can be anything, any isn't type checked
// let hero: any;
let hero: string;

function getHero() {
  return "Hulk";
  // return true
}

hero = getHero();

export {};
