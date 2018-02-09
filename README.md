# nanocomponent-adapters/angularjs

small wrapper around nanocomponents for angular 1.x

## usage 

```js
var angular = require('angular')
var toAngularjs = require('nanocomponent-adapters/angularjs')
var MyComponent = require($MY_COMPONENT_LIB)

var wrappedComponent = toAngularjs('myComponent', MyComponent, angular)

angular
  .module('myApp', [ wrappedComponent ])
  .component('myPage', {
    template: '<my-component state="$ctrl.someState"></my-component>',
    controller: function () {
      this.someState = {}
    }
  })

```
