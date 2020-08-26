const User = require("../../../js/model/user");


describe("user", () => {

    describe("register user", () => {

        it("should register a user", () => {

            const user = new User();
            const data = {
                email: "kofiarhin@gmail.com",
                password: "password"
            };

            user.create(data).then((data) => {

                console.log("new data", data)
            });





        });

    });
});