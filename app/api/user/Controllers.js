const { User } = require('../../db/models')
const argon2 = require('argon2')

const getUser = async (req, res) => {
  try {
    const result = await User.findAll({
      attributes: ['uuid','name','email','role'],
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}
const getUserById = async (req, res) => {
  try {
    const result = await User.findOne({
      attributes: ['uuid', 'name', 'email', 'role'],
      where: {
        uuid: req.params.id
      }
    });
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password Tidak Cocok" })
  const hashPassword = await argon2.hash(password);
  try {
    await User.create(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role
      }
    )
    res.status(201).json({ msg: 'Register Berhasil' })
  } catch (error) {
    console.log(error.messege);
  }

}

const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if(!user) return res.status(404).json({msg: "user tidak ditemukan"})
  const { name, email, password, confPassword, role } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confPassword) return res.status(400).json({ msg: "Password Tidak Cocok" })
  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role
      },
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: 'Update Berhasil' })
  } catch (error) {
    console.log(error.messege);
  }
}

const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" })
  try {
    await User.destroy(
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: 'Delete Berhasil' })
  } catch (error) {
    console.log(error.messege);
  }
}

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}