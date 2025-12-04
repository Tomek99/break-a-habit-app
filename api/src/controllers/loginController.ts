import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    res.status(400).json({ message: 'Wrong email or password' });
    return;
  }

  const userData: UserType = {
    id: user._id.toString(),
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  };

  res.status(200).json({ message: 'You logged in', userData });
});
