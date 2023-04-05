//definiciones
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
//configuracion
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('En teoria el index.html');
});
app.get('*',(req,res)=>{
    res.send('En teoria 404.HTML');
});
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto', port);
});
//corriendo el Proceso de 
