var express = require('express');
/*require is used to lead in the module
A require takes only single parameter as a input - the string name of module.
and here we would write express(the dependency in package.json file)
*/
//create our app
/*
to create a new app all we have to do is
call express library as a function passing nothing as input
*/
var app = express();

//tell him in which folder u want to search
app.use(express.static('public'));
//ap.use() lets u add functionality to ur application
/*
express.static is going to expose the folder name to web server
and in this case the folder name is going to be called as public
*/

//start the server using app.listen
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
