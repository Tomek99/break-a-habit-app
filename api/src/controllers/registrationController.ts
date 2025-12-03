import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';

type UserType = {
  first_name: string;
  last_name: string;
  email: string;
  passwordHash: string;
};

// Tworzy nowego uzytkownika
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { first_name, last_name, password, email } = req.body;

  if (!first_name || !last_name || !password || !email) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400).json({ message: 'This email exist' });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser: UserType = { first_name, last_name, email, passwordHash };

  await User.create(newUser);
  const { passwordHash: _, ...userWithoutPassword } = newUser;

  res.status(201).json({
    message: 'User created successfully',
    user: userWithoutPassword,
  });
});
