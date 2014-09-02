
# fis-parser-ts

用于 fis 工具的 typescript源文件编译插件

## 安装
	
	npm install fis-parser-ts

## 使用

	//fis-conf.js
	//设置.ts源文件的解析器为ts
	fis.config.set("modules.parser.ts", "ts");

	//全局配置
	fis.config.set('settings.parser.ts.compileSetting', {
		module             : "commonjs"// Specify module code generation: 'commonjs' or 'amd'
        //, target         : "ES3"     // Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        //, noImplicitAny  : true      // Warn on expressions and declarations with an implied 'any' type.
        //, removeComments : false     // Do not emit comments to output.
        //, noLib          : false     // Do not include default library
        //, root           : 'xxx'     // Source file root
        //, file           : 'xxx.ts'  // Source file path
        //, nodejs         : true      // Is node.js source file
	});

	//设置 .ts源文件的扩展为 .js
	fis.config.set('roadmap.ext.ts', 'js');

	fis.config.set('roadmap.ext.ts', 'js');

	//为某些文件提供 特殊的编译配置
	fis.config.set('roadmap.path').push({
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
        }
	});