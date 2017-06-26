(function () {
    'use strict';
    angular.module('materialAvatar', [])
        .directive('ngAvatar', function () {
            return {
                restrict: "E",
                scope: {
                    name: "@",
                    img: "@",
                    size: "@",
                    fontSize: "@",
                    shape: "@",
                    bgColor: "@",
                    charCount: "@",
                    rotateDeg: "@",
                    border: "@",
                    customBorder: "@",
                    textColor: "@"

                },

                template: "<span class='md-whiteframe-2dp' "
                + " style='background: {{newColor}};"
                + "min-height:{{size}}px;"
                + "min-width:{{size}}px;"
                + "height:{{size}}px;"
                + "width:{{size}}px;"
                + "border-radius:{{radius}}%;"
                + "margin:5px;"
                + "line-height:{{size}}px;"
                + "color:{{color}};"
                + "font-size:{{fontSize}}px;"
                + "transform: rotate({{rotateDeg}}deg);"
                + "border:{{dBorder}};"
                + "text-align:center;"
                + "display:inline-block;"
                + "font-family:sans-serif;"
                + "box-shadow:0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12)"
                + "'>"
                + "{{letter}}"
                + "</span>",

                replace: true,
                link: function (scope, el, attr) {
                    scope.rotateDeg = scope.rotateDeg || 0;
                    scope.size = scope.size || "40";
                    scope.radius = 50;

                    //For Font Color
                    scope.textColor ? scope.color = scope.textColor : scope.color = "#ffffff";

                    //For Square Shape
                    if (scope.shape == "square") {
                        scope.radius = 0;
                    }

                    //For Border
                    if (scope.border) {
                        scope.dBorder = "2px solid #999999";
                    }
                    //For Custom Border
                    if (scope.customBorder) {
                        scope.dBorder = scope.customBorder;
                    }

                    function twoChar(fullName) {
                        this.letters = fullName.split(" ");
                        return this.letters[1] ? scope.letter = (this.letters[0].charAt(0) + this.letters[1].charAt(0)).toUpperCase() : scope.letter = scope.name.charAt(0).toUpperCase()
                    }
                    var i = 0;

                    if (scope.img) {
                        scope.letter = '';
                        scope.newColor = "url(" + scope.img + ");background-size: 100% 100%";
                    } else {
                        //For CharCount
                        if (scope.charCount) {
                            scope.charCount == "1" ? scope.letter = scope.name.charAt(0).toUpperCase() : twoChar(scope.name);
                        }
                        else {
                            scope.name.split("").forEach(function (el, index) {

                                if (el.match(/^[a-zA-Z]$/)) {
                                    scope.letter = scope.name.charAt(i).toUpperCase();
                                } else {
                                    i = index + 1;
                                }
                            });
                        }

                        //For Background Color
                        if (!scope.bgColor) {
                            scope.newColor = function () {
                                var letters = '0123456789ABCDEF'.split('');
                                var newColor = '#';
                                for (var i = 0; i < 6; i++) {
                                    newColor += letters[Math.floor(Math.random() * 10)];
                                }
                                return newColor;
                            } ();
                        }
                        else {
                            scope.newColor = scope.bgColor;
                        }
                    }
                }
            };
        });

} ());