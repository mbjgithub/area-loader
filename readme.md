# area-loader
* allow loader whatever you want for code area,it can decide which code you need in construction by ejs judgement flow.And 
it has nothing to do with the file type.

#Usage:
* webpack.config.js
```
module.exports = {
	module:{
			rules:[
			{
				test:/\.js$/,
				use:[
					{    loader:'area-loader?ENV=prod&isNeeded=true'   } 
				]
			}
		  ]
		}
}
```
js file
```
//you can use ejs syntax
<% if(ENV=='prod'){ %>
	console.log('code one')
<%}else{%>
	console.log('code tow')
<%}%>

<% if(isNeeded){ %>
	console.log('needed code')
<%}%>

console.log('common code')

```
for detail usage,please see test dir.


#install
```
npm area-loader
```

#test
```
cd test/
webpack
```
