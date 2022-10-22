import { setItem } from "./storaje.js";
import { takeToken } from "./tasksGateway.js";



export const onTakeLogin = () => {
    console.log("Логинимся")
    const usernameValue = document.getElementById('usernameInput');
    const passwordValue = document.getElementById('passwordInput')

    const username = usernameValue.value;
    const password = passwordValue.value;

    const newUser = {
        username,
        password
    };

    usernameValue.value = '';
    passwordValue.value ='';

    takeToken(newUser).then(res => {
    setItem('accessToken', res.access_token);
    setItem('refreshToken', res.refresh_token);})
    .then(setTimeout(() => {window.location.href = 'index.html'}, 500));
    
    //.then(window.location.href = 'index.html');
    
    //setTimeout((str) => {console.log(str)}, 1000);
   // setTimeout(() => {window.location.href = 'index.html'}, 10000);
};