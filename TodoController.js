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
}

angular
    .module("todoApp")
    .controller("todoController", todoController)