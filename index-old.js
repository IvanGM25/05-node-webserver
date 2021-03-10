const http = require('http');

http.createServer((req,res)=>{

    console.log(req);
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    
        const user = {
            id: 123,
            name: 'ivan'        
        }
    
        res.write(JSON.stringify(user));

    /*res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id,name\n123,ivan\n456,marta');*/
    

    res.end();

}).listen(4500);