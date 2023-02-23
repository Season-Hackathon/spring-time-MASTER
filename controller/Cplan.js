const { Plan, User } = require('../models')

module.exports = {
    getMyPlans: async (req, res) => {
        try {
            const userId = req.userId;
            const owner = await User.findOne({
                where: {userId: userId}
            }) 
            const plans = await Plan.findAll({
                where: {
                    owner: owner
                }
            }).then((res) => res.map((value)=> value.dataValues));
            
            return res.status(200).json({
                ok: true,
                message: "모든 일정 조회 성공",
                owner,
                plans
            })
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    createMyPlans: async (req, res) => {
        
    },
    getOthersPlans: async (req, res) => {
        
    },
    createOthersPlans: async (req, res) => {
        
    },
    getMyLinks: async (req, res) => {
        
    }
};