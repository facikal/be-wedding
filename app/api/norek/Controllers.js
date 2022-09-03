const { Norek } = require('../../db/models')

const getNorek = async (req, res) => {
  try {
    const result = await Norek.findAll();
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getNorekById = async (req, res) => {
  try {
    const result = await Norek.findOne({
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
  const { bank, name, number } = req.body;

  try {
    await Norek.create(
      {
        bank: bank,
        name: name,
        number: number,
        userId: req.userId
      }
    )
    res.status(201).json({ msg: 'norek created', result: result })
  } catch (error) {
    console.log(error.messege);
  }

}

const updateNorek = async (req, res) => {
  const { bank, name, number } = req.body;

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
    res.status(200).json({ msg: 'Norek updated' })
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
    res.status(200).json({ msg: 'norek deleted' })
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