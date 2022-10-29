import { getItem } from './storaje.js';
import {onDeleteTask} from './deleteTask.js';

let createListItem = (result) => {
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
        let tdDelete = document.createElement('td');
     //   let tdRoundEdit = document.createElement('input');

        tdRoundDate.contentEditable =true;
        tdName.contentEditable = true;
        

        const butDelete = document.createElement('button');
        butDelete.id = 'button_delete';
        butDelete.className = 'btn btn-danger btn-sm';
        butDelete.addEventListener('click', onDeleteTask);
        tdDelete.appendChild(butDelete);

        const uuid = object.id;

        trElem.id = uuid;
        let name = object.name;
        let id = number;
        let roundDate = object.roundDate;
        let createDate = object.createDateTime;
 
        tdId.innerHTML = id;
        tdName.innerHTML = name;
        tdRoundDate.innerHTML = roundDate;
        tdCreateDate.innerHTML = createDate;

        trElem.appendChild(tdId);
        trElem.appendChild(tdName);
        trElem.appendChild(tdRoundDate);
        trElem.appendChild(tdCreateDate);
        trElem.appendChild(tdDelete);
        
        tableElem.append(trElem);
    }
}

export const renderTasks = () => {
let tasksList = getItem('taskList') || [];

createListItem(tasksList);
}
