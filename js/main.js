paradoxAJ = angular.module('paradoxApp', []);

var markers = [{ "position": "128.3657142857143", "markerPosition": "7" },
               { "position": "235.1944023323615", "markerPosition": "19" },
               { "position": "42.5978231292517", "markerPosition": "-3" }];


$( document ).ready(function() 
{
	console.log( "ready!" );
	console.log( "send json request: " + JSON.stringify({ Markers: markers }));
	$.ajax({
		type: 'POST',
		url: 'http://192.168.1.11:5000',
		data: JSON.stringify({ Markers: markers }),
		dataType: 'json',
		success: function (data) {
			console.log( "Server answer: " + JSON.stringify(data));
		},
		error: function (result) {
			console.log( "Server answer: " + result.statusText);
			console.log( "Ready State: " + result.readyState);
		}
	});
});


paradoxAJ.controller('MainCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});