import expresss from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
import pool from './src/config/db.js';  
import userRoutes from './src/routes/userRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';
import createUserTable from './src/dbHandlers/createUserTable.js';

dotenv.config();
const app = expresss();
app.use(cors()); 
app.use(expresss.json());
app.use(errorHandler);
//connecting dadtabase request
  createUserTable();
app.get("/",async(req,res)=>{
    try{
        const result = await pool.query("SELECT current_database()");
        res.send(result.rows[0].current_database);
    }catch(err){
        console.error(err.message);
    }
})
//routes conncetion
app.use("/",userRoutes);
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})