import mongoose, { Schema, Document } from 'mongoose';

export interface IHabit extends Document {
  userID: string;
  habitName: string;
  description: string;
  count_streak: number;
  count_failure: number;
  isArchived: boolean;
  lastResetDate: Date;
  lastResetHistory: LastResetHistory[];
}

export interface LastResetHistory {
  count_streak: number;
  startDate: Date;
  endDate: Date;
}

const habitsSchema = new Schema<IHabit>(
  {
    userID: {
      type: String,
      required: true,
      trim: true,
    },
    habitName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    count_streak: {
      type: Number,
      required: true,
    },
    count_failure: {
      type: Number,
      default: 0,
      required: true,
    },
    isArchived: {
      type: Boolean,
      default: false,
      required: true,
    },
    lastResetDate: {
      type: Date,
      required: true,
    },

    // lastResetHistory: {
    //   type: LastResetHistory[],
    //   required: true
    // }
  },
  {
    timestamps: true, // automatyczne createdAt i updatedAt
  },
);

export const Habit = mongoose.model<IHabit>('Habit', habitsSchema);
