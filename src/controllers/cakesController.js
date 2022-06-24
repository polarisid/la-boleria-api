import { cakesRepository } from "../repositories/cakesRepository.js";
import { flavoursRepository } from "../repositories/flavoursRepository.js";
async function createCake(req, res) {
	try {
		const existingName = await cakesRepository.searchByName(res.locals.name);
		const existingFlavour = await flavoursRepository.searchById(
			res.locals.flavourId
		);
		if (existingFlavour.rowCount === 0) {
			return res.status(404).send("Flavour id not found");
		}
		if (existingName.rowCount >= 1) {
			return res.status(409).send("name already in database");
		}
		await cakesRepository.insert(res.locals);
		return res.sendStatus(201);
	} catch (e) {
		console.log(e);
		return res.send(500);
	}
}

export default { createCake };
