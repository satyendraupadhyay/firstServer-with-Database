const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expenseC');

const expense = express.Router();

expense.post('/expense/add-expense', expenseController.postExpense);

expense.get('/expense/get-expense', expenseController.getExpense);

expense.delete('/expense/delete-expense/:id', expenseController.deleteExpense);

module.exports = expense;