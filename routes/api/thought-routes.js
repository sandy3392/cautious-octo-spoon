const router = require('express').Router();

const {
    getAllthoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThoughtbyId,
    postReaction,
    deleteReaction
    
  } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllthoughts);


router
    .route('/:userId')
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThoughtbyId);

    //api/thought/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(postReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
    
module.exports = router;