import express from "express";
import mongoose from "mongoose";
import { seedInitialProducts } from "./services/productServices";
import routerProduct from "./routes/productRoute";
import routerCart from "./routes/cartRoute";
import router from "./routes/userRoute";
const app = express()
const port = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/smart")
.then(() => console.log("Connecting Success"))
.catch((err) => console.log("Faild" , err));

app.use(express.json());
		seedInitialProducts();
		app.use("/product", routerProduct);
		app.use("/cart", routerCart);
		app.use("/user", router);


	app.listen(port,()=>{
		console.log(`Server is running at: http://localhost:${port}`);
		
		})
		
		
		
	

