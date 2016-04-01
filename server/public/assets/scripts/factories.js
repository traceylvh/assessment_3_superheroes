myApp.factory("HeroService", ["$http", function($http){
    var heroData = {};

    var getData = function(){
        $http.get("/heroes").then(function(response){
          console.log(response.data);
          heroData.allHeroes = response.data;
          console.log(heroData.allHeroes);
        });
    };

    var postData = function(data){
        $http.post("/heroes", data).then(function(response){
          console.log(response.data);
          getData();
        });
    };

    var deleteData = function(data){
      $http.delete("/heroes/" + data).then(function(response){
        getData();
      });
    };

    return {
      postData: postData,
      getData: getData,
      heroData: heroData,
      deleteData: deleteData
    };
}]);
