(function() {

	var ListController = function ($scope, $routeParams, listFactory) {
		//Use socket!
        var listId = $routeParams.listId;
        
        $scope.listRow = '';
		$scope.test = 'HELLOOO'
        $scope.list = listFactory.getTricks;
        $scope.line = '';
        
        newLine();
        
        $scope.submit = function() {
		      //Random gör en ny line på 3 trick.
            newLine();
		};
        
        function newLine() {
            var trick1 = getRandomTrick() + ' + ';
            var trick2 = getRandomTrick() + ' + ';
            var trick3 = getRandomTrick();
            $scope.line = trick1 + trick2 + trick3;
        };
            
        function getRandomTrick() {
            return listFactory.getTricks[Math.floor((Math.random() * listFactory.getTricks.length))].trick;
        };
        
	};

	ListController.$inject = ['$scope', '$routeParams', 'listFactory'];

	angular.module('listopheApp').controller('ListController', ListController);

})();