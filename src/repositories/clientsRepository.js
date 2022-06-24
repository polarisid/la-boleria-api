import db from "../database.js";

async function insert(client) {
	try {
		const queryString = `
		insert into "clients" ("name","address","phone") values ($1,$2,$3);
		`;
		const queryArgs = [client.name, client.address, client.phone];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		return;
	}
}
async function searchByName(name) {
	try {
		const queryString = `
		select * from  "clients" where name = ($1);
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
		select * from  "clients" where id = ($1);
		`;
		const queryArgs = [id];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
export const clientsRepository = {
	insert,
	searchByName,
	searchById,
};
