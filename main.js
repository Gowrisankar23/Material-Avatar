(function () {
    'use strict';

    var app = angular.module('SampleApp', ['materialAvatar', 'ngMaterial']);

    app.controller('MainController', function ($scope, $compile) {

        // $scope.name = "Gowrisankar Anandhan";

        $scope.avatar = {
            name: "Gowrisankar Anandhan",
            img: "@",
            size: "100",
            fontSize: "50",
            shape: "circle",
            bgColor: "",
            charCount: "2",
            rotateDeg: "35",
            border: "black",
            customBorder: "2px solid black",
            textColor: "green"

        };

        $scope.createAvatar = function () {

            angular.element(document.getElementById('target')).empty();

            var myEl = angular.element(document.getElementById('target'));
            myEl.append($compile("<ng-avatar name='" + $scope.avatar.name + "' size='" + $scope.avatar.size + "' font-size='" + $scope.avatar.fontSize + "'  shape='" + $scope.avatar.shape + "' rotate-deg='" + $scope.avatar.rotateDeg + "'></ng-avatar>")($scope));
        }
    });
} ());
