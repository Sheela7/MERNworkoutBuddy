const express = require('express')
const router = express.Router()
const {createWorkout, getWorkout, getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/workoutController')

//getting all of the workouts
router.get('/', getWorkouts)
//getting a single workout
router.get('/:id', getWorkout)
//post or creating a new workout
router.post('/',createWorkout )
//delete a workout
router.delete('/:id',deleteWorkout)
//update a workout
router.patch('/:id',updateWorkout)

module.exports = router