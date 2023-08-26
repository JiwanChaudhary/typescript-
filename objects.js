"use strict";
// const User = {
//   name: "Jiwan",
//   email: "jiwan@g.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: 123,
    name: "j",
    email: "j@j.com",
    isActive: true,
};
// here we can change the value of name and other properties but cannot change the value of _id as it is readonly
myUser.email = "j@gmail.com";
