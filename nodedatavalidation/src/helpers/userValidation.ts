
import joi from 'joi';

export const registerSchema=joi.object({

    email:joi.string().email().exist().required(),
    password:joi.string().required().min(8)

})

export const loginSchema=joi.object({

    email:joi.string().email().exist().required(),
    password:joi.string().required().min(8)

})

