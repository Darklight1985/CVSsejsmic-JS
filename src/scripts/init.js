import { onCreateTask } from "./createDetails.js";
import { logout } from "./tasksGateway.js";
import { hideColumn } from "./tasksGateway.js";
import { showAllColumn } from "./tasksGateway.js";
import { onCreateUser } from "./createUser.js";
import { getListDetails } from "./tasksGateway.js";
import { changeSort } from "./tasksGateway.js";

export const initTodoListHandlers = () => {
    const createBtnElem = document.getElementById('createBtn');
    createBtnElem.addEventListener('click', onCreateTask);
    const logoutElem = document.getElementById('textLogout');
    logoutElem.addEventListener('click', logout);
    const checkNameTh = document.getElementById('checkName');
    checkNameTh.addEventListener('click', hideColumn);
    const checkShowColums = document.getElementById('allShow');
    checkShowColums.addEventListener('click', showAllColumn);
    const createUserBtnElem = document.getElementById('createUser');
    createUserBtnElem.addEventListener('click', onCreateUser);
    const checkBoxName = document.getElementById('stateName');
    checkBoxName.addEventListener('click', changeSort);
    const checkBoxRoundDate = document.getElementById('stateRoundDate');
    checkBoxRoundDate.addEventListener('click', changeSort);
}

