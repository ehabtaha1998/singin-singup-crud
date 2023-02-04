import express from 'express'
const router=express.Router()
import { signin, signup } from './users.controller.js'
router.post('/_singup',signup)
router.post('/_singin',signin)

export default router