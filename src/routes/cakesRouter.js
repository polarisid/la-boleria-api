import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validadeSchemaMiddleware.js";
import createCakeSchema from "../schemas/cakeSchema.js";
import cakesController from "../controllers/cakesController.js";
import flavourSchema from "../schemas/flavourSchema.js";
import flavoursController from "../controllers/flavoursController.js";

const cakesRouter = Router();

cakesRouter.post(
	"/cakes",
	validateSchemaMiddleware(createCakeSchema),
	cakesController.createCake
);

cakesRouter.post(
	"/flavours",
	validateSchemaMiddleware(flavourSchema),
	flavoursController.createFlavour
);
export default cakesRouter;
