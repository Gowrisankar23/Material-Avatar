(function () {
    'use strict';

    var app = angular.module('SampleApp', ['materialAvatar', 'ngMaterial']);

    app.controller('MainController', function ($scope, $compile) {

        // $scope.name = "Gowrisankar Anandhan";

        $scope.createAvatar = function () {

            angular.element(document.querySelector('#target')).empty();

            var myEl = angular.element(document.querySelector('#target'));
            myEl.append($compile("<ng-avatar name='" + $scope.name + "'></ng-avatar>")($scope));
        }
    });
} ());
