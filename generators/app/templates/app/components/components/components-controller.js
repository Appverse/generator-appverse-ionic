/*
 Copyright (c) 2015 GFT Appverse, S.L., Sociedad Unipersonal.
 This Source Code Form is subject to the terms of the Appverse Public License
 Version 2.0 (â€œAPL v2.0â€?). If a copy of the APL was not distributed with this
 file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the conditions of the AppVerse Public License v2.0
 are met.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

angular.module('App.Controllers')

    .controller('ComponentsController',
        ['$log', '$scope', '$ionicModal', '$ionicActionSheet', '$timeout', '$ionicLoading', '$ionicPopover', '$ionicPopup',
        function ($log, $scope, $ionicModal, $ionicActionSheet, $timeout, $ionicLoading, $ionicPopover, $ionicPopup) {
            $log.debug('ComponentsController loading');

            $scope.data = {
                showDelete: false
            };

            $scope.edit = function (item) {
                alert('Edit Item: ' + item.id);
            };
            $scope.share = function (item) {
                alert('Share Item: ' + item.id);
            };

            $scope.moveItem = function (item, fromIndex, toIndex) {
                $scope.ionListItems.splice(fromIndex, 1);
                $scope.ionListItems.splice(toIndex, 0, item);
            };

            $scope.onItemDelete = function (item) {
                $scope.ionListItems.splice($scope.ionListItems.indexOf(item), 1);
            };

            $scope.ionListItems = [{
                id: 0
            }, {
                    id: 1
                }, {
                    id: 2
                }, {
                    id: 3
                }, {
                    id: 4
                }, {
                    id: 5
                }, {
                    id: 6
                }, {
                    id: 7
                }, {
                    id: 8
                }, {
                    id: 9
                }, {
                    id: 10
                }, {
                    id: 11
                }, {
                    id: 12
                }, {
                    id: 13
                }, {
                    id: 14
                }, {
                    id: 15
                }];

            //ACTIONSHEET EXAMPLE
            $scope.showActionsheet = function () {

                // Show the action sheet
                var hideSheet = $ionicActionSheet.show({
                    buttons: [{
                        text: '<i class="icon ion-social-facebook"></i>Share in Facebook'
                    }, {
                            text: '<i class="icon ion-social-instagram"></i>Share in Instagram'
                        }, {
                            text: '<i class="icon ion-social-twitter"></i>Share in Twitter'
                        }],
                    titleText: 'This is an actionsheet',
                    cancel: function () {
                        // add cancel code..
                    },
                    buttonClicked: function (index) {
                        return true;
                    }
                });

                // For example's sake, hide the sheet after two seconds
                $timeout(function () {
                    //hideSheet();
                }, 3000);

            };

            //LOADING EXAMPLE
            $scope.showLoading = function () {
                $ionicLoading.show({
                    template: '<ion-spinner class="spinner-light" icon="spiral"></ion-spinner> <span>Loading...</span>'
                });
                $timeout(function () {
                    $scope.hideLoading();
                }, 3000);
            };
            $scope.hideLoading = function () {
                $ionicLoading.hide();
            };

            //MODAL EXAMPLE
            $ionicModal.fromTemplateUrl('/components/components/modal-template-mobile.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function () {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function () {
                // Execute action
            });
            //MODAL EXAMPLE

            //POPOVER EXAMPLE
            $ionicPopover.fromTemplateUrl('/components/components/popover-template-mobile.html', {
                scope: $scope,
                animation: 'fade-in'
            }).then(function (popover) {
                $scope.popover = popover;
            });


            $scope.openPopover = function ($event) {
                $scope.popover.show($event);
            };
            $scope.closePopover = function () {
                $scope.popover.hide();
            };
            //Cleanup the popover when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.popover.remove();
            });
            // Execute action on hide popover
            $scope.$on('popover.hidden', function () {
                // Execute action
            });
            // Execute action on remove popover
            $scope.$on('popover.removed', function () {
                // Execute action
            });
            //POPOVER EXAMPLE

            //POPUP EXAMPLE
            $scope.showPopup = function () {
                $scope.data = {};

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: '<input type="password" ng-model="data.wifi">',
                    title: 'Enter Wi-Fi Password',
                    subTitle: 'Please use normal things',
                    scope: $scope,
                    buttons: [{
                        text: 'Cancel'
                    }, {
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        }]
                });
            };

            $scope.showConfirm = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Use Appverse-Ionic-Theme',
                    template: '<div class="text-center">Are you sure you want to use it?</div>'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                    }
                });
            };

            $scope.showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning!',
                    template: '<div class="text-center">This theme is too good for you to handle!</div>'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for using Appverse Ionic Theme');
                });
            };
            //POPUP EXAMPLE

            //SLIDER EXAMPLE
            $scope.sliderOptions = {
                loop: false,
                speed: 500,
            }
            $scope.data = {};
            $scope.$watch('data.slider', function (nv, ov) {
                $scope.slider = $scope.data.slider;
            });


        }]);
