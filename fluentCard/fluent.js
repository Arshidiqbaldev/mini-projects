//for parent 1

const parent = document.getElementById("parent");
const children = document.querySelectorAll("#parent .child");
const myAudio2 = new Audio("imgs/mouse-click.mp3");


children.forEach((child, index) => {
    child.addEventListener("click", () => {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);

    });
});

//for parent2

const parentTwo = document.getElementById("parentTwo");
const childrenTwo = document.querySelectorAll("#parentTwo .child-2");

childrenTwo.forEach((child, index) => {
    child.addEventListener("click", () => {
        parentTwo.className = "";
        parentTwo.classList.add(`parent-2-child-${index + 1}`);
    });
});

const columns = document.getElementById("columns");
const rows = document.getElementById("rows");

//for columns

columns.addEventListener("click", () => {
    parent.style.display = "none";
    parentTwo.style.display = "flex";
    columns.classList.add("switch-icon-2");
    rows.classList.remove("switch-icon-2");
    myAudio2.currentTime = 0;
    myAudio2.volume = 0.2;
    myAudio2.play();
});

//for rows

rows.addEventListener("click", () => {
    parentTwo.style.display = "none";
    parent.style.display = "flex";
    rows.classList.add("switch-icon-2");
    columns.classList.remove("switch-icon-2");
    myAudio2.currentTime = 0;
    myAudio2.volume = 0.2;
    myAudio2.play();
});
