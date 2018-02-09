# nanocomponent-adapters/angularjs

small wrapper around nanocomponents for angular 1.x



## usage 

### `wrappedComponent = toAngularjs(name, Component, angular)`
registers a new module with the given Angular instance and returns a
string of the module's name.


## example

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
