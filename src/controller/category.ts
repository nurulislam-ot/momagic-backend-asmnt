import type { Request, Response } from "express"
import categories from "../mock-data/categories.json"

export const categoryControllers = {
  async getAllCategories(req: Request, res: Response) {
    return res.json(categories)
  },
}
