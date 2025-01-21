import {createUserService,updateUserService,deleteUserService,getUserByIdService,getUserService} from "../models/userModels.js";
export const createUser=async(req,res,next)=>{
    const {name,email}=req.body;
    try {
        if (!req.body.name) {
      throw new Error("Name is required!");
    }
        const newUser=await createUserService(name,email,next);
         res.status(201).json({ message: "User created successfully", newUser });
    } catch (err) {
       next(err);
    }
};
 export const updateUser=async(req,res,next)=>{
    const {name,email}=req.body;
    const {id}=req.params;
    try {
        const updatedUser=await updateUserService(name,email,id);
         res.status(200).json({ 
            message:"user update successfully",
            data:user
        });
    } catch (err) {
        next(err);
    }
};
export const deleteUser=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const deletedUser=await deleteUserService(id);
         res.status(200).json({ 
            message:"user delete successfully",
            deleteUser
        });
    } catch (error) {
        next(err);
    }
};

export const getUserById=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const user=await getUserByIdService(id);
        res.status(200).json({ 
            message:"user fetched successfully",
            user
        });
    } catch (err) {
        next(err);
    }
};

export const getAllUsers=async(req,res,next)=>{
    try {
        const users=await getUserService();
        res.status(200).json({
            message:"users fetched successfully",
            users
        });
    } catch (err) {
        next(err);
    }
};