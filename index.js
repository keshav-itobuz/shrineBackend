import express  from 'express';
const app = express()

app.use('/home', (req , res)=>{
    
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})