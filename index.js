#! /usr/bin/env node
import inquirer from "inquirer";
//todolist empty array
let todolist = [];
let conditions = true;
// while(conditions){
//     let addtask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: "Enter your task: ",
//         },
//     ]);
//     //use push method to add elements
//     todolist.push(addtask.task);
//     console.log(chalk.greenBright.bold(`${addtask.task} is added in todolit successfully`));
//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             //confirm type saves answer in form of true or false
//             message: "Do you want to add more task?",
//             //by default it is set as false
//             default: "False",
//         },
//     ]);
//     conditions = addMoreTask.addmore
// }
// //to print list in array form
// console.log(`Your updates Todo List:`, todolist );
//syntax to make arrow function
let main = async () => {
    //loop run in arrow function
    while (conditions) {
        //to take input from user
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option:",
                choices: ["Add task", "Delete task", "Update task", "view todo list", "exit"],
            },
        ]);
        if (option.choice === "Add task") {
            //to call addTask function
            await addTask();
        }
        else if (option.choice === "Delete task") {
            //to call deleted task function
            await deleteTask();
        }
        else if (option.choice === "Update task") {
            //to call deleted task function
            await updateTask();
        }
        else if (option.choice === "view todo list") {
            //to call view todo List
            await viewTask();
        }
        else if (option.choice === "exit") {
            //when user want to exit this block will run
            //flase condition will stop while loop
            conditions = false;
        }
    }
};
//function for adding task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        },
    ]);
    //.puch is used to add element
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in TodoList`, todolist);
};
//function to view todo list
let viewTask = () => {
    console.log("Your todo list:");
    //to print task with index number one by one
    //varible will be save in "task"
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//function to update task
let updateTask = async () => {
    //to show latest todolist before any update
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task you want to update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task:",
        },
    ]);
    //to update old one with new one
    todolist[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no: ${update_task_index.index - 1} updated successfully. If you want to check updated list, select view todolist option.`);
};
//function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of task you want to delete",
        },
    ]);
    //to delete user selected single element
    let deletedTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`${deletedTask} this task has been deleted successfully from your todolist`, todolist);
};
main();
