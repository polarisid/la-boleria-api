import joi from "joi";

const createClientSchema = joi.object({
	name: joi.string().required(),
	address: joi.string().required(),
	phone: joi.string().min(10).max(11).required(),
});

export default createClientSchema;
