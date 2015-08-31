(function () {
    'use strict';

    angular.module('ExampleApp')
        .directive('kingContainerResize', KingContainerResizeDirective);

    function KingContainerResizeDirective($window){
        return function (scope, element) {
            var w = angular.element($window);
            var changeHeight = function() {


                var newHeight = $window.innerHeight - 350;
                if(newHeight > 100){
                    console.log("AHHHH: ", newHeight)
                    element.css('height', (w.height() - 250) + 'px' );
                }
            };

            w.bind('resize', function () {
                changeHeight();   // when window size gets changed
            });
            changeHeight(); // when page loads
        }
    }
})();