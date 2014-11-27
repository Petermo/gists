/**
 * Created by peter on 23-11-14.
 */
var app = angular.module('demo', ['ngMaterial']);

app.controller('AppCtrl', function($scope,$mdSidenav) {
    var item = {
        face: '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        notes: "I'll be in your neighborhood doing errands."
    };
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
        $scope.todos.push({
            number: i,
            width: (Math.random()*100) > 80 ? 66 : 33,
            face: '/img/list/60.jpeg',
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }
	$scope.menuList = [];

    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };

    $scope.list = function() {
        return Array($scope.todos.length);
    }

	$scope.moveCardToMenu = function(cardNumber) {
		console.log(event);
		$scope.menuList.push($scope.todos.filter(function(elem) { return elem.number == cardNumber; })[0]);
		$scope.todos = $scope.todos.filter(function(elem) { return elem.number != cardNumber; });
	}
	$scope.moveCardToMain = function(cardNumber) {
		console.log(event);
		$scope.todos.push($scope.menuList.filter(function(elem) { return elem.number == cardNumber; })[0]);
		$scope.menuList = $scope.menuList.filter(function(elem) { return elem.number != cardNumber; });
	}
});

app.filter('offset', function() {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});