import { Router } from "express"
import { categoryControllers } from "../controller/category"

export const categoriesRouter = Router()

categoriesRouter.get("/", categoryControllers.getAllCategories)
