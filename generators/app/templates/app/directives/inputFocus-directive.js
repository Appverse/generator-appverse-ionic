angular.module('<%=appName%>App').directive('input', function() {

  var FOCUS_CLASS = 'input-focused';
  return {
    restrict: 'E',
    link: function(scope, element, attrs, ctrl) {
      element.bind('focus', function() {
        element.parent().addClass(FOCUS_CLASS);
      }).bind('blur', function() {
        element.parent().removeClass(FOCUS_CLASS);
      });
    }
  };
}).directive('textarea', function() {

  var FOCUS_CLASS = 'input-focused';
  return {
    restrict: 'E',
    link: function(scope, element, attrs, ctrl) {
      element.bind('focus', function() {
        element.parent().addClass(FOCUS_CLASS);
      }).bind('blur', function() {
        element.parent().removeClass(FOCUS_CLASS);
      });
    }
  };
});
