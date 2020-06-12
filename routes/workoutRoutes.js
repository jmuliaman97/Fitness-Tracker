const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .limit(1).sort({_id: -1})
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// GET workout by range
router.get('/workouts/range', (req, res) => {
  console.log('hello')
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})
  
// UPDATE workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((workout) => res.json(workout))
    .catch(err => console.error(err))
})

module.exports = router
