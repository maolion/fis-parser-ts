define('test:client/b.ts', function(require, exports, module){

var B = (function () {
    function B() {
        console.log("[B Object] constructor");
    }
    return B;
})();

module.exports = B;


});