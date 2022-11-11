export interface RegisterUser {
  email: string;
  password: string;

  name: string;
}

export interface LoginUser {
  email: string;

  password: string;
}

export interface Login {
  user: {
    email: string;
    role: string;
    name: string;
  };

  token: string;
  message: string;
}
