// nanocomponent-adapters/angularjs

var assert = require('assert')

module.exports = toAngularjs

function toAngularjs (Component, name, attrs, angular) {
  assert.equal(typeof Component, 'function', 'nanocomponent-adapters/angularjs: Component should be type function')
  assert.equal(typeof name, 'string', 'nanocomponent-adapters/angularjs: name should be a string')
  assert.equal(typeof attrs, 'object', 'nanocomponent-adapters/angularjs: attrs should be an array')
  assert.equal(typeof angular, 'object', 'nanocomponent-adapters/angularjs: angular should be an object')

  var component = new AngularComponent(Component, attrs)

  return angular
    .module('nanocomponent.' + name, [])
    .component(name, component)
    .name
}

function AngularComponent (Component, attrs) {
  controller.$inject = ['$element']

  var component = {
    template: '<div></div>',
    bindings: {},
    controller
  }

  attrs.forEach(attr => {
    component.bindings[attr] = '<'
  })

  return component

  function controller ($element) {
    this.component = new Component()
    this.attrs = attrs
    this.el = this.component.render(this.state, this.emit)

    this.$postLink = function () {
      $element.replaceWith(this.el)
    }

    this.$onChanges = function () {
      var args = attrs.map(attr => this[attr])

      this.el = this.component.render(...args)
    }
  }
}
