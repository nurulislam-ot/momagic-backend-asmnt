import type { Request, Response } from "express"
import products from "../mock-data/products.json"

export const productControllers = {
  async getAllProducts(req: Request, res: Response) {
    return res.json(products)
  },

  async getProductById(req: Request, res: Response) {
    const { id } = req.params
    const product = products.find((p) => p.id == Number(id))
    if (product) {
      return res.json(product)
    } else {
      return res.status(404).json({ message: "Product not found" })
    }
  },

  async getProductsByCategory(req: Request, res: Response) {
    const { category } = req.params
    if (!category) {
      return res.status(400).json({ message: "Category parameter is required" })
    }
    const filteredProducts = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
    return res.json(filteredProducts)
  },
}
