angular.module('GeekCtrl', []).controller('GeekController', function($scope, $location, $http) {

  $http.get('/getallcontactcount').then(function(response){
    var allcontact = response.data;
      $scope.allcontact = allcontact;
    });
    $http.get('/getfamilycontactcount').then(function(response){
    var familycontact = response.data;
      $scope.familycontact = familycontact;
    });
    $http.get('/getfriendscontactcount').then(function(response){
    var friendscontact = response.data;
      $scope.friendscontact = friendscontact;
    });
    $http.get('/getotherscontactcount').then(function(response){
    var othercontact = response.data;
      $scope.othercontact = othercontact;
    });


    $scope.submit = function(){
        $http({
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            url: '/insert',
            data: {name:$scope.insert.username,
              company:$scope.insert.company,
              email:$scope.insert.email,
              phone:$scope.insert.phone,
              address:$scope.insert.address,
              group:$scope.insert.group
            }
        })
        .then(function() {
          alert('Contact has been saved successfully');
          //$location.path('/');
          window.history.back();
          console.log("posted successfully");
        });
        
    }
    $scope.cancel = function () {
        window.history.back();
    };

});