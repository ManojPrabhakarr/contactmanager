angular.module('FamilyCtrl', []).controller('FamilyController', function($scope, $http, $location) {

	//$scope.tagline = API_URL + 'getcount';

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
  	$http.get('/getfamilycontactdetails').then(function(response){
		var familycontactdetails = response.data;
   		$scope.familycontactdetails = familycontactdetails;
  	});

    $scope.editdoc = function(uniqueid) {     
      console.log(uniqueid);
      $location.path('/nerds/').search({id: uniqueid});
    }
    $scope.deletedoc = function(uniqueid) {     
      console.log(uniqueid);
      $http({
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            url: '/delete',
            data: {id:uniqueid
            }
        })
        .then(function() {
          alert('Contact has been Deleted successfully');
          //$location.path('/others');
          window.history.back();
          console.log("posted successfully");
        });
    }
	
});