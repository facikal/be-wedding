const { Comment } = require('../../db/models')
const { Op } = require('sequelize')

const getComment = async (req, res) => {
  try {
    const hadir = req.query.hadir || "Hadir";
    const tidakHadir = req.query.tidakHadir || "Tidak Hadir";
    const masihRagu = req.query.masihRagu || "Masih Ragu";
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const offset = limit * page;

    const totalRows = await Comment.count()

    const totalHadir = await Comment.count({
      where: {
        kehadiran: {
          [Op.like]: hadir
        }
      }
    })
    const totalTidakHadir = await Comment.count({
      where: {
        kehadiran: {
          [Op.like]: tidakHadir
        }
      }
    })
    const totalMasihRagu = await Comment.count({
      where: {
        kehadiran: {
          [Op.like]: masihRagu
        }
      }
    })

    const totalPage = Math.ceil(totalRows / limit);


    const result = await Comment.findAll({
      attributes: ['id', 'nama', 'ucapan', 'kehadiran', 'createdAt'],
      offset: offset,
      limit: limit,
      order: [
        ['id', 'DESC']
      ]
    });
    res.status(200).json({
      result: result,
      page: page,
      limit: limit,
      totalRows: totalRows,
      totalPage: totalPage,
      totalHadir: totalHadir,
      totalTidakHadir: totalTidakHadir,
      totalMasihRagu: totalMasihRagu
    })
  } catch (error) {
    console.log(error.messege);
  }
}

const createComment = async (req, res) => {
  try {
    const result = await Comment.create(req.body);
    res.status(201).json({
      messege: 'success',
      result: result
    })
  } catch (error) {
    console.log(error.messege);
  }
}

module.exports = {
  getComment,
  createComment,
}