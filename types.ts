export interface User {
  id: string;
  email: string;
  password: string;
  roles: string[];
  avatar: string;
}

// export type UserWithoutPassword = Omit<User, "password">;
export interface UserWithoutPassword {
  id: string;
  name: string;
  roles: string[];
  avatar: string;
}

export interface LoginForm {
  user: string;
  password: string
}