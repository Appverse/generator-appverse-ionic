'use strict';
//DEVICES To emulate
module.exports = {
    options : {
        port: 9222
    }, 
    android: { 
        mobile: {     
            port: 9222,  
            width: 360,
            height: 640,
            deviceScaleFactor: 3,
            userAgent: "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36",
            touch: true,
            mobile: true
        },
        tablet: { 
            port: 9444,  
            width: 1200,
            height: 800,
            deviceScaleFactor: 2,
            userAgent: "Mozilla/5.0 (Linux; Android 5.1.1; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19",
            touch: true,
            mobile: true
        }
    },
    ios: {
       mobile: { 
            port: 9555,  
            width: 320,
            height: 568,
            deviceScaleFactor: 2,
            userAgent: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3",
            touch: true,
            mobile: true
        },
        tablet: { 
             port: 9666,  
            width: 1024,
            height: 768,
            deviceScaleFactor: 2,
            userAgent: "Mozilla/5.0 (iPad; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53",
            touch: true,
            mobile: true
        }  
    }
};
