/**
 * Created by aitor on 19/9/16.
 */


angular.module('Rsa', []).controller('User', ['$http', '$scope', function ($http, $scope) {
    var url = "http://localhost:8080";
    var keys = {publicKey: ""};
    var msg = "Hola como estas?";


    $scope.hola = function () {
        $http.get(url + '/publickey').success(function (response) {
            console.log(response);
        });
    };
}]);