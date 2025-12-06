import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { Habit } from '../models/habitModel';

type HabitObj = {
  userID: string;
  habitName: string;
  description: string;
  // lastResetHistory: LastResetHistory[];
};

export const getAllHabits = asyncHandler(
  async (req: Request, res: Response) => {
    const { userID } = req.body;

    const habits = await Habit.find({ userID });
    if (!habits.length) {
      res.status(400).json({ message: 'There are no habits yet.' });
      return;
    }

    res.status(200).json({ message: 'Founded habits.', habits });
  },
);

export const createHabit = asyncHandler(async (req: Request, res: Response) => {
  const { userID, habitName, description } = req.body;

  if (!userID || !habitName || !description) {
    res.status(400).json({ message: 'Wrong data.' });
    return;
  }

  const habitObj: HabitObj = {
    userID,
    habitName,
    description,
  };

  const createHabit = await Habit.create(habitObj);
  res.status(200).json({ message: 'Founded habits.', createHabit });
});

/// ---------------------------------------------- do zrobienia
export const resetHabitStreak = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const resetHabit = await Habit.findByIdAndUpdate(id, {
      // count_failure: count
    });
  },
);
