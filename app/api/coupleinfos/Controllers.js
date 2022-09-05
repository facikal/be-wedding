const { Coupleinfo, User } = require('../../db/models')
const { Op } = require('sequelize')
const path = require('path')
const fs = require('fs')

const getCoupleInfo = async (req, res) => {
  try {
    const search = req.query.search_gender || ""
    const result = await Coupleinfo.findAll({
      attributes: ['uuid','gender','full','nick','child','father','mother','image','url'],
      include: [{
        model: User,
        attributes: ['name', 'email']
      }]
    });
    const gender = await Coupleinfo.findOne({
      attributes: ['uuid','gender', 'full', 'nick', 'child', 'father', 'mother', 'image', 'url'],
      where: {
        gender: {
          [Op.like]: search
        }
      }
    })
    res.json({
      result: result,
      gender: gender
    })
  } catch (error) {
    console.log(error)
  }
}

const getCoupleInfoById = async (req, res) => {
  try {
    const result = await Coupleinfo.findOne({
      attributes: ['uuid','gender', 'full', 'nick', 'child', 'father', 'mother', 'image', 'url'],
      where: {
        uuid: req.params.id
      }
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}


const saveCoupleInfo = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'No file uploaded' })
  const gender = req.body.gender
  const full = req.body.full
  const nick = req.body.nick
  const child = req.body.child
  const father = req.body.father
  const mother = req.body.mother
  const file = req.files.file
  const fileSize = file.data.length
  const ext = path.extname(file.name)
  const fileName = file.md5 + ext
  const url = `${req.protocol}://be-test-wedding.herokuapp.com/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg']

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'invalid images' })

  if (fileSize > 20000000) return res.status(422).json({ msg: 'image must be less than 20MB' })

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.messege })
    try {
      await Coupleinfo.create(
        {
          gender: gender,
          full: full,
          nick: nick,
          child: child,
          father: father,
          mother: mother,
          image: fileName,
          url: url,
          userId: req.userId,
        }
      )
      res.status(201).json({ msg: 'couple info created' })
    } catch (error) {
      console.log(error.messege);
    }
  })

}

const updateCoupleInfo = async (req, res) => {
  const coupleInfo = await Coupleinfo.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!coupleInfo) return res.status(404).json({ msg: 'No Data Found' });
  let fileName = "";
  if (req.files === null) {
    fileName = Coupleinfo.image;
  } else {
    const file = req.files.file
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', '.jpeg']

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'invalid images' })

    if (fileSize > 20000000) return res.status(422).json({ msg: 'image must be less than 20MB' })

    const filePath = `./public/images/${coupleInfo.image}`;
    fs.unlinkSync(filePath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.messege })
    })
  }
  const gender = req.body.gender
  const full = req.body.full
  const nick = req.body.nick
  const child = req.body.child
  const father = req.body.father
  const mother = req.body.mother
  const url = `${req.protocol}://be-test-wedding.herokuapp.com/images/${fileName}`;

  try {
    await Coupleinfo.update({
      gender: gender,
      full: full,
      nick: nick,
      child: child,
      father: father,
      mother: mother,
      image: fileName,
      url: url,
      userId: req.userId,
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

const deleteCoupleInfo = async (req, res) => {
  const coupleInfo = await Coupleinfo.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!coupleInfo) return res.status(404).json({ msg: 'No Data Found' });

  try {
    const filePath = `./public/images/${coupleInfo.image}`;
    fs.unlinkSync(filePath);
    await Coupleinfo.destroy({
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json({ msg: 'couple info deleted' })
  } catch (error) {
    console.log(error.messege)
  }
}

module.exports = {
  getCoupleInfo,
  getCoupleInfoById,
  saveCoupleInfo,
  deleteCoupleInfo,
  updateCoupleInfo
}