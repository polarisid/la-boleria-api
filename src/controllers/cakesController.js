import { cakesRepository } from "../repositories/cakesRepository.js";
async function createCake(req, res) {
	try {
		const existingName = await cakesRepository.searchByName(res.locals.name);
		if (existingName.rowCount >= 1) {
			res.status(409).send("name already in database");
			return;
		}
		await cakesRepository.insert(res.locals);
		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.send(500);
		return;
	}
}

export default { createCake };
