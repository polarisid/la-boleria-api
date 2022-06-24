import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validadeSchemaMiddleware.js";
import createCakeSchema from "../schemas/cakeSchema.js";
import cakesController from "../controllers/cakesController.js";
const cakesRouter = Router();

cakesRouter.post(
	"/cakes",
	validateSchemaMiddleware(createCakeSchema),
	cakesController.createCake
);

export default cakesRouter;
