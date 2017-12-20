'use strict';

var ejs = require('ejs')
var loaderUtils = require("loader-utils");

function compile(source){
	var res
	var query = loaderUtils.getOptions(this) || {}; 
	this.cacheable()
	try{
		res=ejs.render(source,query)
	}catch(e){
		res=source
	}
	return res
}

module.exports = compile;