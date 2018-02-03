/*jslint node: true */
'use strict';

module.exports.init = function (app) {

    app.get('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });
       
    // Handling 404 errors
    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
          return next();
        }
       
        res.render('404', { url : req.originalUrl });
    });

    // Handling 500 errors
    app.use(function(err, req, res, next) {
      res.status(500);
      res.send('oops! something broke', { error : err });
    });

};