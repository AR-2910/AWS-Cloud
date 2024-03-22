function addTask(taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}

document.getElementById("todoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = document.getElementById("taskInput").value;
    if (taskText) {
        addTask(taskText);
        updateLocalStorage();
    }
});

function editTask(taskElement) {
    const taskText = taskElement.querySelector("span").textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        taskElement.querySelector("span").textContent = newText;
        updateLocalStorage();
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
    updateLocalStorage();
}

document.getElementById("taskList").addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
        editTask(e.target.parentElement);
    } else if (e.target.classList.contains("delete")) {
        deleteTask(e.target.parentElement);
    }
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTask);
}

function updateLocalStorage() {
    const taskElements = document.querySelectorAll("li");
    const tasks = [];
    taskElements.forEach((taskElement) => {
        const taskText = taskElement.querySelector("span").textContent;
        tasks.push(taskText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();
