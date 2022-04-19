import Joi from 'joi';

const userSignup = Joi.object({
    firstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    lastName: Joi.string().trim().min(3).max(15).lowercase().required(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().trim().email().required(),
    userType: Joi.string().trim().required()

})

export default userSignup
