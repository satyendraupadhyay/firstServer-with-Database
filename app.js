const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

// const User = require('./models/user');
var cors = require('cors');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUs = require('./routes/contact');
const succeSS = require('./routes/success');
const user = require('./routes/userR');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactUs);
app.use(succeSS);
app.use(user);

// app.post('/user/add-user', async (req, res, next) => {
//     const username = req.body.name;
//     const email = req.body.email;
//     const phonenumber = req.body.number;

//     const data = await User.create({username: username, phonenumber: phonenumber, email: email})
//     res.status(201).json({newUserDetail: data});

// })

// app.get('/user/get-user', async (req, res, next) => {
//     try {
//         const users = await User.findAll();
//         res.json(users);

//     } catch (err) {
//         console.log(err);
//     }
// })

// app.delete('/user/delete-user/:id', async (req, res) => {
//     const uId = req.params.id;
//     await User.destroy({where: {id: uId}});
//     res.sendStatus(200);
// })

app.use(errorController.get404);

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});


