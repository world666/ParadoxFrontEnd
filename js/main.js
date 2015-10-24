paradoxAJ = angular.module('paradoxApp', []);

var markers = [{ "position": "128.3657142857143", "markerPosition": "7" },
               { "position": "235.1944023323615", "markerPosition": "19" },
               { "position": "42.5978231292517", "markerPosition": "-3" }];


$( document ).ready(function() 
{
	console.log( "ready!" );
	$.ajax({
		type: 'POST',
		url: 'http://192.168.1.11:5000',
		data: JSON.stringify({ Markers: markers }),
		dataType: 'json',
		success: function (data) {
			if (data.response == 'captcha') {
				alert('captcha');
			} else if (data.response == 'success') {
				alert('success');
			} else {
				alert('sorry there was an error');
			}
		},
		error: function (result) {
			alert("Error");
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