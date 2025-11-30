export interface Habit {
  id: number;
  userId: number;
  habitName: string;
  description: string;
  streak: number;
  failure: number;
  createdAt: Date;
  updatedAt: Date;
}

export let habitsModel: Habit[] = [];
