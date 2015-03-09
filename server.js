'use strict';
var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, 'build/public')
    }
  }
});

server.start(function() {
  console.log('Server start at ', server.info.uri);
});