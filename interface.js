var Jiwan = {
    dbId: 2233,
    email: "j@g.com",
    userId: 21,
    startTrial: function () {
        return "Jiwan";
    },
    getCoupan: function (name, off) {
        // here the parameter name can be differnet and no problem
        return "Kirwe";
    },
};
// Jiwan.dbId = 34, gives error as dbId is readOnly
Jiwan.email = "Jiwan@j.com"; // does not gives error
