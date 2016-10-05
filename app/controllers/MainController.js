(function() {

	var MainController = function ($scope) {
		//var listRow = '';
		var val= 3;

		$scope.list = [{
			val:1,
			row: 'TEST',
			checked: false
		},
		{
			val:2,
			row: 'Test2',
			checked: true
		}];
		$scope.listRow = '';
		$scope.test = 'HELLOOO'
		
		$scope.submit = function() {
			if ($scope.listRow) {
				this.val += 1;
				$scope.list.push({
					row: this.listRow,
					checked: false,
					val: this.val
				});
				this.val += 1;
				$scope.listRow = '';
			}
		};
	};

	MainController.$inject = ['$scope'];

	angular.module('listopheApp').controller('MainController', MainController);

})();