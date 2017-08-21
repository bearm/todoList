'use strict';

angular.module('todoListApp')
    .controller('mainCtrl', function ($scope, dataService) {

        dataService.getTodos(function (response) {
            $scope.todos = response.data;
        });

        $scope.saveTodos = function () {
            var filteredTodos = $scope.todos.filter(function(todo){
                if (todo.edited){
                    return todo;
                }
            });
            dataService.saveTodos(filteredTodos);
        };

        $scope.deleteTodo = function (todo, index) {
            dataService.deleteTodo(todo);
            $scope.todos.splice(index, 1)
        };

        $scope.addTodo = function () {
            var todo = {
                name: "this is a todo new"
            };
            $scope.todos.unshift(todo);
        };
    })