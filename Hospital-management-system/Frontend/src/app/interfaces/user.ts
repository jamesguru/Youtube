export interface RegisterUser{

    id?:number,
    email:string,
    password:string,
    role:string,
    name:string,
    issent?:number,

}

export  interface LoginUser{

    email:string,

    password:string,

    
}


export interface Login {
    
    user:{


    email:string
    role:string, 
    name:string, 

    }
    
    token:string,
    message:string

}