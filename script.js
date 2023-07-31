function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="done-btn" onclick="markDone(this)">✓</span>
      <span class="remove-btn" onclick="removeTask(this)">Remove</span>
    `;
    taskList.appendChild(newTask);

    taskInput.value = "";
}

function markDone(doneBtn) {
    const taskItem = doneBtn.parentElement;
    taskItem.classList.toggle("done");
}

function removeTask(removeBtn) {
    const taskList = document.getElementById("task-list");
    const taskItem = removeBtn.parentElement;
    taskList.removeChild(taskItem);
}

function clearAll() {
    const taskList = document.getElementById("task-list");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}