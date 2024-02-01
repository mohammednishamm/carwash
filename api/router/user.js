import express from "express"
import { addLogin } from "../controller/user.js"

const router=express.Router()

router.post("/ulogin",addLogin)
export default router;
