<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define("Plan", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
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
=======
const Sequelize = require('sequelize')
const { DataTypes } = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
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
                },

            },
            {
                // 테이블에 대한 설정 지정
                sequelize, // static init의 매개변수와 연결되는 옵션, model/index.js에서 연결
                timestamps: true, // true시 createAt, updateAt 컬럼 추가 각각 생성 및 수정 시 시간 반영
                underscored: false, // 테이블과 컬럼명을 자동으로 캐멀케이스로 만든다.
                modelName: "Plan", // 프로젝트에서 사용하는 모델의 이름
                tableName: "plan", // 실제 데이터베이스의 테이블 이름
                paranoid: true, // true로 설정 시 데이터 삭제 시 완벽하게 삭제하지 않고 삭제기록
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db) {
        db.User.hasMany(db.Plan, {
            foreignKey: {name: "owner", type: DataTypes.STRING},
            sourceKey: "userId"
        });
    }
};
>>>>>>> 24b5572e695770c19f039f34554ffa41e9bb4a42
