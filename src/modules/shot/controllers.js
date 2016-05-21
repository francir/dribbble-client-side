(function(angular){
    'use strict';
    var app = angular.module('dribbble-client-side');
    app.controller('shot_listctrl', function($scope, dribbble){
      //var list = $routeParams.list;

      $scope.page = 1;

      var promise = dribbble.list($scope.page).then(function (data){
        console.log(data)
        $scope.list = data.data;
        return 'something';
      })

      promise.then(function(data) {
        console.log(data === "something");
      });

      $scope.loadNexPage = function(){
        $scope.page += 1;

        dribbble.list($scope.page).then(function(data) {
            console.log(data);
            $scope.list.data = $scope.list.data.concat(data.data.data);
        });
      }
    });

    app.controller('shotctrl', function($scope, dribbble, $routeParams){
      var id = $routeParams.id;
      dribbble.shot(id).then(function (data){
          $scope.shot = data.data;
          console.log(data);
      });

      dribbble.comments(id).then(function (data){
          $scope.comments = data.data;
          console.log(data);
      });
    });

})(angular);
