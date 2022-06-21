import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/", (req, res) => {
	res.send("alive");
});

export default ordersRouter;
