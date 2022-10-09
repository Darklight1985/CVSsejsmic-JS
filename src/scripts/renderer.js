import { getTasksList } from './tasksGateway.js';

const tableElem = document.querySelector('table');

const createListItem = (data) => {

 data.then(result => {
    var number = 0;
    for (const object of result) {
        number++;
        const trElem = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');

        const name = object.name;
        const id = number;
 
        tdId.innerHTML = id;
        tdName.innerHTML = name;
        trElem.appendChild(tdId);
        
        trElem.appendChild(tdName);
        
        tableElem.append(trElem);
    }
        });
}

export const renderTasks = () => {
const tasksList = getTasksList() || [];

const tasksElems = createListItem(tasksList);
console.log(tasksElems);

}
