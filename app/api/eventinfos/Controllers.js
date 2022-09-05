const { EventInfo, User } = require('../../db/models')


const getEventInfo = async (req, res) => {
  try {
    const result = await EventInfo.findAll({
      attributes: ['uuid', 'dateAkad', 'locAkad', 'addressAkad', 'dateResepsi', 'locResepsi', 'addressResepsi', 'textFirstMeet', 'textJadian', 'textLamaran', 'video', 'addressGift', 'recieverGift','instagram'],
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
const getEventInfoById = async (req, res) => {
  try {
    const result = await EventInfo.findOne({
      attributes: ['uuid', 'dateAkad', 'locAkad', 'addressAkad', 'dateResepsi', 'locResepsi', 'addressResepsi', 'textFirstMeet', 'textJadian', 'textLamaran', 'video', 'addressGift', 'recieverGift', 'instagram'],
      where: {
        uuid: req.params.id
      }
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}


const saveEventInfo = async (req, res) => {
  const dateAkad = req.body.dateAkad
  const locAkad = req.body.locAkad
  const addressAkad = req.body.addressAkad
  const dateResepsi = req.body.dateResepsi
  const locResepsi = req.body.locResepsi
  const addressResepsi = req.body.addressResepsi
  const textFirstMeet = req.body.textFirstMeet
  const textJadian = req.body.textJadian
  const textLamaran = req.body.textLamaran
  const video = req.body.video
  const addressGift = req.body.addressGift
  const recieverGift = req.body.recieverGift
  const instagram = req.body.instagram
  try {
    const result = await EventInfo.create(
      {
        dateAkad: dateAkad,
        locAkad: locAkad,
        addressAkad: addressAkad,
        dateResepsi: dateResepsi,
        locResepsi: locResepsi,
        addressResepsi: addressResepsi,
        textFirstMeet: textFirstMeet,
        textJadian: textJadian,
        textLamaran: textLamaran,
        video: video,
        addressGift: addressGift,
        recieverGift: recieverGift,
        instagram: instagram,
        userId: req.userId
      }
    )
    res.status(201).json({ msg: 'event info created', result:result })
  } catch (error) {
    console.log(error.messege);
  }

}

const updateEventInfo = async (req, res) => {
  const dateAkad = req.body.dateAkad
  const locAkad = req.body.locAkad
  const addressAkad = req.body.addressAkad
  const dateResepsi = req.body.dateResepsi
  const locResepsi = req.body.locResepsi
  const addressResepsi = req.body.addressResepsi
  const textFirstMeet = req.body.textFirstMeet
  const textJadian = req.body.textJadian
  const textLamaran = req.body.textLamaran
  const video = req.body.video
  const addressGift = req.body.addressGift
  const recieverGift = req.body.recieverGift
  const instagram = req.body.instagram

  try {
    await EventInfo.update({
      dateAkad: dateAkad,
      locAkad: locAkad,
      addressAkad: addressAkad,
      dateResepsi: dateResepsi,
      locResepsi: locResepsi,
      addressResepsi: addressResepsi,
      textFirstMeet: textFirstMeet,
      textJadian: textJadian,
      textLamaran: textLamaran,
      video: video,
      addressGift: addressGift,
      recieverGift: recieverGift,
      instagram: instagram,
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

const deleteEventInfo = async (req, res) => {
  try {
    await EventInfo.destroy({
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
  getEventInfo,
  getEventInfoById,
  saveEventInfo,
  deleteEventInfo,
  updateEventInfo
}