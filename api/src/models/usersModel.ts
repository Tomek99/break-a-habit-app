export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  passwordHash: string;
  updatedAt: Date;
  createdAt: Date;
}

export let usersModel: User[] = [];
