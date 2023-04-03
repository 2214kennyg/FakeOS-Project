// import { openNotepad, openMenu, closeApp } from "./script";

const body = document.querySelector("body");
const openedMenu = document.querySelector(".openedMenu");
const menu = document.querySelector("#menu");
const notepad = document.querySelector("#notepad");
const closeBtn = document.querySelector("#closebtn");

menu.addEventListener("click", () => {
    body.classlist.toggle("openedMenu__menu");
    const newMenu = document.createElement("div");
    openedMenu.appendChild(newMenu);
});
notepad.addEventListener("click", openNotepad);
closeBtn.addEventListener("click", closeApp);

// const updateClock = () => {
//     const today = new Date();
//     const time =
//         today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     document.getElementById("dateTime").innerHTML = time;
//     setTimeout(updateClock, 100);
// };
// updateClock();
