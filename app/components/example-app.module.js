(function () {
    'use strict';

	angular.module('ExampleApp', ['ngMaterial'])
		.controller('ExampleCtrl', function($scope, $sce, $http){
			$http.get('../README.md')
			  .success(function(data) {
			  	var html = new showdown.Converter().makeHtml(data);
				$scope.markdownText = $sce.trustAsHtml(html);
			  })
			$scope.groupName = "Knowledge Share Group";
		});
})();	