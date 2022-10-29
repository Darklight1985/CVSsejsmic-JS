import { onCreateTask } from "./createDetails.js";
import { logout } from "./tasksGateway.js";
import { hideColumn } from "./tasksGateway.js";
import { showAllColumn } from "./tasksGateway.js";

export const initTodoListHandlers = () => {
    const createBtnElem = document.getElementById('createBtn');
    createBtnElem.addEventListener('click', onCreateTask);
    const logoutElem = document.getElementById('textLogout');
    logoutElem.addEventListener('click', logout);
    const checkNameTh = document.getElementById('checkName');
    checkNameTh.addEventListener('click', hideColumn);
    const checkShowColums = document.getElementById('allShow');
    checkShowColums.addEventListener('click', showAllColumn);
}

