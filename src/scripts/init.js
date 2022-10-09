import { onCreateTask } from "./createDetails.js";

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.btn-primary');
    createBtnElem.addEventListener('click', onCreateTask);
}