const User = require('../models/user');

exports.postUser = async (req, res, next) => {
    const username = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.number;

    const data = await User.create({username: username, phonenumber: phonenumber, email: email})
    res.status(201).json({newUserDetail: data});

}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);

    } catch (err) {
        console.log(err);
    }
}

exports.deleteUser = async (req, res) => {
    const uId = req.params.id;
    await User.destroy({where: {id: uId}});
    res.sendStatus(200);
}