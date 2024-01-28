const Expense = require('../models/expense');

exports.postExpense = async (req, res, next) => {
    const price = req.body.price;
    const name = req.body.name;
    const category = req.body.category;

    const data = await Expense.create({price: price, name: name, category: category})
    res.status(201).json({newExpenseDetail: data});

}

exports.getExpense = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);

    } catch (err) {
        console.log(err);
    }
}

exports.deleteExpense = async (req, res) => {
    const uId = req.params.id;
    await Expense.destroy({where: {id: uId}});
    res.sendStatus(200);
}