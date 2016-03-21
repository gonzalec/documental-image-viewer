import './styles/demo.scss';
import angular from 'angular';
import DemoController from './demo.controller';

// import '../src/documental.image.viewer.directive.js';
// a dependency to an entry point is not allowed.

export default angular.module('demoApp', ['directives.docivImageViewer'])
    .controller('DemoController', DemoController)
    .name;

console.log('Demo loaded !');
