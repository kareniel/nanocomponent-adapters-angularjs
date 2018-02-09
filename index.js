// nanocomponent-adapters/angularjs

var assert = require('assert')

module.exports = toAngularjs

function toAngularjs (name, Component, angular) {
  assert.equal(typeof name, 'string', 'nanocomponent-adapters/angularjs: name should be type string')
  assert.equal(typeof Component, 'function', 'nanocomponent-adapters/angularjs: component should be type function')
  assert.equal(typeof angular, 'object', 'nanocomponent-adapters/angularjs: angular should be type object')

  return angular
    .module('nanocomponent.' + name, [])
    .component(name, ControllerFn(Component))
    .name
}

function ControllerFn (Component) {
  if (!(this instanceof ControllerFn)) return new ControllerFn(Component)

  controller.$inject = ['$element']

  return {
    template: '<div></div>',
    controller: controller,
    bindings: {
      state: '<',
      emit: '<'
    }
  }

  function controller ($element) {
    this.component = new Component()
    this.el = this.component.render(this.state, this.emit)

    this.$postLink = function () {
      $element.replaceWith(this.el)
    }

    this.$onChanges = function () {
      this.el = this.component.render(this.state, this.emit)
    }
  }
}
