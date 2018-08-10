"use strict";

function todoController(){
    let vm = this;
    vm.list = [
        {
            task: "Grocery Shopping",
            completed: false
        },
        {
            task: "make lunch",
            completed: false
        },
        {
            task: "laundry",
            completed: false
        },
        {
            task: "water plants",
            completed: true
        },
        {
            task: "Mail letter",
            completed: false
        }
        
    ];

    vm.finishedTask = function(index){
        console.log("test");
        vm.list[index].completed = true;

    } 
}

angular
    .module("todoApp")
    .controller("todoController", todoController)