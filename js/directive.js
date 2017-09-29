angular.module("TodoDirective", [])
    .directive("todoTable", function() {
        return {
            restrict: "A",
            templateUrl:"template/directives/todo-table.html"
        };
    })