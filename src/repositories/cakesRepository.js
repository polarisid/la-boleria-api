import db from "../database.js";

async function insert(cake) {
	try {
		const queryString = `
		insert into "cakes" ("name","image","description","price") values ($1,$2,$3,$4);
		`;
		const queryArgs = [cake.name, cake.image, cake.description, cake.price];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

async function searchByName(name) {
	try {
		const queryString = `
		select * from  "cakes" where name = ($1);
		`;
		const queryArgs = [name];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

async function searchById(id) {
	try {
		const queryString = `
		select * from  "cakes" where id = ($1);
		`;
		const queryArgs = [id];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export const cakesRepository = {
	insert,
	searchByName,
	searchById,
};
