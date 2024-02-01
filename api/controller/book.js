import jwt from "jsonwebtoken"
import { db } from "../db.js"

export const addBook = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("not logged in");

    jwt.verify(token, "secretkey", (err, userData) => {
        if (err) return res.status(403).json("token is not valid");

        const q = "INSERT INTO booking (`uid`, `cartype`, `plan`, `date`, `time`, `price`, `firstname`, `lastname`, `phonenumber`, `email`, `additional`, `shop`, `sid`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')";
        const values = [
            userData.id,
            req.body.cartype,
            req.body.type,
            req.body.date,
            req.body.time,
            req.body.cost,
            req.body.fisrtname,
            req.body.lastname,
            req.body.phone,
            req.body.email,
            req.body.additional,
            req.body.shop,
            req.body.shopId
        ];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err, "askaps");
            return res.status(200).json("booking has been done");
        });
    });
};


export const getBooking=(req, res)=>{
    const q="SELECT date, time FROM booking WHERE sid=?"
     
    db.query(q,[req.params.id],(err, data)=>{
        if(err) return res.status(500).json(err,"nihsaaaa")
        return res.json(data)
        
    })
}