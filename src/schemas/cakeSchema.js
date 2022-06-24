import joi from "joi";

const createCakeSchema = joi.object({
	name: joi.string().min(2).required(),
	price: joi.number().min(1).required(),
	description: joi.string().min(0),
	image: joi.string().required(),
});

export default createCakeSchema;
