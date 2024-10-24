import express from "express"
const router = express.Router()
import {signIn, signUp} from "../controllers/auth.js"

router.post("/signIn", signIn)
router.post("/signUp", signUp)

export default router;