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

    vm.completeTask = function(index){
        vm.list[index].completed = true;

    } 

    vm.addTask = function (newTask) {
        vm.list.push({
        task:newTask,
        completed: false
        });

    }

    vm.removeTask = function ($index) {
        console.log(`${$index} You ARE the weakest link.`);
        vm.list.splice($index,1);
    }
}

angular
    .module("todoApp")
    .controller("todoController", todoController)