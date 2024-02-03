const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Smapp = require('./models/smapp');
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

app.post('/socialmedia/add-sm', async (req, res, next) => {
    const link = req.body.link;
    const description = req.body.description;

    console.log(req.body);

    const data = await Smapp.create({link: link, description: description })
    res.status(201).json({newSmDetail: data});

})

app.get('/socialmedia/get-sm', async (req, res, next) => {
    try {
        const smp = await Smapp.findAll();
        res.json(smp);

    } catch (err) {
        console.log(err);
    }
})

// app.delete('/expense/delete-expense/:id', async (req, res) => {
//     const uId = req.params.id;
//     await Expense.destroy({where: {id: uId}});
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








// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Smdb = require('./models/smapp');

// var cors = require('cors');

// const app = express();

// app.use(cors());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use((req, res, next) => {
// //   User.findByPk(1)
// //     .then(user => {
// //       req.user = user;
// //       next();
// //     })
// //     .catch(err => console.log(err));
// // });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.post('/socialmedia/add-sm', async (req, res, next) => {
//   const link = req.body.link;
//   const description = req.body.description;

//   console.log(req.body);
//   console.log(req.body);

//   const data = await Smdb.create({link: link, description: description })
//   res.status(201).json({newSmDetail: data});

// })

// app.use(errorController.get404);


// // app.get('/expense/get-expense', async (req, res, next) => {
// //     try {
// //         const expenses = await Expense.findAll();
// //         res.json(expenses);

// //     } catch (err) {
// //         console.log(err);
// //     }
// // })

// // app.delete('/expense/delete-expense/:id', async (req, res) => {
// //     const uId = req.params.id;
// //     await Expense.destroy({where: {id: uId}});
// //     res.sendStatus(200);
// // })

// sequelize
//   .sync()
//   .then(result => {
//     // console.log(result);
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// // Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// // User.hasMany(Product);
// // User.hasOne(Cart);
// // Cart.belongsTo(User);
// // Cart.belongsToMany(Product, { through: CartItem });
// // Product.belongsToMany(Cart, { through: CartItem });

// // sequelize
// //   // .sync({ force: true })
// //   .sync()
// //   .then(result => {
// //     return User.findByPk(1);
// //     // console.log(result);
// //   })
// //   .then(user => {
// //     if (!user) {
// //       return User.create({ name: 'Max', email: 'test@test.com' });
// //     }
// //     return user;
// //   })
// //   .then(user => {
// //     // console.log(user);
// //     return user.createCart();
// //   })
// //   .then(cart => {
// //     app.listen(3000);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });



// // const path = require('path');

// // const express = require('express');
// // const bodyParser = require('body-parser');

// // const errorController = require('./controllers/error');
// // const sequelize = require('./util/database');

// // const Product = require('./models/product');
// // const User = require('./models/user');

// // // const Expense = require('./models/expense');
// // var cors = require('cors');

// // const app = express();

// // app.use(cors());

// // app.set('view engine', 'ejs');
// // app.set('views', 'views');

// // const adminRoutes = require('./routes/admin');
// // const shopRoutes = require('./routes/shop');
// // const contactUs = require('./routes/contact');
// // const succeSS = require('./routes/success');
// // // const user = require('./routes/userR');
// // const expense = require('./routes/expenseR');

// // app.use(bodyParser.json({ extended: false }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use((req, res, next) => {
// //     User.findByPk(1)
// //     .then(user => {
// //         req.user = user;
// //         next();
// //     })
// //     .catch(err => console.log(err))
// // })

// // app.use('/admin', adminRoutes);
// // app.use(shopRoutes);
// // app.use(contactUs);
// // app.use(succeSS);
// // // app.use(user);
// // app.use(expense);

// // // app.post('/expense/add-expense', async (req, res, next) => {
// // //     const price = req.body.price;
// // //     const name = req.body.name;
// // //     const category = req.body.category;

// // //     const data = await Expense.create({price: price, name: name, category: category})
// // //     res.status(201).json({newExpenseDetail: data});

// // // })

// // // app.get('/expense/get-expense', async (req, res, next) => {
// // //     try {
// // //         const expenses = await Expense.findAll();
// // //         res.json(expenses);

// // //     } catch (err) {
// // //         console.log(err);
// // //     }
// // // })

// // // app.delete('/expense/delete-expense/:id', async (req, res) => {
// // //     const uId = req.params.id;
// // //     await Expense.destroy({where: {id: uId}});
// // //     res.sendStatus(200);
// // // })

// // app.use(errorController.get404);

// // Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
// // User.hasMany(Product);

// // sequelize
// // // .sync({force: true})
// // .sync()
// // .then(result => {
// //     return User.findByPk(1);
// // })
// // .then(user => {
// //     if (!user) {
// //         return User.create({ name: 'Max', email: 'test@test.com' });
// //     }
// //     return user
// // })
// // .then(user => {
// //     // console.log(user);
// //     app.listen(3000);
// // })
// // .catch(err => {
// //     console.log(err);
// // });


