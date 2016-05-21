(function(angular){
    'use strict';
    var app = angular.module('dribbble-client-side');
    app.factory('dribbble', function($http){

      //https://api.dribbble.com/v1/shots/?callback=JSON_CALLBACK&access_token=5014adf43e242169b45e9192952b63ae4c6a9e6f0c4451faecdeb5a4029f48c2

      function load(path, page) {
          var params = {};
          params.callback = "JSON_CALLBACK"
          params.access_token = "5014adf43e242169b45e9192952b63ae4c6a9e6f0c4451faecdeb5a4029f48c2"
          params.per_page = 20
          if(page != 0)
            params.page = page
          return $http.jsonp('http://api.dribbble.com/v1' + path , {params: params})
      }

      return {
          list: function(page) {
              return load("/shots/", page);
          },
          shot: function (id) {
              return load("/shots/" + id, 0);
          },
          comments: function (id) {
              return load("/shots/" + id + "/comments", 0);
          }
      }
    });
})(angular);
