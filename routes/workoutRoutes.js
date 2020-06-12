const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// GET one workout
router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// PUT one workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one workout
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router