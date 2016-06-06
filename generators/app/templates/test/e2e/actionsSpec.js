/*jshint node:true */
'use strict';

describe('E2E: Testing Actions', function () {

    describe ('components page', function () {

        beforeAll( function () {
            browser.setLocation('app/components');
        });

        it('should delete an ion-list item', function () {
            expect(element(by.css('ion-item[href="#/item/0"] .item-delete')).isDisplayed()).toBeFalsy();
            element(by.css('div.ionic-example ion-header-bar button.button-icon')).click();
            expect(element(by.css('ion-item[href="#/item/0"] .item-delete')).isDisplayed()).toBeTruthy();
            element(by.css('ion-item[href="#/item/0"] ion-delete-button')).click();
            expect(element(by.css('ion-item[href="#/item/0"]')).isPresent()).toBeFalsy();
        });

        it('should show an alert popup and then hide it', function () {
           expect(element(by.css('div.popup-showing')).isPresent()).toBeFalsy();
           element(by.css('button[ng-click="showAlert()"]')).click()
           expect(element(by.css('div.popup-showing')).isPresent()).toBeTruthy();
           element(by.css('div.popup-showing button')).click();
           expect(element(by.css('div.popup-showing')).isPresent()).toBeFalsy();
        });

        it('should change slider', function () {
            expect(element(by.css('ion-slides div.swiper-slide-active div.calm-bg')).isPresent()).toBeTruthy();
            element(by.css('div.swiper-pagination-clickable span:nth-of-type(2)')).click();
            expect(element(by.css('ion-slides div.swiper-slide-prev div.calm-bg')).isPresent()).toBeTruthy();
            expect(element(by.css('ion-slides div.swiper-slide-active div.balanced-bg')).isPresent()).toBeTruthy();
            expect(element(by.css('ion-slides div.swiper-slide-next div.energized-bg')).isPresent()).toBeTruthy();
            element(by.css('div.swiper-pagination-clickable span:nth-of-type(3)')).click();
            expect(element(by.css('ion-slides div.swiper-slide-active div.calm-bg')).isPresent()).toBeFalsy();
            expect(element(by.css('ion-slides div.swiper-slide-prev div.balanced-bg')).isPresent()).toBeTruthy();
            expect(element(by.css('ion-slides div.swiper-slide-active div.energized-bg')).isPresent()).toBeTruthy();
        });

        it('should change focus in ion-tabs', function () {
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-filing')).isPresent()).toBeTruthy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-clock-outline')).isPresent()).toBeTruthy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-filing-outline')).isPresent()).toBeFalsy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-clock')).isPresent()).toBeFalsy();
            element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a:nth-of-type(2)')).click();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-filing-outline')).isPresent()).toBeTruthy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-clock')).isPresent()).toBeTruthy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-filing')).isPresent()).toBeFalsy();
            expect(element(by.css('.ionic-example ion-tabs.tabs-color-assertive div.tabs a i.ion-ios-clock-outline')).isPresent()).toBeFalsy();
        });

    });

    describe ('theme page', function () {

        beforeAll( function () {
            browser.setLocation('app/theme');
        });

        it('select checkbox should change state', function () {
            expect(element(by.css('.checkbox-circle input[type="checkbox"]')).isSelected()).toBeFalsy();
            element(by.css('.item.item-checkbox')).click();
            expect(element(by.css('.checkbox-circle input[type="checkbox"]')).isSelected()).toBeTruthy();
        });

        it('should select only one radio button maximum', function  () {
            expect(element(by.css('input[value="A"]')).isSelected()).toBeFalsy();
            expect(element(by.css('input[value="B"]')).isSelected()).toBeFalsy();
            element(by.css('label[value="A"]')).click();
            expect(element(by.css('input[value="A"]')).isSelected()).toBeTruthy();
            expect(element(by.css('input[value="B"]')).isSelected()).toBeFalsy();
            element(by.css('label[value="B"]')).click();
            expect(element(by.css('input[value="B"]')).isSelected()).toBeTruthy();
            expect(element(by.css('input[value="A"]')).isSelected()).toBeFalsy();
        });

        it('toggle button should change state', function () {
            expect(element(by.css('.toggle input[type="checkbox"]')).isSelected()).toBeFalsy();
            element(by.css('.toggle.toggle-positive')).click();
            expect(element(by.css('.toggle input[type="checkbox"]')).isSelected()).toBeTruthy();
        });

    });
});
