var angular = require('angular')
var TwitterComponent = require('twitter-component')
var toAngularjs = require('../.')

var componentModule = toAngularjs('twitterComponent', TwitterComponent, angular)

angular
  .module('example-app', [ componentModule ])
  .component('examplePage', {
    template: '<twitter-component state="$ctrl.url"></twitter-component>',
    controller: function () {
      this.url = 'https://twitter.com/yoshuawuyts/status/730087077803528193'
    }
  })

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body')
  body.appendChild(document.createElement('example-page'))
  angular.bootstrap(body, ['example-app'])
})
