import cors from "cors";
import express, { json } from "express";
import dotenv, { config } from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const app = express();
app.use(
	cors({
		origin: "*",
	})
);

app.use(json());
app.use(router);
export default app;
