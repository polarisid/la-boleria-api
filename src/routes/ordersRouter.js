import { Router } from "express";

const ordersRouter = Router();

ordersRouter.post("/order", (req, res) => {
	try {
		res.send("alive");
	} catch (e) {
		console.log(e);
	}
});

export default ordersRouter;
