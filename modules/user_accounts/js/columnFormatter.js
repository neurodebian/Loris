!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";function formatColumn(column,cell,rowData,rowHeaders){var row={};rowHeaders.forEach(function(header,index){row[header]=rowData[index]},this);var url;return"Username"===column?(url=loris.BaseURL+"/user_accounts/edit_user/?identifier="+row.Username,React.createElement("td",null,React.createElement("a",{href:url},cell))):React.createElement("td",null,cell)}Object.defineProperty(exports,"__esModule",{value:!0}),window.formatColumn=formatColumn,exports.default=formatColumn}]);
//# sourceMappingURL=columnFormatter.js.map