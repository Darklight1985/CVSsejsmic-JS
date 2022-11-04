import { updateDetail } from "./tasksGateway.js";
import { renderTasks } from "./renderer.js";

export const onUpdateTask = (e) => {

    const buttonUpdate = e.target;
    const id = buttonUpdate.parentElement.parentElement.id;
    const name = buttonUpdate.parentElement.parentElement.childNodes[1].innerHTML;

    console.log("Изменение");

   // const detail = JSON.stringify({name});
    const newTask = {
       id,
       name
    };

    console.log(newTask);
    updateDetail(newTask).then(res => {
        console.log(res);
        renderTasks()});
};