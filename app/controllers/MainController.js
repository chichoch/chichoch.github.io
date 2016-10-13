(function () {
    var MainController = function ($scope, $location) {
        var socket = io();
        $scope.submit = function () {
            socket.emit('createNewList');
        };
        
        socket.on('createdNewList', function(id){
            $location.path('list/' + id); 
            $scope.$apply();
        });

    };
    MainController.$inject = ['$scope', '$location'];

    angular.module('listopheApp').controller('MainController', MainController);
})();
