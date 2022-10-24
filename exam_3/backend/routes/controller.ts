import express, { NextFunction, Request, response, Response } from "express";
import { nextTick } from "process";
import logic from "../logic/logic";
import Products from "../model/products";

const router = express.Router();

router.get(
  "/api/products",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const products = await logic.getAllProducts();
      response.status(200).json(products);
    } catch (err: any) {
      next(err);
    }
  }
);

router.post(
  "/api/products/:id/:units",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      const units = +request.params.units;
      logic.updateStock(id, units);
      response.status(201);
    } catch (err: any) {
      next(err);
    }
  }
);

export default router;
