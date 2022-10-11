import { renderTasks } from './renderer.js';
import { setItem} from './storaje.js';
import { getTasksList, deleteTask } from './tasksGateway.js'

export const onDeleteTask = e => {

    const taskId = e.target.closest('tr').id;
    console.log(taskId);

    deleteTask(taskId)
        .then(getTasksList)
        .then(newTasksList => {
            setItem('taskList', newTasksList);
            renderTasks();
        });
};