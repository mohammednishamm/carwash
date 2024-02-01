import express from "express"
import { getShops, authShop, getBooking, addAccept, completed, getHistory } from "../controller/shop.js"

const router =express.Router()

router.get("/shops", getShops)

router.post("/login", authShop)

router.get("/sbooking/:id", getBooking)
router.get("/shistory/:id", getHistory)
router.put("/accept/:id",addAccept)
router.put("/complete/:id",completed)



export default router