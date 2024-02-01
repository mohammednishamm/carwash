import { json } from "express"
import { db } from "../db.js"

export const getShops=(req,res)=>{
    const q="SELECT * FROM shop"

    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}
export const authShop=(req, res)=>{
    const q="SELECT * FROM shop WHERE username=? AND password=?"
    const values=[
        req.body.username,
        req.body.password
    ]
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
    
        if (data.length === 0) {
            return res.status(404).json("User not found");

            
        }
    
        const user = data[0];
    
        if (user.password !== req.body.password) {
            return res.status(401).json("Incorrect password");
        }
        const {password,...other}=data[0]
        return res.json(other);
    });
    
}
export const getBooking=(req, res)=>{
    const q="SELECT * FROM booking WHERE sid=? AND status !='Completed'"
    const value=[req.params.id]

    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

}

export const addAccept=(req, res)=>{
    const q="UPDATE booking SET status='Accepted' WHERE id = ?"
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}
export const completed=(req, res)=>{
    const q="UPDATE booking SET status='Completed' WHERE id = ?"
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}
export const getHistory=(req, res)=>{
    const q="SELECT * FROM booking WHERE sid=? AND `status`='Completed'"
    const value=[req.params.id]

    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

}