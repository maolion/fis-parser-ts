/***
 * fis-parser-ts
 * ----------------------------------------------------------------------------
 * <index.js> - 2014/8/16
 * @version 0.0.1
 * @author  Joye, maolion.j@gmail.com
 * @website http://maolion.com 
 * @
 */
'use strict';


var 
    TSCompile = require("typescript-compile"),
    Path      = require("path")
;
module.exports = function(content, file, conf){
    var
        setting  = mix(conf.compileSetting || {}, file.compileSetting || {}),
        filename = file.toString()
    ;

    if (/\.d\.ts$/i.test(filename)) {
        file.release = file.release.replace(/\.d\.js$/i, '.d.ts');
        return content;
    }
    return TSCompile(
        content.toString("utf8"), 
        mix(
            {
                out:file.getUrl(), 
                file: filename
            }, 
            (
                delete setting.out, 
                delete setting.file, 
                setting
            )
        )
    ).code || '';
};

function mix(dest, sources) {
    var 
        sources = Array.prototype.slice.call(arguments, 1)
    ;
    if (!dest) return;
    if (!sources.length) return dest;
    for(var i = 0, l = sources.length; i < l; i++) {
        var source = sources[i];
        for(var k in source) {
            if (!source.hasOwnProperty(k)) continue;
            dest[k] = source[k];
        }
    }
    return dest;
};