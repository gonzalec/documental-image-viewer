import './sass/demo.scss';
import angular from 'angular';
import DemoController from './demo.controller';

// import './index.jade';
// import '../../src/documental.image.viewer.directive.js';

export default angular.module('demoApp', [])
    .controller('DemoController', DemoController)
    .name;

console.log('Demo loaded !');
