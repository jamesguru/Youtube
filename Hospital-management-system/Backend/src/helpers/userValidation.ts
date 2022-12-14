import joi from 'joi';


export const registerSchema = joi.object(
    
    {
        name: joi.string().required().min(5),
        role: joi.string().required(),
        email:joi.string().email().exist().required(),
        password:joi.string().required().min(8)
    }
)

export const loginSchema=joi.object({

    email:joi.string().email().exist().required(),
    password:joi.string().required().min(8)

})