// Starting the jsl 3 js script

// Save this data in an object or array and loop through when needed
const tasks = [];
// Link each task to a unique id
let uniqueId = 0; // This will probably need to be stored and fetched/updated based on the last stored number, assign the variable to the local storage
// Button to add new tasks here to run this code as a function, makes it easier to test the codes functionality
const addTaskBtn = document.querySelector('#btn-add-task');
// Promt the user to enter title, description, and status for 2 seperate tasks
// Loop to prompt the user for 3 task entries
for(let i = 0; i < 3; i++) {
    // Store the user answers in variables
    const title = prompt(`Please enter the title of the task ${i + 1}`);
    const description = prompt('Please enter the description of the task');
    let taskStatus = prompt('Please enter the status of the task. Valid status: todo, done, doing').toLowerCase(); // Convert status inputs to lowercase
    // Validate the status inputs to only accept todo, doing, done, repeat the prompt until a valid input is entered
    // Run the prompt until the entry is valid 
    while (taskStatus !== 'done' && taskStatus !== 'doing' && taskStatus !== 'todo') {
        alert('Sorry you did not enter a valid status for the task, please enter todo, done, or doing');
        taskStatus = prompt('Please enter the status of the task. Valid status: todo, done, doing').toLowerCase();
    }
    //Increment id for each new task
    uniqueId++;
    // Create new object and push to the array
    tasks.push({
        uniqueId: uniqueId,
        title: title,
        description: description,
        status: taskStatus
    });
}
// Display the title and status of completed 'done' tasks in the console
let doneTasks = false;
for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].status === 'done') {
        console.log(`Title: ${tasks[i].title}`);
        console.log(`Status: ${tasks[i].status}`);
        doneTasks = true;
    }
}

// If no tasks are marked as 'done' display a motivational message to the user to complete a task in the console
if(!doneTasks) {
    console.log("No tasks completed, let's get to work!");
}