import pool from "../config/db.js";

 export const getUserService=async()=>{
 try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows[0];
 } catch (error) {
    console.log("Server side Error detected",error);
    return error;
 }
};
export const getUserByIdService=async(id)=>{
    try {
        const result = await pool.query("SELECT * FROM users where id=$1",[id]);
        return result.rows[0];
     } catch (error) {
        console.log("Server side Error detected",error);
        return error;
     }
};
export const createUserService=async(name,email)=>{
    try {
        const result = await pool.query("INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",[name,email]);
        return result.rows;
     } catch (error) {
        console.log("Server side Error detected",error);
        return error;
     }
};
export const updateUserService=async(name,email,id)=>{
    try {
        const result=await pool.query("UPDATE users SET name=$1,email=$2 where id=$3 RETURNING *",[name,email,id]);
    } catch (error) {
        console.log("Server side Error detected",error);
        return error;
    }
};
export const deleteUserService=async(id)=>{
    try {
        const result=await pool.query("DELETE FROM users where id=$1",[id]);
        return result.rows;
    } catch (error) {
        console.log("Server side Error detected",error);
        return error;
    }
};
