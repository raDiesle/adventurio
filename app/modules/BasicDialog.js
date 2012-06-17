define([
  // Global application context.
  "app",

  // Third-party libraries.
  "backbone"
],

function(app, Backbone) {
  var Basicdialog = app.module();

  Basicdialog.Model = Backbone.Model.extend({});
  Basicdialog.Collection = Backbone.Model.extend({});

  return Basicdialog;
});
