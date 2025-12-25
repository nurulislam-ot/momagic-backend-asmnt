import dotenv from "dotenv"
import express from "express"
import { productsRouter } from "./routes/products"
import { categoriesRouter } from "./routes/category"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use("/products", productsRouter)
app.use("/categories", categoriesRouter)

export default app
