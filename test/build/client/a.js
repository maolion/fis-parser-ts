define('test:client/a.ts', function(require, exports, module){

/// <reference path='x.d.ts'/>
var B = require("test:client/b.ts");

console.log("Hello, world");

new B();


});