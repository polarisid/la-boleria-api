import { Router } from "express";

const cakesRouter = Router();

cakesRouter.get("/", (req, res) => {
	try {
		res.send("alive");
	} catch (e) {
		console.log(e);
	}
});

export default cakesRouter;
