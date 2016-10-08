/**
 * Created by aitor on 19/9/16.
 */


angular.module('Hack', []).controller('User', ['$http', '$scope', function ($http, $scope) {
    var url = "http://localhost:8080";


    $scope.hola = function () {
        $http.get(url + '/publickey').success(function (response) {
            console.log(response);
        });
    };
}]);