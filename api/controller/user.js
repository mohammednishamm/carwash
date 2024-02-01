import { db } from "../db.js"

export const addLogin=(req, res)=>{
   const q="SELECT * FROM admin WHERE username= ? AND password= ?"
   const values=[
    req.body.username,
    req.body.password
   ]
   db.query(q,values,(err, data)=>{
    if(err) return res.json(err)
    if(data.length === 0){
        return res.status(404).json("user not found")

    }
    const user=data[0]
    if(user.password !== req.body.password){
        return res.json("password is incorrect")
    }

   const {password,...other }=data[0]
     return res.json(other)

   })
   
}