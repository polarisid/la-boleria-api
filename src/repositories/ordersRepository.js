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
			json_build_object('id',ca.id,'name',ca.name,'price',ca.price,'description', ca.description, 'image',ca.image,'flavour',fl.name) as cake,
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
		join "flavours" fl
			on ca."flavourId" =fl.id
		;
		`;

		const result = await db.query(queryString);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
async function getAllByDate(date) {
	const dateIn = date + " 00:00:00.000";
	const dateOut = date + " 23:59:59.599";
	try {
		const queryString = `
		select
			json_build_object('id',c.id,'name',c.name,'address',c.address,'phone',c.phone) as client,
			json_build_object('id',ca.id,'name',ca.name,'price',ca.price,'description', ca.description, 'image',ca.image,'flavour',fl.name) as cake,
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
		join "flavours" fl
			on ca."flavourId" =fl.id
		where 
			orders."createdAt" >=($1)
			AND
			orders."createdAt"<=($2)
		;
		`;
		const queryArgs = [dateIn, dateOut];

		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
async function getById(id) {
	try {
		const queryString = `
		select
			json_build_object('id',c.id,'name',c.name,'address',c.address,'phone',c.phone) as client,
			json_build_object('id',ca.id,'name',ca.name,'price',ca.price,'description', ca.description, 'image',ca.image,'flavour',fl.name) as cake,
			orders."createdAt",
			orders.quantity,
			orders."totalPrice"
		from
        	"orders"
		join "clients" c 
			on  orders."clientId" =c.id 
		join "cakes" ca
			on orders."cakeId" = ca.id
		join "flavours" fl
			on ca."flavourId" =fl.id
		where 
			orders.id =($1)
		;
		`;
		const queryArgs = [id];

		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}
async function getByUser(userId) {
	try {
		const queryString = `
		select
			orders.id as "orderId",
			orders.quantity,
			orders."createdAt",
			orders."totalPrice",
			ca.name as "cakeName",
			fl.name as "flavour"
		from
        	"orders"
		join "clients" c 
			on  orders."clientId" =c.id 
		join "cakes" ca
			on orders."cakeId" = ca.id
		join "flavours" fl
			on ca."flavourId" =fl.id
		where 
			c.id =($1)
		;
		`;
		const queryArgs = [userId];

		const result = await db.query(queryString, queryArgs);
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export const ordersRepository = {
	insert,
	getAll,
	getAllByDate,
	getById,
	getByUser,
};
