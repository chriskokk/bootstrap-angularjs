// Code goes here

jQuery('document').ready( function ($) {
  
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  
  $("#register").click(function() { 
    $("#loginform").removeClass("d-block").addClass("d-none");
    $("#registerform").removeClass("d-none").addClass("d-block");
  });
  $("#reg-cancel").click(function() { 
    $("#registerform").removeClass("d-block").addClass("d-none");
    $("#loginform").removeClass("d-none").addClass("d-block");
  });
});


(function () {
    'use strict';
    var App = angular.module("login_form", []);
    App.factory("LS", function($window, $rootScope) {
        return {
            setData: function (key , val) {
                $window.localStorage && $window.localStorage.setItem(key , val);
                return this;
            },
            getData: function (key) {
                return $window.localStorage && $window.localStorage.getItem(key);
            }
        };
    });
      var myusername = LS.getData('username');
    var mypassword = LS.getData('password');
        $scope.form={
            "username":"",
            "password":""
        };
        $scope.rememberMe1 = function () {
            LS.setData("username", $scope.form.username);
        };
        $scope.rememberMe1 = function () {
            LS.setData("password", $scope.form.password);
        };
        $scope.submitLogin=function(){
            $scope.form.username = myusername;
            $scope.form.password = mypassword;
        };
     function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home.html'
            })
            .otherwise({ redirectTo: '/index.html' });
    }
    
    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
    }

})();