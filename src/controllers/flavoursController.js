import { flavoursRepository } from "../repositories/flavoursRepository.js";

async function createFlavour(req, res) {
	try {
		const existingName = await flavoursRepository.searchByName(res.locals.name);
		if (existingName.rowCount >= 1) {
			res.status(409).send("name already in database");
			return;
		}
		await flavoursRepository.insert(res.locals.name);
		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.send(500);
		return;
	}
}
export default { createFlavour };
