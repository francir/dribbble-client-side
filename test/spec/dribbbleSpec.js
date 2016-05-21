describe("dribbble", function() {
  var dribbble;

  beforeEach(function() {
    module('dribbble-client-side');
    inject(function($injector) {
      dribbble = $injector.get('dribbble');
    });
  });

  it("Deve retornar uma lista shots",
    inject(function($controller) {
      dribbble.list(1).then(function (data){
        expect(data.length).toBeGreaterThan(0);
      })

    }));
});
