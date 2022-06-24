import db from "../database.js";

async function insert(cake) {
	const queryString = `
    insert into "cakes" ("name","image","description","price") values ($1,$2,$3,$4);
    `;
	const queryArgs = [cake.name, cake.image, cake.description, cake.price];
	console.log(queryArgs);
	const result = await db.query(queryString, queryArgs);
	return result;
}

export const cakesRepository = {
	insert,
};
