import joi from "joi";

const flavourSchema = joi.object({
	name: joi.string().required(),
});

export default flavourSchema;
