angular.module('slider', []);

angular.module('slider').controller('sliderController', ['$scope', function ($scope) {
    'use strict';
    
    $scope.pages = ['PAGE 1', 'PAGE 2', 'PAGE 3'];
}]);

angular.module('slider').directive('dynamicSlider', ['$timeout', function ($timeout) {
    'use strict';
    
    return {
        template: '<div class="swiper-container"><div class="swiper-wrapper" data-ng-transclude></div></div>',
        
        transclude: true,
        
        replace: true,
        
        link: function (scope, element, attrs) {
            $timeout(function () {
                var mySwiper = new Swiper(element[0], {
                    mode: 'horizontal',
                    loop: true
                });
            });
        }
    };
}]);