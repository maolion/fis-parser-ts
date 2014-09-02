
fis.config.merge({
    namespace : "test",
    project   : {
        charset           : "utf8",
        md5Length         : 8,
        exclude           : null
    },
    modules : {
        parser : {
            ts: 'ts'
        }
    },
    settings : {
        parser : {
            ts : {
                compileSetting : {
                    module             : "commonjs"// Specify module code generation: 'commonjs' or 'amd'
                    //, target         : "ES3"     // Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                    //, noImplicitAny  : true      // Warn on expressions and declarations with an implied 'any' type.
                    //, removeComments : false     // Do not emit comments to output.
                    //, noLib          : false     // Do not include default library
                    //, root           : 'xxx'     // Source file root
                    //, file           : 'xxx.ts'  // Source file path
                    //, nodejs         : true      // Is node.js source file
                }
            }
        },
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    },
    roadmap: {
        ext : {
            ts : "js"
        },
        path: [
            {
                reg: "server/**.ts",
                isMod: false,
                useStandard: false,
                compileSetting: {
                    nodejs             : true      // Is node.js source file
                    //, target         : "ES3"     // Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                    //, noImplicitAny  : true      // Warn on expressions and declarations with an implied 'any' type.
                    //, removeComments : false     // Do not emit comments to output.
                    //, noLib          : false     // Do not include default library
                    //, root           : 'xxx'     // Source file root
                    //, file           : 'xxx.ts'  // Source file path
                }
            },
            {
                reg: "client/**.d.ts",
                isMod: false,
                useStandard: false
            },
            {
                reg: "client/**.ts",
                isMod: true,

                compileSetting: {
                    module : "commonjs",
                }
            }
            
        ]
    },
    pack : {
    }
});