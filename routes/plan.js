const express = require('express')
const planController = require('../controller/Cplan');

const router = express.Router()

router.get('/me', planController.getMyPlans)
router.get('/me/share', planController.getMyLinks)
router.get('/:userId', planController.getOthersPlans)

router.post('/me', planController.createMyPlans)
router.post('/:userId', planController.createOthersPlans)



module.exports = router