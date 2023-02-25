const express = require("express");
const user = require("../controller/Cuser");

const router = express.Router();

router.get("/login", user.login_index); // 로그인 화면
router.post("/login", user.post_login); // 로그인 실행
router.post("/modify", user.post_modify); // 비밀번호 변경 화면
router.post("/update", user.post_update); // 비밀번호 변경 실행
router.get("/logout", user.logout); // 로그아웃 실행

module.exports = router;
