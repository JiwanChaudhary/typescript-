interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string; // this is also a way to define the method
  startTrial(): string; // here startTrial is a method that returns string
  getCoupan?(coupanName: string, value: number): string; // this is optional as ? is added
}

const Jiwan: User = {
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
