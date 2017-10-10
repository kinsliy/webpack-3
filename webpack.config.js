const path = require('path');

module.exports={
	  entry:{
        index:'./index.js',
	  },
      
	  output:{
           filename:'[name].js',
           path: path.resolve(__dirname, 'build'),
	  },

	  module:{

	  	  rules:[
              
            {

            test:/\.js/,
            exclude:/node_modules/,
            loader:'babel-loader',
            },

            {
             	test:/\.vue/,
             	exclude:/node_modules/,
             	loader:'vue-loader',
            }



	  	  ]


	  }
}