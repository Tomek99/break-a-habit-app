export interface Habit {
  id: number;
  userId: number;
  habitName: string;
  description: string;
  count_streak: number;
  count_failure: number;
  updatedAt: Date;
  createdAt: Date;
}

export let habitsModel: Habit[] = [];
