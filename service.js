app.service("appService", function($http, $q){

  this.getData = function(){
    var posts;
    // create deferred object using $q
    var deferred = $q.defer();
    // var endpoint = 'http://localhost:1337/application';
    endpoint = 'data.json';
    // get posts form backend
    $http.get(endpoint)
     .then(function(result) {
       // save fetched posts to the local variable
       data = result.data;

       // resolve the deferred
       deferred.resolve(data);
     }, function(error) {
       posts = error;
       deferred.reject(error);
     });

     // set the posts object to be a promise until result comeback
      data = deferred.promise;

      return $q.when(data);
    }



});
