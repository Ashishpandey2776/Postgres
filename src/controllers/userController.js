import {createUserService,updateUserService,deleteUserService,getUserByIdService,getUserService} from "../models/userModels.js";
export const createUser=async(req,res)=>{
    const {name,email}=req.body;
    try {
        const newUser=await createUserService(name,email,next);
        res.send("user created successfully:",newUser).json({
            status:200,
            message:"user created successfully",
            data:newUser
        });
    } catch (err) {
        next(err);
    }
};
 export const updateUser=async(req,res,next)=>{
    const {name,email}=req.body;
    const {id}=req.params;
    try {
        const updatedUser=await updateUserService(name,email,id);
        res.send("user updated successfully:",updatedUser).json({
            status:200,
            message:"user updated successfully",
            data:updatedUser
        });
    } catch (err) {
        next(err);
    }
};
export const deleteUser=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const deletedUser=await deleteUserService(id);
        res.send("user deleted successfully:",deletedUser).json({
            status:200,
            message:"user deleted successfully",
            data:deletedUser
        });
    } catch (error) {
        next(err);
    }
};

export const getUserById=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const user=await getUserByIdService(id);
        res.send("user fetched successfully:",user).json({
            status:200,
            message:"user fetched successfully",
            data:user
        });
    } catch (err) {
        next(err);
    }
};

export const getAllUsers=async(req,res,next)=>{
    try {
        const users=await getUserService();
        res.send("users fetched successfully:",users).json({
            status:200,
            message:"users fetched successfully",
            data:users
        });
    } catch (err) {
        next(err);
    }
};