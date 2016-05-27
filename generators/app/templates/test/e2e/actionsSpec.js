/*jshint node:true */
'use strict';

describe('E2E: Testing Actions', function () {

    describe ('theme page', function () {

        beforeAll( function () {
            browser.setLocation('app/components');
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
