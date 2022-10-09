import { createTask, getTasksList } from './tasksGateway.js';
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
        .then(() => {
            renderTasks();
        });
};