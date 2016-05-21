describe("shot_listctrl", function() {
  var $scope;

  beforeEach(function() {
    module('dribbble-client-side');
    inject(function($injector) {
      $scope = $injector.get('$rootScope').$new();
    });
  });

  it("Deve mostrar uma lista shots",
    inject(function($controller) {
      $controller('shot_listctrl', {"$scope" : $scope});
      expect($scope.page).toBeDefined();
    }));
});
