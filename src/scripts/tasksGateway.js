import { setItem } from "./storaje.js";
import { checkTokenStorage } from "./storaje.js";

const baseUrl = 'http://localhost:8080';

export const createTask = taskData => 
    fetch(`${baseUrl}/detail`, {
        method: 'POST',
        headers: {
            'Authorization' :'Bearer ' + taskData.access_token,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    }).then(res => {
        if (res.status == 400) {
            console.log(res);
            throw new Error ("Не правильный запрос")
        }
        if (res.status == 403) {
            console.log(res);
            setTimeout(() => {window.location.href = 'login.html'}, 1000);
            throw new Error ("Время сессии истекло")
        }
        return res.json();}
    ).then(json => {})
    .catch((res) => 
        alert(res));


export const getTasksList = () => 
    fetch(`${baseUrl}/detail`, {
        method: 'GET',
        headers: {
            'Authorization' :'Bearer ' + checkTokenStorage(),
            'Content-Type': 'application/json;charset=utf-8'
        }})
        .then(res => {
            if (res.status == 403) {
                console.log(res);
                setTimeout(() => {window.location.href = 'login.html'}, 1000);
                throw new Error ("Время сессии истекло")
            }
            return res.json();
        })
        .then(response => {
            console.log(response);
           return response;
        }).catch((res) => alert(res));

export const deleteTask = (id) =>
     fetch(`${baseUrl}/detail/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization' :'Bearer ' + checkTokenStorage(),
            }
        }).catch(res => alert(res.json()));

export const takeToken = userData => 
    fetch(`${baseUrl}/login` + `?username=` + `${userData.username}` + `&password=`+ `${userData.password}`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'}
    }).then((token) => {
    const reader = token.body.getReader();
    return reader;
    }).then(reader => {
        return reader.read();
    }).then(({value, done}) => {
    var string = JSON.parse(new TextDecoder().decode(value));
  //  setItem('accessToken', string.access_token);
   // setItem('refreshToken', string.refresh_token);
    return string;
    });

         

