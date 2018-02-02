/*jslint node: true */
'use strict';

module.exports = {
    app : {
        title : 'MyApp (by Uge Hidalgo 2018)',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
        googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    db : {
        uri : 'mongodb://localhost:27017/windlogDB', //DB on local computer
        //uri : 'mongodb://ugeHidalgo:gunnar12A@ds149501.mlab.com:49501/windlogdb', //DB on mLab
        options: {},
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    sessionSecret: process.env.SESSION_SECRET || 'anystringhereisvalidtoencript',
    sessionCookie: {
        // session expiration is set by default to 24 hours
        maxAge: 24 * (60 * 60 * 1000),
        // httpOnly flag makes sure the cookie is only accessed
        // through the HTTP protocol and not JS/browser
        httpOnly: true,
        // secure cookie should be turned to true to provide additional
        // layer of security so that the cookie is set only when working
        // in HTTPS mode.
        secure: false
    },
    sessionKey: 'sessionId',
    secure: {
        ssl: true,
        privateKey: './config/sslcerts/key.pem',
        certificate: './config/sslcerts/cert.pem',
        caBundle: './config/sslcerts/cabundle.crt'
    }
};