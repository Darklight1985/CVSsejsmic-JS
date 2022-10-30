import { createUser } from "./tasksGateway.js";
import { checkTokenStorage } from "./storaje.js";

export const onCreateUser = () => {

    const fNameInputElem = document.getElementById('firstNameUser');
    const sNameUnputElem = document.getElementById('secondName');
    const loginInputElem = document.getElementById('userName');
    const passwordInputElem = document.getElementById('passwordInput');

    const firstName = fNameInputElem.value;
    const secondName = sNameUnputElem.value;
    const username = loginInputElem.value;
    const password = passwordInputElem.value;

    console.log("Обработка");

    fNameInputElem.value = '';
    sNameUnputElem.value ='';
    loginInputElem.value ='';
    passwordInputElem.value ='';

    let access_token = checkTokenStorage();

    const newUser = {
        firstName,
        secondName,
        username,
        password,
        access_token
    };

    createUser(newUser);
};