import joi from "joi";

const createCakeSchema = joi.object({
	name: joi.string().required(),
	price: joi.integer().required(),
	description: joi.string().required(),
	image: joi.string().required(),
});

export default {
	createCakeSchema,
};
