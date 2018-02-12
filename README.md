# nanocomponent-adapters/angularjs

small wrapper around nanocomponents for angular 1.x


## usage 

### `wrappedComponent = toAngularjs(Component, name, attrs, angular)`

registers a new module with the given Angular instance and returns a
string of the module's name.

- Component: A nanocomponent constructor
- name: camelCase name for the component
- attrs: a list of the arguments passed to `Component#render`
- angular: angular instance


## example

```js
var angular = require('angular')
var toAngularjs = require('nanocomponent-adapters/angularjs')
var Nanocomponent = require('nanocomponent')
var html = require('bel')

class Button extends Nanocomponent {
  constructor () {
    super()
    this.color = null
  }

  handleClick () {
    console.log('choo choo!')
  }

  createElement ({color}) {
    this.color = color
    return html`
      <button onclick=${this.handleClick} style="background-color: ${color}">
        Click Me
      </button>
    `
  }

  update ({color}) {
    return color !== this.color
  }
}

var customButton = toAngularjs(Button, 'customButton', ['color'], angular)

angular
  .module('my-app', [ customButton ])
  .bootstrap(body, 'my-app')

```

in your template:

```html
<custom-button color="$ctrl.color"></custom-button>
```
