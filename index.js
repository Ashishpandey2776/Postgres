import expresss from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
import pool from './src/config/db.js';  

dotenv.config();
const app = expresss();
app.use(cors()); 

//connecting dadtabase request
app.get("/",async(req,res)=>{
    try{
        const result = await pool.query("SELECT current_database()");
        res.send(result.rows[0].current_database);
    }catch(err){
        console.error(err.message);
    }
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})