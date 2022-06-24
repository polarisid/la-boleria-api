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
async function getAll() {
	try {
		const queryString = `
		select
			json_build_object('id',c.id,'name',c.name,'address',c.address,'phone',c.phone) as client,
			json_build_object('id',ca.id,'name',ca.name,'price',ca.price,'description', ca.description, 'image',ca.image) as cake,
			orders."createdAt",
			orders.quantity,
			orders."totalPrice",
			orders.id
		from
        	"orders"
		join "clients" c 
			on  orders."clientId" =c.id 
		join "cakes" ca
			on orders."cakeId" = ca.id
		;
		`;

		const result = await db.query(queryString);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
export const ordersRepository = {
	insert,
	getAll,
};
