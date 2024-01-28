const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Expense = require('./models/expense');
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

app.post('/expense/add-expense', async (req, res, next) => {
    const price = req.body.price;
    const name = req.body.name;
    const category = req.body.category;

    const data = await Expense.create({price: price, name: name, category: category})
    res.status(201).json({newExpenseDetail: data});

})

app.get('/expense/get-expense', async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);

    } catch (err) {
        console.log(err);
    }
})

app.delete('/expense/delete-expense/:id', async (req, res) => {
    const uId = req.params.id;
    await Expense.destroy({where: {id: uId}});
    res.sendStatus(200);
})

app.use(errorController.get404);

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});


