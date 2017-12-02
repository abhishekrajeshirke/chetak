var app = angular.module("chetak", ['ui.router', 'angular-owl-carousel-2', 'ngScrollbars']);


app.config(function($stateProvider, $locationProvider) {

  // $locationProvider.html5Mode(true);
  var home = {
    name: 'home',
    url: '/home',
    templateUrl: 'templates/home.html'
  }

  var about = {
    name: 'about',
    url: '/about',
    templateUrl: 'templates/about.html'
  }

  var management = {
    name: 'management',
    url: '/management',
    templateUrl: 'templates/management.html'
  }

  var under_construction_projects = {
    name: 'under_construction',
    url: '/projects/under-construction',
    templateUrl: 'templates/projects_under_construction.html'
  }

  var operational_projects = {
    name: 'operational',
    url: '/projects/operational',
    templateUrl: 'templates/projects_operational.html'
  }

  var completed_projects = {
    name: 'completed',
    url: '/projects/completed',
    templateUrl: 'templates/projects_completed.html'
  }

  var international_projects = {
    name: 'international',
    url: '/projects/international',
    templateUrl: 'templates/projects_international.html'
  }

  var financials = {
    name: 'financials',
    url: '/financials',
    templateUrl: 'templates/financials.html'
  }

  var clients = {
    name: 'clients',
    url: '/clients',
    templateUrl: 'templates/clients.html'
  }

  var contact = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'templates/contact.html'
  }

  $stateProvider.state(home);
  $stateProvider.state(about);
  $stateProvider.state(management);
  $stateProvider.state(under_construction_projects);
  $stateProvider.state(operational_projects);
  $stateProvider.state(completed_projects);
  $stateProvider.state(international_projects);
  $stateProvider.state(financials);
  $stateProvider.state(clients);
  $stateProvider.state(contact);

});

app.run( ['$rootScope', '$state', '$stateParams',
  function ($rootScope,   $state,   $stateParams) {
    $rootScope.state = $state;
    $rootScope.stateParams = $stateParams;
  }
]);


app.controller("mainCtrl", function($scope, appService, $state, $rootScope){

  appService.getData().then(function (response) {
    console.log(response);
    $scope.appData = response[0];
    console.log($scope.appData);



  });


});

app.controller("homeCtrl", function ($scope, $timeout) {
  $(document).ready(function () {

    $scope.properties = {

        onChange: function () {
            console.dir(arguments);
        },
        items:1,
        nav:true,
        autoplay:true,
        dots:false,
        nav:true
    };

    $scope.ready = function ($api) {
        owlAPi = $api;
    };

    $timeout(function () {
        console.dir(owlAPi);
        owlAPi.trigger('next.owl.carousel',[2000]);
    }, 2000)


  });
})


app.controller("aboutCtrl", function($scope){

});

app.controller("managementCtrl", function($scope){

  $scope.activeDirector = $scope.appData.management[0];
  $scope.changeDirector = function(director){
    $scope.activeDirector = director;
  }
});

app.controller("financialsCtrl", function($scope){

});

app.controller("projectsCtrl", function($scope, $timeout, $sce, $state){
  $scope.renderedProjects = {
    operational:[],
    under_construction:[],
    completed:[],
    international:[]
  }

  $scope.trustSrc = function(src){
    return $sce.trustAsResourceUrl(src);
  }
  
  for(var key in $scope.appData.projects){
    var project = $scope.appData.projects[key];
    if(project.type == "Operational"){
      $scope.renderedProjects.operational.push(project);
    }
    if(project.type == "Under Construction"){
      $scope.renderedProjects.under_construction.push(project);
    }
    if(project.type == "Completed"){
      $scope.renderedProjects.completed.push(project);
    }
    if(project.type == "International"){
      $scope.renderedProjects.international.push(project);
    }
  }


  $scope.activeUCProject = $scope.renderedProjects.under_construction[0];
  $scope.activeOProject = $scope.renderedProjects.operational[0];
  $scope.activeCProject = $scope.renderedProjects.completed[0];
  $scope.activeIProject = $scope.renderedProjects.international[0];


  $scope.navigateToProject = function(type, project){
    console.log(project);
    switch(type){
      case "uc":
        $scope.activeUCProject = project;
        break;
      case "c":
        $scope.activeCProject = project;
        break;
      case "o":
        $scope.activeOProject = project;
        break;
      case "i":
        $scope.activeIProject = project;
        break;

    }

  }

  $scope.properties = {

      onChange: function () {
      },
      items:4,
      nav:true,
      autoplay:true,
      dots:false,
      nav:true
  };


    $scope.imgproperties = {

        onChange: function () {
        },
        items:2,
        nav:true,
        autoplay:false,
        dots:false,
        nav:true
    };

  $scope.ready = function ($api) {
      owlAPi = $api;
  };

  $timeout(function () {

      owlAPi.trigger('next.owl.carousel',[2000]);
  }, 2000);

  $scope.trustHTML = function(html) {
     return $sce.trustAsHtml(html);
   };

  $scope.activeSection = 0;

  $scope.activateSection = function(section){
    $scope.activeSection = section;
  }

  $scope.showMap = false;
  $scope.toggleMap =function(){
    $scope.showmap = !$scope.showmap;
  }

});
