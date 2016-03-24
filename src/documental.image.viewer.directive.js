import './styles/documental.image.viewer.scss';
// import angular from 'angular';

import directiveTemplate from './documental.image.viewer.jade';
import './documental.image.viewer.service.js';

console.log('directive file!');

function directive() {
    return {
        restrict: 'AE',
        scope: {
            name: '='
        },
        template: directiveTemplate
    };
}

export default angular.module('directives.docivImageViewer', [])
    .directive('docivImageViewer', directive)
    .name;
