const baseUrl = 'https://localhost:8080/detail';

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

    export const getTasksList = () =>
    fetch(baseUrl)
        .then(resoponse => resoponse.json());