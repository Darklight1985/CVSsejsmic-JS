import { onCreateTask } from "./createDetails.js";
import { checkTokenStorage } from "./storaje.js";

export const initTodoListHandlers = () => {
    const createBtnElem = document.getElementById('createBtn');
    createBtnElem.addEventListener('click', onCreateTask);
    const takeBtnElem = document.getElementById('takeBtn');
    takeBtnElem.addEventListener('click', checkTokenStorage);
}

