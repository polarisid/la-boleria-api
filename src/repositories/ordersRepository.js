import db from "../database.js";

async function insert(order) {
	try {
		const queryString = `
		insert 
        into 
        "orders" ("clientId","cakeId","quantity","totalPrice") 
        values ($1,$2,$3,$4);
		`;
		const queryArgs = [
			order.clientId,
			order.cakeId,
			order.quantity,
			order.totalPrice,
		];
		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
export const ordersRepository = {
	insert,
};
