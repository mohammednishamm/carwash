import { db } from "../db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register=(req,res)=>{
    const q="SELECT * from users WHERE username= ?"
    db.query(q,[req.body.username],(err, data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User Already Exists")

        const salt=bcrypt.genSaltSync(10)
        const hashedPassword=bcrypt.hashSync(req.body.password,salt)

        const q="INSERT INTO users (`username`,`email`,`password`,`phoneno`,`name`) VALUES (?)"
        const values=[
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.phoneno,
            req.body.name
        ]
        console.log(values)
        db.query(q,[values],(err, data)=>{
            if(err) return res.json(err)
            return res.json("successfully created")
        })
    })

}

export const login=(req, res)=>{
    const q="SELECT * FROM users WHERE username=?"
    db.query(q,[req.body.username],(err, data)=>{
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("User not found")

        const checkPassword=bcrypt.compareSync(req.body.password,data[0].password)
        if(!checkPassword) return res.status(400).json("Wrong username and password")

        const token=jwt.sign({id:data[0].id},"secretkey")
        const {password, ...ohter}=data[0]

        res.cookie("accessToken",token,{
            httpOnly:true,

        }).status(200).json(ohter)
        //stopped here//
    })
}