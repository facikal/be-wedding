const { User } = require('../../db/models')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');
const passport = require('passport')

const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" })
  const match = await argon2.verify(user.password, req.body.password)
  if (!match) return res.status(400).json({ msg: "Wrong Password" })
  req.session.userId = user.uuid;

  const uuid = user.uuid
  const name = user.name
  const email = user.email
  const role = user.role
  res.status(200).json({ uuid, name, email, role })
}

const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "mohon login ke akun anda" })
  }
  const user = await User.findOne({
    attributes: ['uuid', 'name', 'email', 'role'],
    where: {
      uuid: req.session.userId
    }
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" });
  res.status(200).json(user)
  passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
      id: req.user.uuid,
      name: req.user.name,
      email: req.user.email
    })}

  }

  const logOut = async (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(400).json({ msg: "tidak dapat logout" })
      passport.authenticate('jwt', { session: false }), (req, res) => {
        req.logout();
        return res.status(200).json({
          success: 'true',
          message: 'Logged Out'
        })
      }
      // res.status(200).json({ msg: "anda telah logout" })
    })
  }

  module.exports = {
    Login,
    Me,
    logOut
  }