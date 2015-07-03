'use strict';
var http = require('http');
var serveStatic = require('serve-static');
var serve = serveStatic('public');
var minimist = require('minimist');
var fs = require('fs');

var argv = minimist(process.argv);

var users = {};

var server = http.createServer(function(req, res) {

    if (req.url === '/data') {
        if (req.meth)
            res.setHeader('Content-Type', 'application/json');
            // por cada key de users, concatenar sus valores
            // (es decir, los tweets de cada usuario)
            return;
        }


        if (req.method === 'POST') {
            //
        }

    var tweet = '';

    if (req.url === '/tweet') {
        if (req.method === 'POST') {
            req.setEncoding('utf8');
            //

            req.on('data', function(data) {
                tweet += data;
            });

            req.on('end', function() {
                tweet = JSON.parse(tweet);
                if (users[req.headers.user] !== undefined) {
                    users[req.headers.user].push(tweet);
                } else {
                    users[req.headers.user] = [tweet];
                }
            });
            return;
        }
    }

    if (req.url === '/timeline') {

    }

    // en el caso que quiera servir 
    // contenido estático
    serve(req, res, function() {
        res.end();
    });
});

var port = argv.port || process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8000;

server.listen(port, argv.ip || process.env.OPENSHIFT_NODEJS_IP, function() {
    console.log('Server is now listening at port: ' + port);
});