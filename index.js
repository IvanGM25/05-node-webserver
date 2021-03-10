require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/usuarios', function (req, res) {

    
  res.send('Usuario: ivan')
})

app.post('/', function (req, res) {
  res.send('POST del path /')
})
 
app.listen(port,()=>{
  console.log(`Server started - Port ${port}`);
})