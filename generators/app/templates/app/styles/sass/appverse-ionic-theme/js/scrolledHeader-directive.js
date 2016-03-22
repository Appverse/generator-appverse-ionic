angular.module('starter').directive('ionicScrolled', function($rootScope) {

  return {
    link: function(scope, element, attrs, ctrl) {
      var prevScroll = 0;

      element.bind('scroll', function() {
        if (this.scrollTop > 20) {
          $rootScope.scrolledHeader = true;
          element.addClass('scrolled');
        } else {
          $rootScope.scrolledHeader = false;
          element.removeClass('scrolled');
        }

        if (this.scrollTop <= prevScroll) {
          $rootScope.scrolledHeader = false;
          element.removeClass('scrolled');
        }

        prevScroll = this.scrollTop;
        $rootScope.$apply();
      });

    }
  };
});

// angular.module('starter').directive('scrollWatch', function($rootScope) {
//   return function(scope, elem, attr) {
//     var start = 0;
//     var threshold = 40;
//
//     elem.bind('scroll', function(e) {
//       if (e.detail.scrollTop - start > threshold) {
//         $rootScope.slideHeader = true;
//       } else {
//         $rootScope.slideHeader = false;
//       }
//       if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
//         $rootScope.slideHeader = false;
//       }
//       $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
//       $rootScope.$apply();
//     });
//   };
// });
