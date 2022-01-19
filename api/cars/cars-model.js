const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('accounts').where('id', id)
}

const create = async (newCar) => {
  const [id] = await db('accounts').insert(newCar)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
}