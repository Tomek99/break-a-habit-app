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

  const token = jwt.sign(
    { userId: user._id.toString() },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' },
  );

  // 3. Zapisujemy token w httpOnly cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dni
  });

  // 4. Zwracamy tylko info (bez tokena)
  res.status(200).json({
    message: 'Logged in',
    user: userData,
  });
});
