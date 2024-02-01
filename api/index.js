import express from "express"
import cors from "cors"
import authRoutes from "./router/auth.js"
import cookieParser from 'cookie-parser'
import shopRoutes from "./router/shop.js"
import bookRoutes from "./router/book.js"
import userRoutes from "./router/user.js"
const app=express()


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/shop",shopRoutes)
app.use("/api/booking",bookRoutes)
app.use("/api/user", userRoutes)
app.listen(8600,()=>{
    console.log("connected1 supkkkccekssfully")
})