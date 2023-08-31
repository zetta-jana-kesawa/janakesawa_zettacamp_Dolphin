let bookAdd = {
    title:"Love",
    count:10,
    author:"Love",
    desc:"For love"
    }
    
// localStorage.removeItem("addbook");

// localStorage.clear();

const table = document.getElementById("table1");
const addButton = document.getElementById("addbutton");
const formInput = document.getElementById("addform");
const tbody = table.querySelector("tbody");

let library = [];

function tableMake () {
    tbody.innerHTML = "";
    library.forEach((book, index) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${bookAdd.title}</td>
        <td>${bookAdd.count}</td>
        <td>${bookAdd.author}</td>
        <td>${bookAdd.desc}</td>
        <td><button class="button" type="button" id="editbutton" data-index="${index}">Edit</button>
            <button class="button" type="button" id="delbutton" data-index="${index}">Delete</button>
        </td>        
        `;
        tbody.appendChild(tableRow);
    });
}

function savingBook() {
    localStorage.setItem("addbook", JSON.stringify(bookAdd));
}

function loadingBook() {
    let addGet = localStorage.getItem("addbook");

    if (addGet) {
        library = JSON.parse(addGet);
        tableMake();
    }
}

function editBook(index) {
    const book = library[index];
    formInput.innerHTML = `
    <input type="text" id="title" placeholder="Enter book name" value="${bookAdd.title}">
    <input type="number" id="amount" placeholder="Enter the amount" value="${bookAdd.count}">
    <input type="text" id="author" placeholder="Enter author" value="${bookAdd.author}">
    <input type="text" id="desc" placeholder="Enter book summary" value="${bookAdd.desc}">
    <button class="button" id="saveEdit" type="button">Save</button>
    `;

    const saveEdit = document.getElementById("saveEdit");
    saveEdit.addEventListener("click", () => {
        bookAdd.title = document.getElementById("title").value;
        bookAdd.count = parseInt(document.getElementById("count").value);
        bookAdd.author = document.getElementById("author").value;
        bookAdd.desc = document.getElementById("desc").value;

        savingBook();
        tableMake();
    });
}

function deleteBook(index) {
    library.splice(index, 1);
    savingBook();

    tbody.removeChild(tbody.childNodes[index]);
}

function formEditMake(index) {
    const row = tbody.querySelector(`[data-index="${index}"]`);
    const editField = row.querySelector(".editField");

    if (!editField) {
        const editForm = document.createElement("td");
        editForm.className = "editField";

        const book = library[index];
        editForm.innerHTML = `
        <input type="text" class="editTitle" value="${bookAdd.title}">
        <input type="number" class="editCount" value="${bookAdd.count}">
        <input type="text" class="editAuthor" value="${bookAdd.author}">
        <input type="text" class="editDesc" value="${bookAdd.desc}">
        <button class="saveEditButton" type="button">Save</button>
        `;

    row.appendChild(editForm);

    const saveEditButton = editForm.querySelector(".saveEditButton");
    saveEditButton.addEventListener("click", () => {
        bookAdd.title = editForm.querySelector(".editTitle").value;
        bookAdd.count = parseInt(editForm.querySelector(".editTitle").value);
        bookAdd.author = editForm.querySelector(".editAuthor").value;
        bookAdd.desc = editForm.querySelector(".editDesc").value;

        savingBook();
        tableMake();
    } );

    }
}

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("editbutton")) {
        const index = event.target.getAttribute("data-index");
        formEditMake();
    }
});

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("delbutton")) {
        const index = event.target.getAttribute("data-index");
        deleteBook();
    }
});

addButton.addEventListener("click", () => {
    formInput.innerHTML = `
    <input type="text" id="title" placeholder="Enter book name">
    <input type="number" id="amount" placeholder="Enter the amount">
    <input type="text" id="author" placeholder="Enter author">
    <input type="text" id="summary" placeholder="Enter book summary">
    <button class="button" id="saveAdd" type="button">Save</button>
    `

    const saveAdd = document.getElementById("saveAdd");
    saveAdd.addEventListener("click", () => {
        const newBook = {
            title: document.getElementById("title").value,
            count: parseInt(document.getElementById("count").value),
            author: document.getElementById("author").value,
            desce: document.getElementById("desc").value,
        };

        library.push(newBook);
        savingBook();
        tableMake();
    });
});