import { createTask, getTasksList } from './tasksGateway.js';
import { setItem }  from './storaje.js';
import { renderTasks } from './renderer.js';


export const onCreateTask = () => {
    const taskTitleInputElem = document.getElementById('nameInput');

    const name = taskTitleInputElem.value;

    console.log(name);
    if (!name) {
        return;
    }
    taskTitleInputElem.value = '';

    const newTask = {
        name
    };


    createTask(newTask)
    .then(getTasksList)
    .then(newTaskList => {
        setItem('taskList', newTaskList);
        renderTasks();
    });
};