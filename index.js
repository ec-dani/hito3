
const mongoose= require('mongoose');
const port = process.env.PORT || 3000 ;
const app= require('./app');


mongoose.connect('mongodb://localhost:27017/apiex', (err, res)=>{
    if(err)
     return console.log(`ERROR: connecting to Database. ${err}`);
    else
    app.listen(port, () =>{
        console.log(`API REST corriendo  http://localhost:${port}`)
    }) 

} )
