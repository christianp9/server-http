const chalk = require('chalk');
const http =require('http');
const handlserver=function(req,res){
    res.writeHead(200 ,{'content-type':'text/html' });
    res.write('<h2>mi primer server</h2>');
    res.end();
}
const server = http.createServer(handlserver).listen(3000);
server.listen(3000, function(){

    console.log(chalk.red('server on port 3000'));
});