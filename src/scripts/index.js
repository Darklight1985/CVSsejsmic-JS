import { renderTasks } from './renderer.js';
import {initTodoListHandlers} from './init.js';


document.addEventListener('DOMContentLoaded', () => {
renderTasks();
initTodoListHandlers();
});



