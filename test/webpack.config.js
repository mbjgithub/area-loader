var webpack=require('webpack')

module.exports={
	entry:{
		page:'./entry.js'
	},
	output:{
		filename:"[name].js",
		path:__dirname+"/dest"
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			use:[
			{    	loader:'../index.js?ENV=prod&isNeeded=true'   }
			]
		},
		{
			test:/\.css$/,
			use:[
				{ 	loader:'style-loader' },
				{ 	loader:'css-loader'   },
				{   loader:'../index.js',      
					options:{
						ENV:'dev'
					}
				}
			]
		}
		]
	}
}