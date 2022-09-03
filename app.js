const express = require('express');
const cors = require('cors')
const FileUpload = require('express-fileupload')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const db = require('./app/config/dbDeploy');
const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')
const CommentsRoutes = require('./app/api/comments/Routes')
const CoupleInfoRoutes = require('./app/api/coupleinfos/Routes')
const EventInfoRoutes = require('./app/api/eventinfos/Routes')
const EventImageRoutes = require('./app/api/eventimages/Routes')
const NorekRoutes = require('./app/api/norek/Routes');
const Users = require('./app/api/user/Routes')
const Auth = require('./app/api/auth/Routes')
const dotenv = require('dotenv')
dotenv.config();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db
})

const URL = '/api/v1'
const app = express();

app.use(cors({
  credentials: true,
  // origin: 'https://be-test-wedding.herokuapp.com'
}))
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  // store: store,
  cookie: {
    maxAge: 60*60*1000,
    secure: 'auto'
  }
}))
app.use(FileUpload())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// store.sync();

app.use(`${URL}`, CommentsRoutes);
app.use(`${URL}`, CoupleInfoRoutes);
app.use(`${URL}`, EventInfoRoutes);
app.use(`${URL}`, EventImageRoutes);
app.use(`${URL}`, NorekRoutes);
app.use(`${URL}`, Users);
app.use(`${URL}`, Auth);

module.exports = app;
