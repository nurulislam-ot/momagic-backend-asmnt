import { Router } from "express"
import { productControllers } from "../controller/product"

export const productsRouter = Router()

productsRouter.get("/", productControllers.getAllProducts)
productsRouter.get("/:id", productControllers.getProductById)
productsRouter.get("/category/:category", productControllers.getProductsByCategory)
