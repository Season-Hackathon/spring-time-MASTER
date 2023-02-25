const { Plan, User } = require('../models')

module.exports = {
    getMyPlans: async (req, res) => {
        try {
            const userId = req.header('userId');

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
                    owner: owner.userId
                },
            }).then((res) => res.map((value)=> value.dataValues));
            
            console.log("plan!!!!!!!!!!", plans)
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
            const userId = req.header('userId');
            if (userId == undefined) {
                return res.json({
                    ok: false,
                    message: "userId가 없습니다."
                })
            }
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
                name: owner.name,
                start,
                end,
                color,
                owner: owner.userId
            })

            return res.status(200).json({
                ok: true,
                id: newPlan.id,
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
            console.log("userId : ", userId)
            if (!userId) {
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
                    owner: owner.userId
                }
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
        try {
                const userId = req.params.userId;
                console.log()
                if (userId == undefined) {
                    return res.json({
                        ok: false,
                        message: "userId가 없습니다."
                    })
                }
                const owner = await User.findOne({
                    where: {userId: userId}
                }) 
                console.log("owner: ", owner)
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
                    owner: owner.userId
                })

                return res.status(200).json({
                    ok: true,
                    id: newPlan.id,
                    name: newPlan.name,
                    day,
                    start,
                    end,
                })

        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    getMyLinks: async (req, res) => {
        try {
            const userId = req.header('userId');
            if (userId == undefined) {
                return res.json({
                    ok: false,
                    message: "userId가 없습니다."
                })
            }
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