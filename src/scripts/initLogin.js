import { onTakeLogin } from "./takeToken.js";

export const initLoginHandlers = () => {
    const takeTokenBtn = document.getElementById('tokenBtn');
    takeTokenBtn.addEventListener('click', onTakeLogin);
}