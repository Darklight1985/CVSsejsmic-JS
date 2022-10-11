const baseUrl = 'http://localhost:8080/detail';

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const getTasksList = () =>
    fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }})
        .then(resoponse => resoponse.json());

export const deleteTask = (id) =>
     fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        });
