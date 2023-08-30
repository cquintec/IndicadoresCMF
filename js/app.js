var app = angular.module('indicadoresCMF',['ngRoute']);

app.controller('indicadoresCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.dolar="Dolar";
	$scope.menuSuperior = 'vistas/menu.html';
	$scope.listaIndicadores = {};

	$http.get('json/indicadores.json').then(function(response){
		
		$scope.listaIndicadores = response.data;
		console.log($scope.listaIndicadores)
	});

}]);