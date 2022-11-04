import dotenv from 'dotenv';


dotenv.config();

export const sqlconfig = {


    user:process.env.DB_USER as string,

    password: process.env.DB_PWD as string,

    database:process.env.DB_NAME as string,

    server:'localhost',

    pool:{

        max:10,

        min:0,

        idleTimeoutMillis:30000,

    },

    options:{

        encrypt:true,

        trustServerCertificate:true,
    }
}