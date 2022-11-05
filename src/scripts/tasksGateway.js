import { setItem } from "./storaje.js";
import { checkTokenStorage } from "./storaje.js";
import { createListItem } from "./renderer.js";

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
            window.location.href = 'login.html';
            throw new Error ("Время сессии истекло")
        } else {
        return res.json();}
    }
    ).then(json => {})
    .catch((res) => 
        alert(res));


export const getTasksList = (pageable) => 
    fetch(`${baseUrl}/detail` + `?page=` + `${pageable.page}` + `&size=`+ `${pageable.size}` + '&sort=' + `${pageable.sort}`, {
        method: 'GET',
        headers: {
            'Authorization' :'Bearer ' + checkTokenStorage(),
            'Content-Type': 'application/json;charset=utf-8'
        }
       })
        .then(res => {
            if (res.status == 403) {
                console.log(res);
                window.location.href = 'login.html';
                throw new Error ("Время сессии истекло")
            } else {
            return res.json();
            }
        })
        .then(response => {
           return response;
        }).catch((res) => alert(res));

export const deleteTask = (id) =>
     fetch(`${baseUrl}/detail/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization' :'Bearer ' + checkTokenStorage(),
            }
        }).then(res => 
            {
                if (res.status == 403) {
                    setTimeout(()=>window.location.href = 'login.html', 1000)
                    throw new Error ("Время сессии истекло")
                } else {
                    return;
                }
            }).catch(res => alert(res));


 export const updateDetail = (newDetail) => 
     fetch(`${baseUrl}/detail/${newDetail.id}`, {
            method: 'PUT',
            headers: {
                'Authorization' :'Bearer ' + checkTokenStorage(),
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newDetail)
        }).then(res => 
            {
                if (res.status == 403) {
                    setTimeout(()=>window.location.href = 'login.html', 10000)
                    throw new Error ("Время сессии истекло")
                } else {
                    return res.json();}
            }).then(json => {}).catch(res => alert(res));
        
        

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

    return string;
    });


    export const createUser = userData => 
    fetch(`${baseUrl}/user`, {
        method: 'POST',
        headers: {
            'Authorization' :'Bearer ' + userData.access_token,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    }).then(res => {
        if (res.status == 400) {
            console.log(res);
            throw new Error ("Не правильный запрос")
        }
        if (res.status == 403) {
            console.log(res);
            window.location.href = 'login.html';
            throw new Error ("Время сессии истекло")
        }
        return res.json();}
    )
    .catch((res) => 
        alert(res));


    export const logout = () =>
    {   setItem('accessToken', []);
        setItem('refreshToken', []);
        window.location.href = 'login.html'
    }

    export const hideColumn = e => {
        const allColumenEl = document.getElementById('allShow');
        allColumenEl.checked = false;
       const columnHide = e.target.closest('th');
       var classCol = columnHide.className;
        var columns = document.getElementsByClassName(classCol);
        for (let node of columns) {
            node.style.display = 'none';
        }
       columnHide.style.display = 'none';
    }


    export const showAllColumn = () => {
        var columns = document.getElementsByClassName('name');
        for (let node of columns){
        node.style.display = '';
        }
        const checkColumns = document.getElementById('checkName');
        checkColumns.checked = false;
    }


    export const showAdddates = () => {
        const form = document.getElementById('formCreateDetail');
        let divElem = document.createElement('div');
        divElem.id = "addData";
        let labelEl = document.createElement('label');
        labelEl.innerText = 'новый';
        divElem.appendChild(labelEl);

        form.parentNode.insertBefore(divElem, form.nextSibling);
    }

    export const getPageable = () => {
         let str = getSort();
         let pageNumber = getPage() - 1;
         return {offset:10, page:pageNumber, size:10, paged:true, sort:str};
    }

    export const getSort = () => {
        let cheks = [document.getElementById('stateName'), document.getElementById('stateRoundDate')];
        let strSort = "name%2CASC";
        for (var elem in cheks) {
           if (cheks[elem].checked == true) {
               strSort = cheks[elem].id.replace("state", "") + '%2CASC';    
           }
        }
        return strSort;
    }

    export const changeSort = (e) => {
        let cheks = [document.getElementById('stateName'), document.getElementById('stateRoundDate')];
        for (var elem in cheks) {
           if (cheks[elem].id != e.target.id) {
               cheks[elem].checked = false;     
           }
        };
        getListDetails();
    }

    export const getPage = () => {
        let pageNave = document.getElementById('pagesDetails');
        let pages = pageNave.childNodes;
        let number = 0;
        for (let i = 0; i < pages.length; i++) {
              if (pages[i].className == 'page-item disabled')
              {
                 number = pages[i].firstChild.innerText;
              }
         };
         console.log(number);
         return number;
    }

    export const changePage = (e) => {
        console.log(e.target.innerText);
        let pageNave = document.getElementById('pagesDetails');
        let pages = pageNave.childNodes;
        let number = e.target.innerText; 
        for (let i = 0; i < pages.length; i++) {
            pages[i].className = 'page-item'; 
        };
        pages[number - 1].className = 'page-item disabled';
        getListDetails();
    }

    export const getListDetails = () => {
     let pageable = getPageable();
     console.log(pageable);
     getTasksList(pageable).then(newTaskList => {createListItem(newTaskList)});
    }
         

