import { ordersRepository } from "../repositories/ordersRepository.js";
import { clientsRepository } from "../repositories/clientsRepository.js";
import { cakesRepository } from "../repositories/cakesRepository.js";
async function createOrder(req, res) {
	try {
		const existingClient = await clientsRepository.searchById(
			res.locals.clientId
		);
		const existingCake = await cakesRepository.searchById(res.locals.cakeId);

		if (existingCake.rowCount === 0 || existingClient.rowCount === 0) {
			return res.status(404).send("Client or cake not found");
		}

		console.log(res.locals);

		await ordersRepository.insert(res.locals);
		return res.sendStatus(201);
	} catch (e) {
		console.log(e);
		return res.sendStatus(500);
	}
}

async function getAllOrders(req, res) {
	try {
		const queryString = req.query.date;
		if (queryString) {
			const orders = await ordersRepository.getAllByDate(queryString);
			if (orders.rowCount == 0) {
				return res.sendStatus(404);
			}
			return res.json(orders.rows);
		}
		const orders = await ordersRepository.getAll();
		if (orders.rowCount == 0) {
			return res.sendStatus(404);
		}
		return res.json(orders.rows);
	} catch (e) {
		console.log(e);
		return res.sendStatus(500);
	}
}

async function getOrderById(req, res) {
	const id = req.params.id;
	console.log(id);
	try {
		const order = await ordersRepository.getById(id);
		if (order.rowCount == 0) {
			return res.sendStatus(404);
		}
		return res.json(order.rows[0]);
	} catch (e) {
		console.log(e);
		return res.sendStatus(500);
	}
}

export default { createOrder, getAllOrders, getOrderById };
