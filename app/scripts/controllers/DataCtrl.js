
'use strict';

angular.module('saweApp',[])
  .controller('DataCtrl',['$scope','$http', function ($scope,$http) {

      $http.get('../../Data/Projects.json').then(function(result){
          $scope.ProjectRows =$scope.getRows(result.data,3);
           

      });

         $http.get('../../Data/AboutUs.json').then(function(result){
          $scope.AboutUsRows= $scope.getRows(result.data,3);
          console.log($scope.ProjectRows);
      });

        $http.get('../../Data/Achievements.json').then(function(result){
          $scope.Achievements = result.data;
      });

        $http.get('../../Data/Team.json').then(function(result){
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
  }]);
