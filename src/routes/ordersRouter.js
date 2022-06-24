import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validadeSchemaMiddleware.js";
import createOrderSchema from "../schemas/orderSchema.js";
import ordersController from "../controllers/ordersController.js";
const ordersRouter = Router();

ordersRouter.post(
	"/order",
	validateSchemaMiddleware(createOrderSchema),
	ordersController.createOrder
);
ordersRouter.get("/orders", ordersController.getAllOrders);

export default ordersRouter;
