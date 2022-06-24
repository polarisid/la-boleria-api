import { cakesRepository } from "../repositories/cakesRepository.js";
async function createCake(req, res) {
	if (res.locals.name.lenght < 2) {
	}
	cakesRepository.insert(res.locals);

	res.send(res.locals);
}

export default { createCake };
