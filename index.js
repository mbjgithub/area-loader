'use strict';

var ejs = require('ejs')
var loaderUtils = require("loader-utils");

function compile(source){
	var res
	var query = loaderUtils.getOptions(this) || {}; 
	this.cacheable()
	res=ejs.render(source,query)
	return res
}

module.exports = compile;