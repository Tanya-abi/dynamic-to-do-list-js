document.addEventListener('DOMContentLoaded', () => { // Ensure the code runs after the DOM has loaded
    // Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list'); // Fixed typo in 'document'

    // Create the addTask Function:
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Input empty! Please fill in task.");
            return;
        }

        // Task Creation and Removal:
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const newBtn = document.createElement('button');
        newBtn.textContent = "Remove";
        newBtn.className = 'remove-btn';

        // Remove button that, when triggered, removes the li element from taskList
        newBtn.onclick = () => {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(newBtn);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear input after adding task
    }

    // Attach Event Listeners:
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

       


