import express from "express"
import { addBook, getBooking } from "../controller/book.js"


const router=express.Router()


router.post("/book",addBook)
router.get("/data/:id",getBooking)


export default router