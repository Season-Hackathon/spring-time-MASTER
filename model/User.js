module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userId: {
            type: DataTypes.STRING(40),
            primaryKey: true,
            allowNull: false,
            comment: "유저 아이디"
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "이메일"
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
            comment: "닉네임"
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
            comment: "비밀번호"
        }
    },{
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Users", // 테이블 이름
        timestamps: true, // createAt & updateAt 활성화
        paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 o
    });

    return User;
}