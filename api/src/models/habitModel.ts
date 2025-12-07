import mongoose, {
  Schema,
  InferSchemaType,
  HydratedDocument,
  Model,
} from 'mongoose';

const lastResetHistorySchema = new Schema({
  count_streak: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const habitSchema = new Schema(
  {
    userID: { type: String, required: true, trim: true },

    habitName: { type: String, required: true },

    description: { type: String, required: true },

    count_failure: { type: Number, default: 0, required: true },

    isArchived: { type: Boolean, default: false, required: true },

    lastResetDate: { type: Date, default: new Date() },

    lastResetHistory: {
      type: [lastResetHistorySchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export type HabitType = InferSchemaType<typeof habitSchema>;
export type HabitDocument = HydratedDocument<HabitType>;
export type HabitModel = Model<HabitType>;

export const Habit = mongoose.model<HabitType>('Habit', habitSchema);
