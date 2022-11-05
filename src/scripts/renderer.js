import {onDeleteTask} from './deleteTask.js';
import {getTasksList} from './tasksGateway.js';
import { onUpdateTask } from './updateDetail.js';
import { getPageable } from './tasksGateway.js';
import { getPage } from './tasksGateway.js';
import { changePage } from './tasksGateway.js';

export const renderTasks = (pageOut) => {
    let pageable = pageOut;
    if (pageable == null) {
    pageable = getPageable();
    }
    getTasksList(pageable).then(newTaskList => {
        console.log('данные с сервера: ' + newTaskList);
        createListItem(newTaskList)});
    }


export let createListItem = (result) => {
    console.log(result);
    var number = 0;
    let tableElem = document.getElementById('tableDetail');
    tableElem.innerHTML = "";
    for (let object of result.content) {
        number++;
        let trElem = document.createElement('tr');
        let tdId = document.createElement('th');
        let tdName = document.createElement('td');
        let tdRoundDate = document.createElement('td');
        let tdCreateDate = document.createElement('td');
        let tdAutor = document.createElement('td');
        let tdDelete = document.createElement('td');
     //   let tdRoundEdit = document.createElement('input');

        tdRoundDate.contentEditable =true;
        tdName.contentEditable = true;
        tdName.className = 'name';

        const butDelete = document.createElement('button');
        const butRed = document.createElement('button');
        butDelete.id = 'button_delete';
        butDelete.className = 'btn btn-danger btn-sm';
        butDelete.textContent = "удалить"
        butDelete.addEventListener('click', onDeleteTask);
        butRed.id = 'button_red';
        butRed.addEventListener('click', onUpdateTask);
        butRed.textContent = "Изм."
        butRed.className = 'btn btn-success btn-sm';
        tdDelete.appendChild(butRed);
        tdDelete.appendChild(butDelete);

        const uuid = object.id;

        trElem.id = uuid;
        let name = object.name;
        let id = number;
        let roundDate = object.roundDate;
        let createDate = object.createDateTime;
        let author = object.author;
 
        tdId.innerHTML = id;
        tdName.innerHTML = name;
        tdRoundDate.innerHTML = roundDate;
        tdCreateDate.innerHTML = createDate;
        tdAutor.innerHTML = author;

        trElem.appendChild(tdId);
        trElem.appendChild(tdName);
        trElem.appendChild(tdRoundDate);
        trElem.appendChild(tdCreateDate);
        trElem.appendChild(tdAutor);
        trElem.appendChild(tdDelete);
        
        tableElem.append(trElem);
    }
    
    let pageNave = document.getElementById('pagesDetails');
    pageNave.innerHTML = "";

    let prPage = document.createElement('li');
    let lastPage = document.createElement('li');
    let aPrPage = document.createElement('a');
    let aLastPage = document.createElement('a');
  //  prPage.className = "page-item disabled";
   // lastPage.className = "page-item";
  //  aPrPage.className = "page-link"
  //  aPrPage.addEventListener('click', changePage);
  //  aLastPage.className = "page-link"
  //  aPrPage.innerHTML = "Previous";
 //   aLastPage.innerHTML = "Next";
 //   aLastPage.addEventListener('click', changePage);
    
   // prPage.appendChild(aPrPage);
  //  pageNave.appendChild(prPage);
   let pageable = result.pageable;

    for (let i = 0; i < result.totalPages; i++) {
        let page = document.createElement('li');
        let aPage = document.createElement('a');
        if (i == pageable.pageNumber) {
            page.className = "page-item disabled"; 
        } else {
        page.className = "page-item";
        }
        aPage.className = "page-link";
        aPage.addEventListener('click', changePage);
        aPage.innerHTML = i+1;
        page.appendChild(aPage);
        pageNave.appendChild(page);
    }

   // lastPage.appendChild(aLastPage);
   // pageNave.appendChild(lastPage);

    
    console.log(pageable);
    console.log(result.totalPages)

}
