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
    .controller('ThemeController',
        function ($log, $scope) {
            $log.debug('ThemeController loading'); 
            $scope.listElements = [{
                name: "List element 1",
                icon: "icon ion-email",
                button: "button button-positive",
                buttonicon: "icon ion-email"
            }, {
                    name: "List element 2",
                    icon: "icon ion-chatbubble-working",
                    button: "button button-calm",
                    buttonicon: "icon ion-ios-telephone"
                }, {
                    name: "List element 3",
                    icon: "icon ion-mic-a",
                    button: "button button-assertive",
                    buttonicon: "icon ion-trash-a"
                }, {
                    name: "List element 4",
                    icon: "icon ion-upload",
                    button: "button button-balanced",
                    buttonicon: "icon ion-upload"
                }, {
                    name: "List element 5",
                    icon: "icon ion-clock",
                    button: "button button-energized",
                    buttonicon: "icon ion-refresh"
                }, {
                    name: "List element 6",
                    icon: "icon ion-music-note",
                    button: "button button-royal",
                    buttonicon: "icon ion-android-download"
                }, {
                    name: "List element 7",
                    icon: "icon ion-android-playstore",
                    button: "button button-dark",
                    buttonicon: "icon ion-android-cart"
                }, {
                    name: "List element 8",
                    icon: "icon ion-android-compass",
                    button: "button button-stable",
                    buttonicon: "icon ion-android-pin"
                }];
            $scope.listDividersElements = [{
                name: "Divider 1",
                class: "item item-divider"
            }, {
                    name: "List element 1",
                    class: "item"
                }, {
                    name: "List element 2",
                    class: "item"
                }, {
                    name: "Divider 2",
                    class: "item item-divider"
                }, {
                    name: "List element 3",
                    class: "item"
                }, {
                    name: "List element 4",
                    class: "item"
                }, {
                    name: "List element 5",
                    class: "item"
                }, {
                    name: "List element 6",
                    class: "item"
                }];
        });