app.controller('detalleCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){
	
    
    $scope.detalleIndicador = $routeParams.indicador;
    
    var urlInicio = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/';
    var urlFin = '?apikey=0a24a68c0759c01066031f79a632c6d582ec4343&formato=json';

    var d = new Date();
    var fechaBusqueda = d.getFullYear() + "/" + (d.getMonth()+1);
    var diasBusqueda = (d.getDate()-10);
    $scope.infoIndicadores = {};
    
    $scope.datasetGrafico =  {};
    var valores = [];
    var fechas = [];



    if($scope.detalleIndicador === "Dolar"){

        let url = urlInicio.concat($scope.detalleIndicador.toLowerCase(),urlFin);
        $http.get(url).then(function(response){
            
            $scope.infoIndicadores = response.data.Dolares;

        });

        let dataGraficoUrl = urlInicio.concat($scope.detalleIndicador.toLowerCase(),'/posteriores/', fechaBusqueda ,'/dias/', diasBusqueda , urlFin);

        $http.get(dataGraficoUrl).then(function(response){
            
            $scope.datasetGrafico = response.data.Dolares;

            Object.entries(response.data.Dolares).forEach(([key, val]) => {
                fechas.push(val.Fecha)
                valores.push(val.Valor);
            });
 
        });
        


    }else if($scope.detalleIndicador === "Euro"){

        let url = urlInicio.concat($scope.detalleIndicador.toLowerCase(),urlFin);
        $http.get(url).then(function(response){
            
            $scope.infoIndicadores = response.data.Euros;
             
        });

        
        let dataGraficoUrl = urlInicio.concat($scope.detalleIndicador.toLowerCase(),'/posteriores/',fechaBusqueda,'/dias/', diasBusqueda ,urlFin);

        $http.get(dataGraficoUrl).then(function(response){
        
            Object.entries(response.data.Dolares).forEach(([key, val]) => {
                fechas.push(val.Fecha)
                valores.push(val.Valor);
            });

        });

    }else if($scope.detalleIndicador === "IPC"){
        
        let url = urlInicio.concat($scope.detalleIndicador.toLowerCase(),urlFin);
        $http.get(url).then(function(response){
        
            $scope.infoIndicadores = response.data.IPCs;
    
        });

        var fechaBusquedaIPC = (d.getFullYear() - 1) + "/" + (d.getMonth());
        let dataGraficoUrl = urlInicio.concat($scope.detalleIndicador.toLowerCase() ,'/posteriores/', fechaBusquedaIPC ,urlFin);

        $http.get(dataGraficoUrl).then(function(response){
            
            Object.entries(response.data.Dolares).forEach(([key, val]) => {
                fechas.push(val.Fecha)
                valores.push(val.Valor);
            });

        });

    }else if($scope.detalleIndicador === "UF"){

        let url = urlInicio.concat($scope.detalleIndicador.toLowerCase(),urlFin);
        $http.get(url).then(function(response){
        
            $scope.infoIndicadores = response.data.UFs;
    
        });

        let dataGraficoUrl = urlInicio.concat($scope.detalleIndicador.toLowerCase(),'/posteriores/', fechaBusqueda ,'/dias/', diasBusqueda ,urlFin);

        $http.get(dataGraficoUrl).then(function(response){
            
            Object.entries(response.data.Dolares).forEach(([key, val]) => {
                fechas.push(val.Fecha)
                valores.push(val.Valor);
            });

        });


    }else if($scope.detalleIndicador === "UTM"){

        let url = urlInicio.concat($scope.detalleIndicador.toLowerCase(),urlFin);
        $http.get(url).then(function(response){

            $scope.infoIndicadores = response.data.UTMs;
    
        });
        
        let fechaBusquedaUTM = (d.getFullYear() - 1) + "/" + (d.getMonth()+1);
        let dataGraficoUrl = urlInicio.concat( $scope.detalleIndicador.toLowerCase(),'/posteriores/', fechaBusquedaUTM ,urlFin);

        $http.get(dataGraficoUrl).then(function(response){
            
            Object.entries(response.data.Dolares).forEach(([key, val]) => {
                fechas.push(val.Fecha)
                valores.push(val.Valor);
            });

        });

    }else{
        window.location.href = '/';
    }

    const labels = fechas;
 
    const dataset1 = {
        label: "Comportamiento",
        data: valores,
        borderColor: 'rgba(248, 37, 37, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const graph = document.querySelector("#graph");
    
    const data = {
        labels: labels,
        datasets: [dataset1]
    };
    
    const config = {
        type: 'line',
        data: data,
    };
    
    new Chart(graph, config);



}]);