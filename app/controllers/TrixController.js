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
            
            //Minimum number of trix is 1, max 7
            var noTrix = Math.floor((Math.random() * 4) + 2);
            var trixString = '';
            for (var i=0; i < noTrix;i++){
                trixString += getRandomTrick() + ' <span style="opacity: .3;"> + </span>';
            }
            trixString += getRandomTrick();
            $scope.line = trixString;
        };
            
        function getRandomTrick() {
            return trixFactory.getTricks[Math.floor((Math.random() * trixFactory.getTricks.length))].trick;
        };
        
	};

	TrixController.$inject = ['$scope', 'trixFactory'];

	angular.module('listopheApp').controller('TrixController', TrixController);

})();