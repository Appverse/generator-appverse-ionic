angular.module('<%=appName%>App').directive('ionicScrolled', function($rootScope) {

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
 
