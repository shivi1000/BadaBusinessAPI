import Joi from 'joi';

class adminValidationClass {

adminProfile = Joi.object({
    adminFirstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    adminLastName: Joi.string().trim().min(3).max(15).lowercase().required(),
    adminEmail: Joi.string().trim().email().required(),
    tokenId: Joi.string().required()

})

adminContact2 = Joi.object({
    adminPhoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
    otp: Joi.string().length(4).required()
})

adminContact = Joi.object({
    adminPhoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
})

}

export const adminValidation = new adminValidationClass();
