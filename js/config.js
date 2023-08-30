app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'vistas/inicio.html'
		})
		.when('/listaValores/:indicador',{
			templateUrl: 'vistas/listaValores.html',
			controller:"listaValoresCtrl"
		})
		.when('/detalle/:indicador',{
			templateUrl: 'vistas/detalle.html',
			controller:"detalleCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});


});