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
			res.status(404).send("Client or cake not found");
			return;
		}

		console.log(res.locals);

		await ordersRepository.insert(res.locals);
		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
		return;
	}
}

async function getAllOrders(req, res) {
	try {
		const orders = await ordersRepository.getAll();
		res.send(orders.rows);
	} catch (e) {
		console.log(e);
		res.send(500);
		return;
	}
}

export default { createOrder, getAllOrders };
