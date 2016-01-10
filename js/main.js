paradoxAJ = angular.module('paradoxApp', []);

var markers = [{ "position": "128.3657142857143", "markerPosition": "7" },
               { "position": "235.1944023323615", "markerPosition": "19" },
               { "position": "42.5978231292517", "markerPosition": "-3" }];


$( document ).ready(function() 
{
	console.log( "ready!" );
	
});

function SendQuery(query, callback)
{
	console.log( "send json request: " + JSON.stringify(query));
	$.ajax({
		type: 'POST',
		url: 'http://192.168.0.50:5000',
		data: JSON.stringify(callback),
		dataType: 'json',
		success: function (data) {
			console.log( "Server answer: " + JSON.stringify(data));
			callback(data);
		},
		error: function (result) {
			console.log( "Server answer: " + result.statusText);
			console.log( "Ready State: " + result.readyState);
		}
	});
}


paradoxAJ.controller('MainCtrl', function($scope) {
  /*SendQuery({"name":"andrey"}, function(answer)
  {
	$scope.phone = answer;
	$scope.$apply()
  });*/
  
  var _name = 'Brian';
  $scope.user = {
    name: function(newName) {
	 if(arguments.length)
	 {
	   SendQuery({"name":newName}, function(answer)
	   {
	     _name = answer.name;
	     $scope.$apply();
	   });
	 }
     return _name;
    }
  };
});