import { sanitizeInput } from "../helpers/sanitizeInput.js";

export function validateSchemaMiddleware(schema) {
	return (req, res, next) => {
		try {
			const body = sanitizeInput(req.body);
			console.log(body);
			const validation = schema.validate(body);
			if (validation.error) {
				return res.status(400).send({ error: validation.error.message });
			}
			res.locals = body;
			next();
		} catch (e) {
			console.log(e);
			res.sendStatus(500);
		}
	};
}
