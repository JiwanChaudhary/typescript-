//! Interface
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string; // this is also a way to define the method
  startTrial(): string; // here startTrial is a method that returns string
  getCoupan?(coupanName: string, value: number): string; // this is optional as ? is added
}

//! we can re-open the interface, that means we can add more property to User interface by again reopeing again which is totally fine

interface User {
  isLoggedIn: boolean;
}

//? Interface also has inheritence property
interface Admin extends User {
  role: "admin" | "bg" | "gdg";
}

const Jiwan: Admin = {
  isLoggedIn: false,
  role: "admin",
  dbId: 2233,
  email: "j@g.com",
  userId: 21,
  startTrial: () => {
    return "Jiwan";
  },
  getCoupan: (name: "Jiwan", off: 23) => {
    // here the parameter name can be differnet and no problem
    return "Kirwe";
  },
};

// Jiwan.dbId = 34, gives error as dbId is readOnly
Jiwan.email = "Jiwan@j.com"; // does not gives error
