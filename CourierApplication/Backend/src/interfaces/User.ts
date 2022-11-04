import {Request} from 'express';

export interface User extends Request {


    body:{

        id:number,
        name:string,
        email:string,
        role:string,
        password:string,
    }

}


export interface Data{

    role:string,
    name:string,
    id:number,
    email:string,
    iat:number,
    exp:number,
}