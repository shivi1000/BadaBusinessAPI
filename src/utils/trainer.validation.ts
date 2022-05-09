import Joi from 'joi';

class trainerValidationClass {

trainerProfile = Joi.object({
    firstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    lastName: Joi.string().trim().min(3).max(15).lowercase().required(),
    //tokenId: Joi.string().required()

})

trainerContact = Joi.object({
    phoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
    otp: Joi.string().length(4).required()
})


}

export const trainerValidation = new trainerValidationClass();
