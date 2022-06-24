import { stripHtml } from "string-strip-html";

function sanitizeInput(body) {
	try {
		Object.keys(body).forEach((property) => {
			if (typeof body[property] !== "number") {
				body[property] = stripHtml(body[property]).result.trim();
			}
		});

		return body;
	} catch (e) {
		throw e;
	}
}

export { sanitizeInput };
