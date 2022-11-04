import {onDeleteTask} from './deleteTask.js';
import {showAdddates} from './tasksGateway.js';
import {getTasksList} from './tasksGateway.js';
import { onUpdateTask } from './updateDetail.js';

export const renderTasks = () => {
    const pageable = {offset:10, page:0, size:10, paged:true, sort:'name%2CASC'};
    getTasksList(pageable).then(newTaskList => {
        console.log('данные с сервера: ' + newTaskList);
        console.log(newTaskList);
        createListItem(newTaskList.content)});
    }


export let createListItem = (result) => {
    var number = 0;
    let tableElem = document.getElementById('tableDetail');
    tableElem.innerHTML = "";
    for (let object of result) {
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
        tdName.addEventListener('click', showAdddates);
        

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
}
