angular.module('config').component('person', {
  bindings: { person: '<' },
  template: '<h3>Company:</h3>' +
  
            '<div>Name: {{$ctrl.person.name}}</div>' +
            '<div style="">Id: {{$ctrl.person.id}}</div>' +
            '<button ui-sref="people">Back</button>'
});