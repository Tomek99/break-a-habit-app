import { Router } from 'express';
import {
  getAllHabits,
  createHabit,
  resetHabitStreak,
} from '../controllers/habitsController';

import {
  getAllArchivedHabits,
  archiveHabit,
  deleteArchivedHabit,
} from '../controllers/archivedHabitsController';

const router = Router();

router.route('/get-all-habits/:id').get(getAllHabits);
router.route('/create-habit').post(createHabit);
router.route('/reset-habit-streak').put(resetHabitStreak);

router.route('/get-all-archived-habits/:id').get(getAllArchivedHabits);
router.route('/archive-habit').put(archiveHabit);
router.route('/delete-archived-habit').delete(deleteArchivedHabit);

export default router;
