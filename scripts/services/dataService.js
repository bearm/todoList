'use strict';

angular.module("todoListApp")
    .service('dataService', function($http){
        this.getTodos = function(successCallback){
            $http.get('mock/todos.json').then(successCallback);
        };
        this.deleteTodo = function(todo){
            console.log("the" + todo.name + " has been deleted");
            // todo add the comunication with the api to delete the item
        };
        this.saveTodos = function(todos){
            console.log(todos.length + " has been edited and saved");
            console.log(todos);
            // todo add the comunication with the api to save the item
        }
    });