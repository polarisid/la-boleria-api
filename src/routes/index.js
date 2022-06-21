import { Router } from "express";
import ordersRouter from "./ordersRouter.js";
import cakesRouter from "./cakesRouter";
const router = Router();

router.use(ordersRouter);
router.use(cakesRouter);

export default router;
