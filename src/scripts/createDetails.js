import { createTask, getTasksList } from './tasksGateway.js';
import { setItem }  from './storaje.js';
import { renderTasks } from './renderer.js';


export const onCreateTask = () => {
    console.log("Создание детали")
    const taskTitleInputElem = document.getElementById('nameInput');
    const detailRoundDate = document.getElementById('dateRoundInput')

    const name = taskTitleInputElem.value;
    const roundDate = detailRoundDate.value;

    console.log(name);
    if (!name) {
        return;
    }
    taskTitleInputElem.value = '';

    const newTask = {
        name,
        roundDate
    };


    createTask(newTask)
    .then(getTasksList)
    .then(console.log("Получили список"))
    .then(newTaskList => {
        setItem('taskList', newTaskList);
        renderTasks();
    });
};