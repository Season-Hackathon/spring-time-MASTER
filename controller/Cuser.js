const models = require("../model");
const fs = require("fs");

/* 회원가입 화면 */
exports.users = (req, res) => {
  res.render("users");
};

/* 회원가입 시, id 중복확인 */
exports.isId = (req, res) => {
  models.User.findOne({
    where: { userId: req.body.userId },
  }).then((result) => {
    console.log(result);
    if (result == null) {
      // id가 없어서 가져온 데이터가 없으면
      return res.send(true); // 사용 가능
    } else {
      return res.send(false); // 사용 불가능
    }
  });
};

/* 회원가입 시, User 정보 저장 */
exports.post_user = (req, res) => {
  console.log(req.body);

  let object = {
    userId: req.body.userId,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };

  models.User.create(object).then((result) => {
    res.send(result);
  });
};

// 로그인 페이지 렌더링
exports.login_index = (req, res) => {
  res.render("login", { login_id: req.session.login_id });
};

// 로그인 시스템 구현
exports.post_login = (req, res) => {
  Models.User.findOne({
    where: { userId: req.body.userId },
  }).then((result) => {
    if (result == null) {
      return res.send("false");
    }
    console.log("result", result);

    if (req.body.password == result.password) {
      req.session.userId = req.body.userId;
      req.session.login_id = req.body.userId;
      console.log(req.session);
      return res.send("true"); // 로그인 성공
    }
    return res.send("false"); // 로그인 실패
  });
};
// 비밀번호 변경 페이지 렌더링, 아이디 갑 전달
exports.post_modify = (req, res) => {
  res.render("modify", { id: req.body.userId });
};

// 비밀번호 변경 실행
exports.post_update = (req, res) => {
  let newObj = {
    password: req.body.password,
  };
  Models.User.update(newObj, { where: { userId: req.body.userId } }).then(
    (result) => {
      res.send("비밀번호 수정 성공!");
    }
  );
};

// id 유무 검사
exports.find_isId = (req, res) => {
  Models.User.findOne({
    where: { userId: req.body.userId },
  }).then((result) => {
    console.log("id 유무 검사 : ", result);
    if (result == null) {
      // id가 DB 존제하지 않는 경우(가입되지 않은 아이디)
      console.log("아이디 없음");
      return res.send(false); // 사용 불가
    } else {
      console.log("아이디 있음");
      return res.send(true); // 사용 가능
    }
  });
};

// 로그아웃
exports.logout = (req, res) => {
  req.session.userId = "";
  console.log(req.session);

  res.send("true");
};
