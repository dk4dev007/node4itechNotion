const express = require('express')

const {
    getFrontDev,
    addFrontDev,
    getSingleFrontDev,
    updateFrontDev,
    deleteFrontDev,
    getBackDev,
    addFrontDev,
    getSingleBackDev,
    updateBackDev,
    deleteBackDev
} = require('../controllers/dev_controller')

const router = express.Router()


// Frontend Routes
router
    .route('/front')
    .get(getFrontDev)
    .post(addFrontDev)

router
    .route('/front/:id')
    .get(getSingleFrontDev)
    .put(updateFrontDev)
    .delete(deleteFrontDev)    

// Backend Routes    
router
    .route('/back')
    .get(getBackDev)
    .post(addFrontDev)

router
    .route('/back/:id')
    .get(getSingleBackDev)
    .put(updateBackDev)
    .delete(deleteBackDev)     


module.exports = router    
        