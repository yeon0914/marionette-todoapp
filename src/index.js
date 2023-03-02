import $ from 'jquery';
import Marionette from 'backbone.marionette';

$(function() {
    var app = new Marionette.Application();

    app.on('start', function() {
        console.log('App started!');
    })

    app.start();
});
