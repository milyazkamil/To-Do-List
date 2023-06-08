const btnNameArr = [];
const editBtnsArr = [];
const deleteBtnsArr = [];
const navigationSvgsArr = [];
const navigationBtnsArr = [];
const add = document.getElementById("add");
const sent = document.getElementById("sent");
const added = document.getElementById("added");
const right = document.getElementById("right");
const sunSvg = document.querySelector(".sun-svg");
const moonSvg = document.querySelector(".moon-svg");
const darkMode = document.getElementById("dark-mode");
const container = document.querySelector(".container");
const buttonName = document.querySelectorAll(".button-name");
const navigationBtns = document.querySelectorAll(".navigation-btn");
const navigationSvgs = document.querySelectorAll(".navigation-svg");

moonSvg.style.display = "none";
container.style.transition = "background 0.3s ease-in";

//Pushing buttons, buttons name and svgs into arrays one by one.
navigationBtns.forEach((e) => {
  navigationBtnsArr.push(e);
});

navigationSvgs.forEach((e) => {
  navigationSvgsArr.push(e);
});

buttonName.forEach((e) => {
  btnNameArr.push(e);
});

let isDark = false;
darkMode.addEventListener("click", () => {
  if (isDark === false) {
    container.style.backgroundColor = "#08010f";
    right.style.backgroundColor = "#08010f";

    deleteBtnsArr.forEach((e) => {
      e.style.fill = "white";
    });

    editBtnsArr.forEach((e) => {
      e.style.fill = "white";
    });

    navigationBtns.forEach((e) => {
      e.style.backgroundColor = "#08010f";
      e.style.border = "3px solid black";
    });

    buttonName.forEach((e) => {
      e.style.color = "white";
    });

    navigationSvgs.forEach((e) => {
      e.style.fill = "white";
      e.style.stroke = "white";
    });

    sunSvg.style.display = "none";
    moonSvg.style.display = "block";
    isDark = true;

  } else if (isDark === true) {
    container.style.backgroundColor = "#A18AFF";
    right.style.backgroundColor = "#A18AFF";

    deleteBtnsArr.forEach((e) => {
      e.style.fill = "black";
    });

    editBtnsArr.forEach((e) => {
      e.style.fill = "black";
    });

    navigationBtns.forEach((e) => {
      e.style.backgroundColor = "#A18AFF";
      e.style.border = "3px solid #A18AFF";
    });

    buttonName.forEach((e) => {
      e.style.color = "black";
    });

    navigationSvgs.forEach((e) => {
      e.style.fill = "black";
      e.style.stroke = "black";
    });

    sunSvg.style.display = "block";
    moonSvg.style.display = "none";
    isDark = false;
  }
});

darkMode.addEventListener("mouseover", () => {
    moonSvg.style.fill = "black";
});

darkMode.addEventListener("mouseout", () => {
    moonSvg.style.fill = "white";
});

//Checking if dark mode is on and adjusting the styles of the buttons accordingly.
for (let x = 0; x < 5; x++) {
  navigationBtnsArr[x].addEventListener("mouseover", () => {
    if (isDark === false) {
      navigationBtnsArr[x].style.backgroundColor = "transparent";
      navigationBtnsArr[x].style.border = "3px solid #A18AFF";
    } else if (isDark === true) {
      navigationBtnsArr[x].style.backgroundColor = "transparent";
      navigationBtnsArr[x].style.border = "3px solid black";
      navigationSvgsArr[x].style.fill = "black";
      btnNameArr[x].style.color = "black";
    }
  });

  navigationBtnsArr[x].addEventListener("mouseout", () => {
    if (isDark === false) {
      navigationBtnsArr[x].style.backgroundColor = "#A18AFF";
      navigationSvgsArr[x].style.fill = "black";
      btnNameArr[x].style.color = "black";
    } else if (isDark === true) {
      navigationBtnsArr[x].style.backgroundColor = "black";
      navigationBtnsArr[x].style.border = "3px solid black";
      navigationSvgsArr[x].style.fill = "white";
      btnNameArr[x].style.color = "white";
    }
  });
}

//function that creates new svgs, checkboxes and divs and adds them to the array.
let number = 0;
function addToDo() {
  if (add.value !== "") {
    let id = `a${number}`;
    const newTodo = add.value;
    const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    deleteSvg.classList.add(id);
    deleteSvg.style.marginLeft = "5px";
    deleteSvg.style.cursor = "pointer";
    deleteSvg.setAttribute('stroke', 'currentColor');
    deleteSvg.setAttribute('fill', 'currentColor');
    deleteSvg.setAttribute('stroke-width', '0');
    deleteSvg.setAttribute('viewBox', '0 0 16 16');
    deleteSvg.setAttribute('height', '1.6em');
    deleteSvg.setAttribute('width', '1.6em');
    deleteSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    // Create two path elements and set their attributes
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z');
    path1.setAttribute('fill-rule', 'evenodd');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z');
    path2.setAttribute('clip-rule', 'evenodd');

    // Add the path elements to the SVG element
    deleteSvg.appendChild(path1);
    deleteSvg.appendChild(path2);

    svgEdit.classList.add(id);
    svgEdit.style.cursor = "pointer";
    svgEdit.setAttribute("stroke", "currentColor");
    svgEdit.setAttribute("fill", "currentColor");
    svgEdit.setAttribute("stroke-width", "0");
    svgEdit.setAttribute("viewBox", "0 0 1024 1024");
    svgEdit.setAttribute("height", "1.6em");
    svgEdit.setAttribute("width", "1.6em");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z");
    svgEdit.appendChild(path);

    const okBtn = document.createElement("button");
    okBtn.classList.add(id);
    okBtn.textContent = "OK";
    okBtn.classList.add("edit");

    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center-div");

    const item = document.createElement("input");
    const checkboxDiv = document.createElement("div");

    checkboxDiv.classList.add("checkbox-div", id);
    checkboxDiv.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path></svg>`;

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.classList.add("checkbox-style");

    item.classList.add("to-do-items");
    item.value = newTodo;

    if (isDark === true) {
      deleteSvg.style.fill = "white";
      svgEdit.style.fill = "white";
    } else if (isDark === false) {
      deleteSvg.style.fill = "black";
      svgEdit.style.fill = "black";
    }

    deleteBtnsArr.push(deleteSvg);
    editBtnsArr.push(svgEdit);

    centerDiv.append(checkboxDiv, item, okBtn, svgEdit, deleteSvg);

    added.append(centerDiv);

    deleteSvg.addEventListener("click", () => {
      added.removeChild(centerDiv);
    });

    svgEdit.addEventListener("click", () => {
      okBtn.style.display = "block";
      item.classList.add("warning-shadow");
      item.style.pointerEvents = "all";
      item.style.width = "70%";
    });

    okBtn.addEventListener("click", () => {
      if (okBtn.classList.contains(svgEdit.classList[0])) {
        okBtn.style.display = "none"
        item.style.width = "80%";
        item.style.pointerEvents = "none";
        item.classList.remove("warning-shadow");
      }
    });

    let isComp = true;
    checkboxDiv.addEventListener("click", () => {
      if (isComp === true) {
        checkboxDiv.classList.add("success-shadow");
        checkboxDiv.style.backgroundColor = "#71e94c";
        item.style.textDecoration = "line-through";
        item.classList.add("success-shadow");
        isComp = false;
      } else if (isComp === false) {
        checkboxDiv.classList.remove("success-shadow");
        checkboxDiv.style.backgroundColor = "#ffffff";
        item.style.textDecoration = "none";
        item.classList.remove("success-shadow");
        isComp = true;
      }
    });
    //incremented number to assign a different id to each item
    number++;
    //If the input field is empty, the warning text will appear.
  } else {
    alert("Please Write Something...");
  }
}

//Adding the written to-do when clicking the add icon
sent.addEventListener("click", () => {
  addToDo();
});

//Adding the to-do typed at the time the enter key is pressed
add.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    addToDo();
  }
});