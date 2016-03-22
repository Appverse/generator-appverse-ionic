'use strict';
var Chrome = require('chrome-remote-interface');

module.exports = {
    chrome: function(device, done) {
        Chrome(device, function(chrome) {
            if (device) {
                chrome.Network.setUserAgentOverride({
                    userAgent: device.userAgent
                });
                chrome.Emulation.clearDeviceMetricsOverride();
                chrome.Page.setDeviceMetricsOverride({
                    width: device.width,
                    height: device.height,
                    deviceScaleFactor: device.deviceScaleFactor,
                    mobile: device.mobile,
                    fitWindow: true
                });

                chrome.Page.setTouchEmulationEnabled({
                    enabled: device.touch,
                    configuration: 'mobile'
                })

                chrome.Inspector.enable();
                chrome.Console.enable();
                chrome.Debugger.enable();
                chrome.DOM.enable();
                chrome.Network.enable();
                chrome.Page.enable();
                chrome.on('ready', function(err) {
                    console.log('Connected to Chrome ');
                });
                chrome.on('error', function(err) {
                    console.error('Cannot connect to Chrome');
                });             
            } else {
                console.error('Device not found');
            }
        });
    }
};

