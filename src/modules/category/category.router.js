import express from 'express'
import { addcategory, deletecategory, getcategories, updatecategory } from './category.controller.js'
const router=express.Router()

router.post('/_add/category',addcategory)
router.put('/_update/category',updatecategory)
router.delete('/_delete/category',deletecategory)
router.get('/_get/categories',getcategories)

export default router