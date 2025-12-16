import express from 'express';
import { getStudentDetails, addStudents } from '../controllers/studentController.js';

const router = express.Router();

router.get('/get-students', getStudentDetails);
router.post('/add-students', addStudents);

export default router;