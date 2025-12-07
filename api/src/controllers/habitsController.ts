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
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: 'userID is required.' });
      return;
    }

    const habits = await Habit.find({ userID: id });
    if (!habits.length) {
      res.status(400).json({ message: 'No habits yet.' });
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
  res.status(200).json({ message: 'Habit was added.', createHabit });
});

/// ---------------------------------------------- do zrobienia
export const resetHabitStreak = asyncHandler(
  async (req: Request, res: Response) => {
    const { id, lastResetDate } = req.body;

    console.log('hello');

    const endDate = new Date();
    const resetHabit = await Habit.findByIdAndUpdate(
      id,
      {
        $inc: { count_failure: 1 },
        lastResetDate: endDate,
        $push: {
          lastResetHistory: {
            count_streak: calculateDays(lastResetDate, endDate),
            startDate: lastResetDate,
            endDate,
          },
        },
      },
      { new: true },
    );

    console.log('hello2');
    res.status(200).json({
      success: true,
      data: resetHabit,
    });
  },
);

export function calculateDays(
  startDate: Date | string,
  endDate: Date | string,
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const timeDifference = end.getTime() - start.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return Math.round(daysDifference);
}
