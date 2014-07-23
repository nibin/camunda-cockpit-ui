/* global ngDefine: false */
ngDefine('cockpit.pages', [
  './dashboard',
  'module:ngRoute:angular-route',
  'module:camunda.common.services:camunda-commons-ui/services/index',
  'module:cockpit.pages.processInstance:./processInstance',
  'module:cockpit.pages.processDefinition:./processDefinition'
], function() {});
