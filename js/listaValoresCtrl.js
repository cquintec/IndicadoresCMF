app.controller('listaValoresCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){
	
    $scope.tipoIndicador = $routeParams.indicador;
    $scope.infoIndicadores = {};
    $scope.listaIndicadores = {};
    var d = new Date();
    var diaInicio=d.getDate();
    var fullYear = d.getFullYear();
    var strDate = d.getFullYear() + "/" + (d.getMonth());
    var endDate = d.getFullYear() + "/" + (d.getMonth()+1);

    if($scope.tipoIndicador === "Dolar"){

        console.log('Es Dolar')
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/'+ $scope.tipoIndicador.toLowerCase() +'/periodo/'+strDate+'/dias_i/'+ diaInicio +'/'+ endDate +'/dias_f/'+ diaInicio +'?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';
       
        $http.get(url).then(function(response){
            
            $scope.listaIndicadores = response.data.Dolares;
            console.log($scope.listaIndicadores)
            
        })
      
    }else if($scope.tipoIndicador === "Euro"){
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/'+ $scope.tipoIndicador.toLowerCase() +'/periodo/'+strDate+'/dias_i/'+ diaInicio +'/'+ endDate +'/dias_f/'+ diaInicio +'?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';
        $http.get(url).then(function(response){
           
            $scope.listaIndicadores = response.data.Euros;
        })
        console.log('es Euro')
    }else if($scope.tipoIndicador === "IPC"){
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/'+ $scope.tipoIndicador.toLowerCase() +'/'+ fullYear +'?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';
        $http.get(url).then(function(response){
           
            $scope.listaIndicadores = response.data.IPCs;

        })
        console.log('IPC')
    }else if($scope.tipoIndicador === "UF"){
        console.log('UF')
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/'+ $scope.tipoIndicador.toLowerCase() +'/periodo/'+strDate+'/dias_i/'+ diaInicio +'/'+ endDate +'/dias_f/'+ diaInicio +'?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';
        $http.get(url).then(function(response){
           
            $scope.listaIndicadores = response.data.UFs;

        })
    }else if($scope.tipoIndicador === "UTM"){
        console.log('UTM')
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/'+ $scope.tipoIndicador.toLowerCase() +'/'+ fullYear +'?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';
        $http.get(url).then(function(response){
           
            $scope.listaIndicadores = response.data.UTMs;

        })
    }

}]);
