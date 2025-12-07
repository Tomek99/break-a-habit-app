import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { Habit } from '../models/habitModel';

export const getAllArchivedHabits = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const archivedHabits = await Habit.find({ id, isArchived: true });

    if (!archivedHabits) {
      res.status(400).json({ messeage: 'Empty' });
      return;
    }

    res.status(200).json({ message: 'Something was found', archivedHabits });
  },
);

export const archiveHabit = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const archivedHabit = await Habit.findByIdAndUpdate(
      id,
      {
        isArchived: true,
      },
      { new: true },
    );

    if (!archivedHabit) {
      res.status(400).json({ messeage: "Habit doesn't exist" });
      return;
    }

    res.status(200).json({ message: 'Item has been archived', archivedHabit });
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
