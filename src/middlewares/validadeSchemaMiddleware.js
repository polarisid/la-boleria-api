import { sanitizeInput } from "../helpers/sanitizeInput.js";

export function validateSchemaMiddleware(schema) {
	return (req, res, next) => {
		const body = sanitizeInput(req.body);
		const validation = schema.validate(body);
		if (validation.error) {
			return res.status(422).send({ error: validation.error.message });
		}
		res.locals = body;
		next();
	};
}
