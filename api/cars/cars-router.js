const Car = require('./cars-model')
const router = require('express').Router()
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require ('./cars-middleware')

router.get('/'), async (req, res, next) => {
    console.log('here')
    try {
        const data = await Car.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
} 

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
      const car = await Car.getById(req.params.id)
      res.json(car)
    } catch (err) {
      next(err)
    }
  })

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
      const newCar = await Car.create(req.body)
      res.json(newCar)
    } catch (err) {
      next(err)
    }
  })

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router
