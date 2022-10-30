import { createTask, getTasksList } from './tasksGateway.js';
import { setItem }  from './storaje.js';
import { renderTasks } from './renderer.js';
import { checkTokenStorage } from './storaje.js';


export const onCreateTask = () => {

    const taskTitleInputElem = document.getElementById('nameInput');
    const detailRoundDate = document.getElementById('dateRoundInput')

    const name = taskTitleInputElem.value;
    const roundDate = detailRoundDate.value;

    console.log("Обработка");
    console.log(name, roundDate);

    taskTitleInputElem.value = '';
    detailRoundDate.value ='';

    let access_token = checkTokenStorage();

    const newTask = {
        name,
        roundDate,
        access_token
    };


    createTask(newTask)
    .then(getTasksList)
    .then(newTaskList => {
        console.log(newTaskList)
        setItem('taskList', newTaskList);
        renderTasks();
    });
};