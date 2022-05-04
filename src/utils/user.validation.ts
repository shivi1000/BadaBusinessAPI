import Joi from 'joi';

class userValidationClass {

userProfile = Joi.object({
    firstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    lastName: Joi.string().trim().min(3).max(15).lowercase().required(),
    userType: Joi.string().trim().required(),
    tokenId: Joi.string().required()

})

userContact = Joi.object({
    phoneNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
    otp: Joi.string().length(4).required()
})


}

export const userValidation = new userValidationClass();
