// import { updateClock } from "./script.js";

const section = document.querySelector("section");
const menu = document.querySelector("#menu");

// const openedApp = document.querySelector(".openedApp");

const openMenu = () => {
    const newMenu = document.querySelector(".openedMenu");
    if (newMenu.style.display === "none") {
        newMenu.style.display = "flex";
    } else newMenu.style.display = "none";
    // newMenu.classList.toggle("openedMenu__menu");
    // const openedMenu = document.querySelector(".openedMenu__menu");
    // if (openedMenu) {
    //     openedMenu.parentNode.removeChild(openedMenu);
    // } else {
    //     const item1 = document.createElement("li");
    //     item1.appendChild(document.createTextNode("Notepad - "));
    //     const item2 = document.createElement("li");
    //     item2.appendChild(document.createTextNode("Internet Explorer"));
    //     const item3 = document.createElement("li");
    //     item3.appendChild(document.createTextNode("Place Kitten"));
    //     const item4 = document.createElement("li");
    //     const item5 = document.createElement("li");
    //     const contents = document.createElement("ul");
    //     contents.appendChild(item1);
    //     contents.appendChild(item2);
    //     contents.appendChild(item3);
    //     contents.appendChild(item4);
    //     contents.appendChild(item5);
    //     newMenu.appendChild(contents);
    //     section.appendChild(newMenu);
    // }
};

menu.addEventListener("click", openMenu);

const newNotepad = document.querySelector(".openedApp__notepad");
const notepad = document.querySelector("#notepad");
const openNotepad = () => {
    if (newNotepad.style.display === "none") {
        newNotepad.style.display = "flex";
    } else newNotepad.style.display = "none";
    // newNotepad.className = "openedApp__notepad openedApp";
    // const openedNotepad = document.querySelector(".openedApp__notepad");
    // if (openedNotepad) {
    //     openedNotepad.parentNode.removeChild(openedNotepad);
    // } else {
    //     const items = document.createElement("li");
    //     const contents = document.createElement("ul");
    //     contents.appendChild(items);
    //     newNotepad.appendChild(contents);
    //     section.appendChild(newNotepad);
    // }
};

notepad.addEventListener("click", openNotepad);

const newInternet = document.querySelector(".openedApp__internet");
const internetExplorer = document.querySelector("#internet-explorer");
const openInternetExplorer = () => {
    if (newInternet.style.display === "none") {
        newInternet.style.display = "flex";
    } else newInternet.style.display = "none";
    // newInternet.className = "openedApp__internet openedApp";
    // const openedInternet = document.querySelector(".openedApp__internet");
    // if (openedInternet) {
    //     openedInternet.parentNode.removeChild(openedInternet);
    // } else {
    // const title = document.createElement("h1");
    // title.appendChild(document.createTextNode("Internet"));
    // const form = document.createElement("form");
    // form.appendChild(document.createElement("input"));
    // const submitBtn = document.createElement("button");
    // submitBtn.appendChild(document.createTextNode("Submit"));

    //     newInternet.appendChild(title);
    //     newInternet.appendChild(form);
    //     newInternet.appendChild(submitBtn);
    //     section.appendChild(newInternet);
    // }
};
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
const formSubmission = (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    const message = document.createTextNode("This is the internet");
    const theInternet = document.querySelectorAll("p");
    if (theInternet.length === 3) {
        for (let i = 0; i < theInternet.length; i++) {
            theInternet[i].remove();
        }
    } else {
        p.appendChild(message);
        form.appendChild(p);
    }
};

submitBtn.addEventListener("click", formSubmission);
form.addEventListener("submit", formSubmission);

internetExplorer.addEventListener("click", openInternetExplorer);

const placeKitten = document.querySelector("#place-kitten");
const newPlaceKitten = document.querySelector(".openedApp__placeKitten");
const openPlaceKitten = () => {
    if (newPlaceKitten.style.display === "none") {
        newPlaceKitten.style.display = "flex";
    } else newPlaceKitten.style.display = "none";
    // newPlaceKitten.className = "openedApp__placeKitten openedApp";
    // const openedPlaceKitten = document.querySelector(".openedApp__placeKitten");
    // if (openedPlaceKitten) {
    //     openedPlaceKitten.parentNode.removeChild(openedPlaceKitten);
    // } else {
    //     const items = document.createElement("p");
    //     items.appendChild(document.createTextNode("PlaceKitten"));
    //     const kitten = document.createElement("img");
    //     newPlaceKitten.appendChild(items);
    //     section.appendChild(newPlaceKitten);
    // }
};

placeKitten.addEventListener("click", openPlaceKitten);

const updateClock = () => {
    const today = new Date();
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("dateTime").innerHTML = time;
    setTimeout(updateClock, 100);
};
updateClock();

const closeBtnNotepad = document.querySelector("#closeBtnNotepad");
const closeBtnInternet = document.querySelector("#closeBtnInternet");
const closeBtnPlaceKitten = document.querySelector("#closeBtnPlaceKitten");
const closeNotepad = () => {
    if (newNotepad.style.display === "flex") {
        newNotepad.style.display = "none";
    }
};

const closeInternet = () => {
    if (newInternet.style.display === "flex") {
        newInternet.style.display = "none";
    }
};
const closePlaceKitten = () => {
    if (newPlaceKitten.style.display === "flex") {
        newPlaceKitten.style.display = "none";
    }
};

closeBtnNotepad.addEventListener("click", closeNotepad);
closeBtnInternet.addEventListener("click", closeInternet);
closeBtnPlaceKitten.addEventListener("click", closePlaceKitten);
