let fileMenu = document.getElementById("file-btn")
let editMenu = document.getElementById("edit-btn")
let consoleMenu = document.getElementById("console-btn")

function openFileMenu() {
    if (fileMenu.style.display == "inline-block") {
        fileMenu.style.display = "none"
    } else {
        console.log("FileMenu open")
        fileMenu.style.display = "inline-block"
        editMenu.style.display = "none"
        consoleMenu.style.display = "none"
    };
};

function openEditMenu() {
    if (editMenu.style.display == "inline-block") {
        editMenu.style.display = "none"
    } else {
        console.log("editMenu open")
        fileMenu.style.display = "none"
        editMenu.style.display = "inline-block"
        consoleMenu.style.display = "none"
    };
};

function openConsoleMenu() {
    if (consoleMenu.style.display == "inline-block") {
        consoleMenu.style.display = "none"
    } else {
        console.log("FileMenu open")
        fileMenu.style.display = "none"
        editMenu.style.display = "none"
        consoleMenu.style.display = "inline-block"
    };
};

