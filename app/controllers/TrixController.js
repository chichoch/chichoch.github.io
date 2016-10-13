(function() {

	var TrixController = function ($scope, trixFactory) {        
        //Get list of tricks from 
        $scope.list = trixFactory.getTricks;
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
            return trixFactory.getTricks[Math.floor((Math.random() * trixFactory.getTricks.length))].trick;
        };
        
	};

	TrixController.$inject = ['$scope', 'trixFactory'];

	angular.module('listopheApp').controller('TrixController', TrixController);

})();