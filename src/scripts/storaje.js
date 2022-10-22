export const setItem = (key, value) => {
    if (value != undefined) {
    localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getItem = key => JSON.parse(localStorage.getItem(key));


export const checkTokenStorage = () => {
    let accessToken = getItem('accessToken') || [];
    console.log(accessToken);
    return accessToken;
}
