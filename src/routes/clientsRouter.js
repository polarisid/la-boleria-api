import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validadeSchemaMiddleware.js";
import createClientSchema from "../schemas/clientSchema.js";
import clientsController from "../controllers/clientsController.js";
const clientRouter = Router();

clientRouter.post(
	"/clients",
	validateSchemaMiddleware(createClientSchema),
	clientsController.createClient
);

export default clientRouter;
