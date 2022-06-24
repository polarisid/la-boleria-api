import { Router } from "express";
import ordersRouter from "./ordersRouter.js";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientsRouter.js";
const router = Router();

router.use(ordersRouter);
router.use(cakesRouter);
router.use(clientRouter);

export default router;
