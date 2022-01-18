const Car = require('./cars-model')
const router = require('express').Router()

router.get('/'), async (req, res, next) => {
    console.log('here')
    try {
        const data = await Car.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
} 

router.get('/:id', async (req, res, next) => {
    try {
      const car = await Car.getById(req.params.id)
      res.json(car)
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
