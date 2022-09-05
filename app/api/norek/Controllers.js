const { Norek, User } = require('../../db/models')

const getNorek = async (req, res) => {
  try {
    const result = await Norek.findAll({
      attributes: ['uuid','bank', 'name', 'number'],
      include: [{
        model: User,
        attributes: ['name', 'email']
      }]
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getNorekById = async (req, res) => {
  try {
    const result = await Norek.findOne({
      attributes: ['uuid','bank', 'name', 'number'],
      where: {
        uuid: req.params.id
      }
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const createNorek = async (req, res) => {
  const bank = req.body.bank
  const name = req.body.name
  const number = req.body.number

  try {
    const result = await Norek.create(
      {
        bank: bank,
        name: name,
        number: number,
        userId: req.userId
      }
    )
    res.status(201).json({ msg: 'event info created', result: result })
  } catch (error) {
    console.log(error.messege);
  }

}

const updateNorek = async (req, res) => {
  const bank = req.body.bank
  const name = req.body.name
  const number = req.body.number

  try {
    await Norek.update({
      bank: bank,
      name: name,
      number: number,
      userId: req.userId
    }, {
      where: {
        uuid: req.params.id
      }
    })
    res.status(200).json({ msg: 'couple info updated' })
  } catch (error) {
    console.log(error.messege)
  }
}

const deleteNorek = async (req, res) => {
  try {
    await Norek.destroy({
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json({ msg: 'event info deleted' })
  } catch (error) {
    console.log(error.messege)
  }
}

module.exports = {
  getNorek,
  getNorekById,
  createNorek,
  deleteNorek,
  updateNorek
}