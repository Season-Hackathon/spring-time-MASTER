const express = require('express')
const planController = require('../controller/Cplan');

const router = express.Router()

router.get('plans/me', planController.getMyPlans)
router.get('plans/meshare', planController.getMyLinks)
router.get('plans/:userId', planController.getOthersPlans)

router.post('plans/me', planController.createMyPlans)
router.post('plans/:userId', planController.createOthersPlans)



module.exports = router