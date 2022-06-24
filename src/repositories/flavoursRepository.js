import db from "../database.js";

async function insert(name) {
	try {
		const queryString = `
		insert 
        into 
        "flavours" ("name") 
        values ($1);
		`;
		const queryArgs = [name];
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
		select * from  "flavours" where name ~* ($1);
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
		select * from  "flavours" where id = ($1);
		`;
		const queryArgs = [id];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export const flavoursRepository = {
	insert,
	searchByName,
	searchById,
};
