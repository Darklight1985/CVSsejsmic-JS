import { createTask, getTasksList } from './tasksGateway.js';
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


    console.log(newTask);

    createTask(newTask).then(res => {
        console.log(res);
        renderTasks()});
};