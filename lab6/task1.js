// This is Task 1 of the Assignment lab 6 on 14/02/2025

// task: Implement a script that creates a file named notes.txt and writes "Hello, this is a Node.js file!" into it

const fs = require("fs")
fs.writeFile("notes.txt", "Hello This is a node.js file!!",(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log("\nfile created sucessfully !!\n")
    }
})

fs.appendFile("notes.txt", "\nI am writing this content by using fs.appendFile(\"\")  ",(err) =>{
    if(err){
        console.log(err)

    }
    else{
        console.log("append successfully!!\n");
    }
})

fs.readFile("notes.txt",{encoding:"utf-8"},(err,data) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data),
        console.log("\nreaded syccessfully !!\n")
    }
})

