import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { Habit } from '../models/habitModel';

export const getAllArchivedHabits = asyncHandler(
  async (req: Request, res: Response) => {
    const { userID } = req.body;
    const archivedHabits = await Habit.find({ userID });

    if (!archivedHabits) {
      res.status(400).json({ messeage: 'Empty' });
      return;
    }

    res.status(200).json({ message: 'Something was found', archivedHabits });
  },
);

export const deleteArchivedHabit = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const deleteHabit = await Habit.findByIdAndDelete(id);

    if (!deleteHabit) {
      res.status(400).json({ messeage: "Habit doesn't exist" });
      return;
    }

    res.status(200).json({ message: 'Item has been deleted', deleteHabit });
  },
);
