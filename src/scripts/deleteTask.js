import { renderTasks } from './renderer.js';
import { setItem} from './storaje.js';
import { getTasksList, deleteTask } from './tasksGateway.js'

export const onDeleteTask = e => {

    const taskId = e.target.closest('tr').id;
    console.log(taskId);

    deleteTask(taskId)
        .then(getTasksList({offset:10, page:0, size:10, paged:true, sort:'name%2CASC'}))
        .then(newTasksList => {
            setItem('taskList', newTasksList);
            renderTasks();
        });
};