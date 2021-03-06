'use strict';

/**
 * @ngdoc overview
 * @name saweApp
 * @description
 * # saweApp
 *
 * Main module of the application.
 */
angular
  .module('saweApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'DataCtrl',
        controllerAs: 'data'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
   .controller('DataCtrl',['$scope','$http', function ($scope,$http) {

      $http.get('Data/Projects.json').then(function(result){
           $scope.Projects = result.data;
          $scope.ProjectRows =$scope.getRows(result.data,3);
           

      });

         $http.get('Data/AboutUs.json').then(function(result){
          $scope.AboutUsRows= $scope.getRows(result.data,3);
      });

        $http.get('Data/Achievements.json').then(function(result){
          $scope.Achievements = result.data;
      });

        $http.get('Data/Team.json').then(function(result){
          $scope.TeamData = result.data;
          $scope.Team = $scope.getRows(result.data.team,4);
          $scope.helpingHands = $scope.getRows(result.data.helpingHands,6)
       
      });

    $scope.getRows = function(array, columns) {
        var arr = [];
        var i,j,temparray, chunk = columns;
            
        for (i=0,j=array.length; i<j; i+=chunk)
            {
                temparray = array.slice(i, i+chunk);
                arr.push(temparray);
            }
            return arr;
        }

        $scope.projectDetails= function(id){
          $scope.projectData = getById( $scope.Projects,id)
          console.log( $scope.projectData);
        };



        function getById(arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].projectId === id) {
                    return arr[d];  
                }
            }
        }

  }]);

  
