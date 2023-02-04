import express from 'express'
import { addproduct, deleteproduct, geteverything, searchname, updateproduct } from './products.cntroller.js'
const router=express.Router()

router.post('/_add/product',addproduct)
router.delete('/_delete/product',deleteproduct)
router.put('/_update/Product',updateproduct)
router.get('/_get/all',geteverything)
router.get('/srearch/by_name',searchname)
export default router