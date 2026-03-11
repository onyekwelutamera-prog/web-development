// LOOP is the repetation of codes until the code is false.
// LOOP has 3 types: for, while, do while
// for loop, for of loop, for in loop 

for (let i = 10; i > 0; i--) {
    console.log(i)
}

const  person = {
    name: "Amanda",
    age: 30,
    isStudent: false,
    isPresent: true,
}

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

const students = ["Amanda", "John", "Sarah", "Michael"]

for (let student of students) {
    console.log(`hope say e dey flow ${student}`)
}

const scores = [85, 92, 78, 90, 88, 95, 80, 91, 87, 89, 93, 82, 94, 86, 90, 88, 91, 89, 92, 87, 90]

for (let score of scores) {
    switch (true) {
        case score >= 90:
            console.log(`Grade A`)
            break;
        case score >= 80:
            console.log(`Grade B`)
            break;
        case score >= 70:
            console.log(`Grade C`)
            break;
        case score >= 60:
            console.log(`Grade D`)
            break;
            case score >= 50:
                console.log(`Grade F`)
                break;
        default:
            console.log(`Invalid score`)
    }  break;
}

// SYNCHRONOUS OPERATION - the code is executed line by line, one after the other. Each line of code must finish executing before the next line can start. This can lead to blocking if a particular operation takes a long time to complete, such as fetching data from an API or reading a large file. it can also be known as call stack, where the code is executed in a specific order, and each function call is added to the stack until it is completed.
// javascript is single-threaded, meaning it can only execute one task at a time. When a long-running operation is encountered, it can block the execution of other code, leading to a poor user experience. For example, if you have a loop that takes a long time to complete, it can cause the browser to become unresponsive until the loop finishes executing.
// ASYNCHRONOUS OPERATION - allows multiple tasks to be executed concurrently without blocking the main thread. This is achieved through the use of callbacks, promises, and async/await syntax. When an asynchronous operation is initiated, it can continue to run in the background while other code continues to execute. Once the asynchronous operation is complete, a callback function can be executed to handle the result. This allows for a more responsive user experience, as the browser can continue to respond to user interactions while waiting for the asynchronous operation to complete. Asynchronous operations has two types microtask and macrotask, microtask is a task that is executed after the current task is completed, while macrotask is a task that is executed after all microtasks are completed. Examples of microtasks include promises and process.nextTick(), while examples of macrotasks include setTimeout() and setInterval().
// Promise is the object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the asynchronous operation completed successfully and the resulting value is available. When a promise is rejected, it means that the asynchronous operation failed and an error is available. You can use the .then() method to handle the fulfilled state and the .catch() method to handle the rejected state of a promise.

// MICROTASK OPERATIONS
let success = true

const myPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Promise resolved successfully!")
    } else {
        reject("Promise rejected!")
    }
})

myPromise.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
})

// MACROTASK OPERATIONS
setTimeout(() => {
    console.log("MACROTASK completed!")
}, 4000)

setInterval(() => {
    console.log("MACROTASK completed!")
}, 2000)

// VERSION CONTROL SYSTEM (VCS) - is a software tool that helps developers manage changes to their codebase over time. It allows multiple developers to collaborate on the same project, track changes, and revert to previous versions if necessary. VCS can be either centralized or distributed. Centralized VCS, such as Subversion (SVN), relies on a central server to store the codebase and manage changes. Distributed VCS, such as Git, GitHub allows each developer to have a local copy of the entire codebase and manage changes independently before pushing them to a central repository. VCS is essential for maintaining code integrity, facilitating collaboration, and enabling efficient project management in software development.
