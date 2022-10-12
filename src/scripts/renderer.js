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
        const tdName = document.createElement('td');
        tdName.contentEditable = true;
        const butDelete = document.createElement('button');
        butDelete.id = 'button_delete';
        butDelete.className = 'btn btn-primary';
        butDelete.addEventListener('click', onDeleteTask);

        const uuid = object.id;

        trElem.id = uuid;
        let name = object.name;
        let id = number;
 
        tdId.innerHTML = id;
        tdName.innerHTML = name;

        trElem.appendChild(tdId);
        trElem.appendChild(tdName);
        trElem.appendChild(butDelete);
        
        tableElem.append(trElem);
    }
}

export const renderTasks = () => {
let tasksList = getItem('taskList') || [];

let tasksElems = createListItem(tasksList);
}
