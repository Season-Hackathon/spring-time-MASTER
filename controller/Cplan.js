const { Plan, User } = require('../models')

module.exports = {
    getMyPlans: async (req, res) => {
        try {
            const userId = req.body.userId;
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
        
        try {
            const userId = req.body.userId;
            const owner = await User.findOne({
                where: {userId: userId}
            }) 
            const { 
                day,
                start,
                end,
                color
            } = req.body;

            if(!day || !start || !end || !color) {
                res.status(400).send(`Cannot get body`);
            }

            const newPlan = await Plan.create({
                day,
                start,
                end,
                color,
                owner
            })

            return res.status(200).json({
                ok: true,
                id,
                name: owner.name,
                day,
                start,
                end,
                start,
            })

        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    getOthersPlans: async (req, res) => {
        
    },
    createOthersPlans: async (req, res) => {
        
        async (req, res) => {
            try {
                const userId = req.body.userId;
                const owner = await User.findOne({
                    where: {userId: userId}
                }) 
                const { 
                    name,
                    day,
                    start,
                    end,
                    color
                } = req.body;
    
                if(!day || !start || !end || !color) {
                    res.status(400).send(`Cannot get body`);
                }
    
                const newPlan = await Plan.create({
                    name,
                    day,
                    start,
                    end,
                    color,
                    owner
                })
    
                return res.status(200).json({
                    ok: true,
                    id,
                    name: owner.name,
                    day,
                    start,
                    end,
                    start,
                })
    
            } catch(e) {
                console.log(e)
                res.status(500).json(e)
            }
        }
    },
    getMyLinks: async (req, res) => {
        
    }
};