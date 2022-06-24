import joi from "joi";

const createOrderSchema = joi.object({
	clientId: joi.number().integer().min(1).required(),
	cakeId: joi.number().integer().min(1).required(),
	quantity: joi.number().integer().min(1).max(5).required(),
	totalPrice: joi.number().min(1).required(),
});

export default createOrderSchema;
