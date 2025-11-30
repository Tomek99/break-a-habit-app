import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { usersModel } from '../models/usersModel';

// Zwraca liste wszystkich użytkowników
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'ok' });
});
