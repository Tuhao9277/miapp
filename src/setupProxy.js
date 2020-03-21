const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        proxy('/api',{
            target: 'http://119.3.163.229:8080/Smart_Home/',
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
           
        })
    );
}