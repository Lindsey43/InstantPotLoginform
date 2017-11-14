angular.module('Login')
.controller('LogCtrl', ['$scope','LocalStorageService', 
	function($scope, LocalStorageService){
		console.log("inside LogCtrl");
		$scope.logs = 
		LocalStorageService.getLogsFromLocalStorage('gere0018-Login-logs');
		console.log($scope.logs);

}]);
