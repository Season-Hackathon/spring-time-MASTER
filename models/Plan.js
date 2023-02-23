module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define("Plan", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: "접속자 이름"
        },
        day: {
            type: DataTypes.STRING(40),
            allowNull: false,
            comment: "요일"
        },
        color: {
            type: DataTypes.STRING(60),
            allowNull: false,
            comment: "색상"
        },
        start: {
            type: DataTypes.STRING(100),
            allowNull:false,
            comment: "시작"
        },
        end: {
            type: DataTypes.STRING(100),
            allowNull:false,
            comment: "끝"
        }
    },{
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Users", // 테이블 이름
        timestamps: true, // createAt & updateAt 활성화
        paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 o
    });

    Plans.associate = models => {
        Plans.belongsTo(models.Users, {
            foreignKey: "owner", 
            sourceKey: "userId"
        })
    }

    return Plan;
}