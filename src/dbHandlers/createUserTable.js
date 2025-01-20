import pool from "../config/db.js";

const createUserTable=async()=>{
    try {
        const result=await pool.query(
            "CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,name VARCHAR(50),email VARCHAR(50))");
        return result;
    } catch (error) {
        console.log("Server side Error detected in creating Table",error);
    }
};
export default createUserTable;