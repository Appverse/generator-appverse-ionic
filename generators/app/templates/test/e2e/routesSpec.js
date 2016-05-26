/*jshint node:true */
'use strict';

describe('E2E: Testing Routes', function () {

    it('should jump to the /home path when / is accessed', function () {
        browser.setLocation('');
        expect(browser.getLocationAbsUrl()).toBe('/app/home');
    });

    it('should have a working /theme route', function () {
        browser.setLocation('app/theme');
        expect(browser.getLocationAbsUrl()).toBe('/app/theme');
    });

    it('should have a working /components route', function () {
        browser.setLocation('app/theme');
        expect(browser.getLocationAbsUrl()).toBe('/app/theme');
    });

    it('should have a working /charts route', function () {
        browser.setLocation('app/charts');
        expect(browser.getLocationAbsUrl()).toBe('/app/charts');
    });

});
