const { User } = require('../models');

const userController = {
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
    },
    // get all pizzas
    // getAllUser(req, res) {
    //     User.find({})
    //     .populate({
    //       path: 'thoughts',
    //       select: '-__v'
    //     })
    //       .select('-__v')
    //       .sort({ _id: -1 })
    //       .then(dbPizzaData => res.json(dbPizzaData))
    //       .catch(err => {
    //         console.log(err);
    //         res.status(400).json(err);
    //       });
    //   }
}

module.exports = userController;