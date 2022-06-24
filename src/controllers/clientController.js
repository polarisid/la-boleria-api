import { clientRepository } from "../repositories/clientRepository.js";
async function createCake(req, res) {
	try {
		const existingName = await clientRepository.searchByName(res.locals.name);
		if (existingName.rowCount >= 1) {
			res.status(409).send("name already in database");
			return;
		}
		await clientRepository.insert(res.locals);
		res.status(201).send(res.locals);
	} catch (e) {
		console.log(e);
		return;
	}
}

export default { createCake };
