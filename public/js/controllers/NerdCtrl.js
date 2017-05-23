angular.module('NerdCtrl', []).controller('NerdController', function($scope, $location, $http, $routeParams) {

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

	$scope.init = function () {
    	$http.get('/getcontactdetailsbyid?id='+$routeParams.id).then(function(response) {
          var contactdetails = response.data;
          console.log();
          $scope.update.username = contactdetails.name;
          $scope.update.company = contactdetails.company;
          $scope.update.email = contactdetails.email;
          $scope.update.phone = contactdetails.phone;
          $scope.update.address = contactdetails.address;
          $scope.update.group = contactdetails.group;
        });
	};
	$scope.update = function(){       
        $http({
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            url: '/update',
            data: {id:$routeParams.id,
            	name:$scope.update.username,
              company:$scope.update.company,
              email:$scope.update.email,
              phone:$scope.update.phone,
              address:$scope.update.address,
              group:$scope.update.group
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