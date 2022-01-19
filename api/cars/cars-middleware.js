const db = require('../../data/db-config')

const checkCarId = async (req, res, next) => {
  const id = await db('cars').where('id', req.params.id)
  if (!id) {
    next({ status: 404, message: `car with id ${req.params.id} is not found` })
  } else {
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    next({ status: 400, message: `${req.body.vin} is missing` })
  } else if (!req.body.make) {
    next({ status: 400, message: `${req.body.make} is missing` })
  } else if (!req.body.model) {
    next({ status: 400, message: `${req.body.model} is missing` })
  } else if (!req.body.mileage) {
    next({ status: 400, message: `${req.body.mileage} is missing` })
  }
    else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
