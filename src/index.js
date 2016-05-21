(function (angular) {
  var app =  angular.module('dribbble-client-side', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'modules/shot/shot_list.html' })
      .when("/shots/:id", { templateUrl: "modules/shot/shot.html"})
      .otherwise({redirectTo: "/"});

  });

})(angular);
