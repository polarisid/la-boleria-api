import { clientsRepository } from "../repositories/clientsRepository.js";
async function createClient(req, res) {
	try {
		const existingName = await clientsRepository.searchByName(res.locals.name);
		if (existingName.rowCount >= 1) {
			res.status(409).send("name already in database");
			return;
		}
		await clientsRepository.insert(res.locals);
		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.send(500);
		return;
	}
}

export default { createClient };
