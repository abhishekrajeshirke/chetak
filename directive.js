app.directive("primaryNav", function($http, $q){
  return {
    templateUrl : "templates/nav.html"
  };
});

app.directive("homeNav", function($http, $q){
  return {
    templateUrl : "templates/homenav.html"
  };
});

app.directive("bgFooter", function($http, $q){
  return {
    template : "<footer></footer>"
  };
});
