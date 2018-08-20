
const minify = require('minify');

var cssfile = "./public/out.css";

minify(cssfile, (error, data) => {
        if (error){
            console.log('error');
            return console.error(error.message);
        }
        
        console.log(data);
});
