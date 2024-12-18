import express from "express";
import { getAllProducts } from "../services/productServices";

const routerProduct = express.Router();

routerProduct.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default routerProduct;
