const router = require('express').Router();

const {
    getAllUser,
    createUser
  } = require('../../controllers/user-controller');

  // Set up GET all and POST at /api/pizzas
router
    .route('/')
    .post(createUser);

module.exports = router;