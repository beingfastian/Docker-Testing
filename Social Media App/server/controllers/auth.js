import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import User from "../models/user.js"

export const signIn = async(req,res) =>{
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email: email});
        if (!existingUser) return res.status(404).send("User not found");

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({"message": "Incorrect Password"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test");
        return res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({"message" : error.message});

    }
}

export const signUp = async(req,res) => {
    const {email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) res.status(400).json({"message": "User already exists"});

        if(password !== confirmPassword) res.status(401).json("Password Do not Match");

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: result.email, id: result._id}, "test")
        return res.status(200).json({result: result, token});
    } catch (error) {
        console.log(error)
    }
}