const firebase = require("../firebase");
class User {


    async create(data) {

        try {

            await firebase.database().ref("users").push(data);

            return true;

        } catch (error) {

            return error;
        }
    }

    async login({ email, password }) {

        try {

            return await firebase.database().ref("users").orderByChild("email").equalTo(email).once("value").then(snapshot => {
                let data = [];
                snapshot.forEach(childSnapshot => {

                    data.push({ id: childSnapshot.key, ...childSnapshot.val() });

                });

                return data[0];
            });

        } catch (error) {

            return error;
        }
    }
}

module.exports = User;