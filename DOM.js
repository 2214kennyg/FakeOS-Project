// import { updateClock } from "./script.js";

const section = document.querySelector("section");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#closebtn");

const openedApp = document.querySelector(".openedApp");

const openMenu = () => {
    const newMenu = document.createElement("div");
    newMenu.className = "openedMenu";
    const openedMenu = document.querySelector(".openedMenu");
    if (openedMenu) {
        openedMenu.parentNode.removeChild(openedMenu);
    } else {
        const item1 = document.createElement("li");
        item1.appendChild(document.createTextNode("Notepad - "));
        const item2 = document.createElement("li");
        item2.appendChild(document.createTextNode("Internet Explorer"));
        const item3 = document.createElement("li");
        item3.appendChild(document.createTextNode("Place Kitten"));
        const item4 = document.createElement("li");
        const item5 = document.createElement("li");
        const item6 = document.createElement("li");
        const item7 = document.createElement("li");
        const item8 = document.createElement("li");
        const item9 = document.createElement("li");
        const item10 = document.createElement("li");
        const contents = document.createElement("ul");
        contents.appendChild(item1);
        contents.appendChild(item2);
        contents.appendChild(item3);
        contents.appendChild(item4);
        contents.appendChild(item5);
        contents.appendChild(item6);
        contents.appendChild(item7);
        contents.appendChild(item8);
        contents.appendChild(item9);
        contents.appendChild(item10);
        newMenu.appendChild(contents);
        section.appendChild(newMenu);
    }
};

menu.addEventListener("click", openMenu);

const notepad = document.querySelector("#notepad");
const openNotepad = () => {
    const newNotepad = document.createElement("div");
    newNotepad.className = "openedApp__notepad openedApp";
    const openedNotepad = document.querySelector(".openedApp__notepad");
    if (openedNotepad) {
        openedNotepad.parentNode.removeChild(openedNotepad);
    } else {
        const items = document.createElement("li");
        const contents = document.createElement("ul");
        contents.appendChild(items);
        newNotepad.appendChild(contents);
        section.appendChild(newNotepad);
    }
};

notepad.addEventListener("click", openNotepad);

const internetExplorer = document.querySelector("#internet-explorer");
const openInternetExplorer = () => {
    const newInternet = document.createElement("div");
    newInternet.className = "openedApp__internet openedApp";
    const openedInternet = document.querySelector(".openedApp__internet");
    if (openedInternet) {
        openedInternet.parentNode.removeChild(openedInternet);
    } else {
        const title = document.createElement("h1");
        title.appendChild(document.createTextNode("Internet"));
        const form = document.createElement("form");
        form.appendChild(document.createElement("input"));
        const submitBtn = document.createElement("button");
        submitBtn.appendChild(document.createTextNode("Submit"));
        const formSubmission = (event) => {
            event.preventDefault();
            const p = document.createElement("p");
            const message = document.createTextNode("This is the internet");
            const theInternet = document.querySelectorAll("p");
            if (theInternet.length === 3) {
                theInternet.parentNode.removeChild;
            } else {
                p.appendChild(message);
                document.querySelector("form").appendChild(p);
            }
        };
        submitBtn.addEventListener("click", formSubmission);
        form.addEventListener("submit", formSubmission);
        newInternet.appendChild(title);
        newInternet.appendChild(form);
        newInternet.appendChild(submitBtn);
        section.appendChild(newInternet);
    }
};

internetExplorer.addEventListener("click", openInternetExplorer);

const placeKitten = document.querySelector("#place-kitten");
const openPlaceKitten = () => {
    const newPlaceKitten = document.createElement("div");
    newPlaceKitten.className = "openedApp__placeKitten openedApp";
    const openedPlaceKitten = document.querySelector(".openedApp__placeKitten");
    if (openedPlaceKitten) {
        openedPlaceKitten.parentNode.removeChild(openedPlaceKitten);
    } else {
        const items = document.createElement("p");
        items.appendChild(document.createTextNode("PlaceKitten"));
        const kitten = document.createElement("img");
        newPlaceKitten.appendChild(items);
        section.appendChild(newPlaceKitten);
    }
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

// closeBtn.addEventListener("click", closeApp);
