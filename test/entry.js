var a=require('./modules/a')
var b=require('./modules/b.css')

<% if(ENV=='prod'){ %>
	console.log('code one')
<%}else{%>
	console.log('code tow')
<%}%>

<% if(isNeeded){ %>
	console.log('needed code')
<%}%>

console.log('common code')