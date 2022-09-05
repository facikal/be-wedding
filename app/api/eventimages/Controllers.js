const { Eventimage, User } = require('../../db/models')
const { Op } = require('sequelize')
const path = require('path')
const fs = require('fs')

const getImage = async (req, res) => {
  try {
    const search = req.query.title || ""
    const result = await Eventimage.findAll({
      attributes: ['uuid', 'title', 'image','url'],
      include: [{
        model: User,
        attributes: ['name', 'email']
      }]
    });
    const title = await Eventimage.findAll({
      attributes: ['uuid', 'title', 'image', 'url'],
      where: {
        title: {
          [Op.like]: search
        }
      }
    })
    res.json({
      result: result,
      title: title
    })
  } catch (error) {
    console.log(error)
  }
}

const getEventImageById = async (req, res) => {
  try {
    const result = await Eventimage.findOne({
      attributes: ['uuid', 'title', 'image', 'url'],
      where: {
        uuid: req.params.id
      }
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}


const saveImage = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'No file uploaded' })
  const title = req.body.title
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
      await Eventimage.create(
        {
          title: title,
          image: fileName,
          userId: req.userId,
          url: url,
        }
      )
      res.status(201).json({ msg: 'couple info created' })
    } catch (error) {
      console.log(error.messege);
    }
  })

}

const updateImage = async (req, res) => {
  const eventImage = await Eventimage.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!eventImage) return res.status(404).json({ msg: 'No Data Found' });
  let fileName = "";
  if (req.files === null) {
    fileName = Eventimage.image;
  } else {
    const file = req.files.file
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', '.jpeg']

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'invalid images' })

    if (fileSize > 20000000) return res.status(422).json({ msg: 'image must be less than 20MB' })

    const filePath = `./public/images/${eventImage.image}`;
    fs.unlinkSync(filePath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.messege })
    })
  }
  const title = req.body.title
  const url = `${req.protocol}://be-test-wedding.herokuapp.com/images/${fileName}`;

  try {
    await Eventimage.update({
      title: title,
      image: fileName,
      url: url,
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

const deleteImage = async (req, res) => {
  const eventImage = await Eventimage.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!eventImage) return res.status(404).json({ msg: 'No Data Found' });

  try {
    const filePath = `./public/images/${eventImage.image}`;
    fs.unlinkSync(filePath);
    await Eventimage.destroy({
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
  getImage,
  getEventImageById,
  saveImage,
  deleteImage,
  updateImage
}