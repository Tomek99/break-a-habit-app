import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';

// Usuwa konto użytkownika
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const isUserExist = await User.findById(id);
  if (!isUserExist) {
    res.status(400).json({ message: 'This user doesnt exist' });
    return;
  }

  const deletedUser = await User.findByIdAndDelete(id);

  res.status(201).json({ message: 'User deleted', deletedUser });
});

// Zmiana hasla
export const updatePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { id, oldPassword, newPassword } = req.body;

    if (!id || !oldPassword || !newPassword) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isMatch) {
      res.status(400).json({ message: 'Old password is incorrect' });
      return;
    }

    if (await bcrypt.compare(newPassword, user.passwordHash)) {
      res.status(400).json({ message: 'New password must be different' });
      return;
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(
      id,
      {
        passwordHash: hashPassword,
      },
      { new: true },
    );

    res.status(200).json({
      message: 'Password updated successfully',
    });
  },
);
