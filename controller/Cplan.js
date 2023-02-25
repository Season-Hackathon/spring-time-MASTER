const { Plan, User } = require('../models')

module.exports = {
    getMyPlans: async (req, res) => {
        try {
            const userId = req.body.userId;
            if (userId == undefined) {
                return res.json({
                    ok: false,
                    message: "userId가 없습니다."
                })
            }
            const owner = await User.findOne({
                where: {userId: userId}
            }) 
            const plans = await Plan.findAll({
                where: {
                    owner: owner
                },
                attributes : ['name']
            }).then((res) => res.map((value)=> value.dataValues));
            
            return res.status(200).json({
                ok: true,
                owner:owner.name,
                plans
            })
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    createMyPlans: async (req, res) => {
        try {
            const userId = req.userId;
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
        try {
            const userId = req.params.userId;
            const owner = await User.findOne({
                where: {userId: userId}
            }) 
            const plans = await Plan.findAll({
                where: {
                    owner: owner
                },
                attributes : ['name']
            }).then((res) => res.map((value)=> value.dataValues));
            
            return res.status(200).json({
                ok: true,
                owner:owner.name,
                plans
            })
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
        try {
            const userId = req.params.userId;
            const owner = await User.findOne({
                where: {userId: userId}
            }) 
            const plans = await Plan.findAll({
                where: {
                    owner: owner
                },
                attributes : ['name']
            }).then((res) => res.map((value)=> value.dataValues));
            
            return res.status(200).json({
                ok: true,
                owner:owner.name,
                plans
            })
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
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
        try {
            const userId = req.body.userId;

            const link = `https://www.spring-time/plans/${userId}`

            res.status(200).json({
                link,
            })
             
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
};