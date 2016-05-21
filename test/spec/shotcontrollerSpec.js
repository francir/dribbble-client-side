describe("shot_listctrl", function() {
  var $scope;

  beforeEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    module('dribbble-client-side');
    inject(function($injector) {
      $scope = $injector.get('$rootScope').$new();
    });
  });

  it("Deve mostrar uma lista shots",
    inject(function($controller) {
      $controller('shot_listctrl', {"$scope" : $scope});
      //expect($scope.page).toBeGreaterThan(2);
      expect($scope.list).toBeDefined();
    }));
});
