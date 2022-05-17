import Joi from 'joi';

class trainerValidationClass {

trainerProfile = Joi.object({
    trainerFirstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    trainerLastName: Joi.string().trim().min(3).max(15).lowercase().required(),
    trainerEmail: Joi.string().trim().email().required(),
    tokenId: Joi.string().required()

})

trainerContact2 = Joi.object({
    trainerPhoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
    otp: Joi.string().length(4).required()
})

trainerContact = Joi.object({
    trainerPhoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
})

}

export const trainerValidation = new trainerValidationClass();
