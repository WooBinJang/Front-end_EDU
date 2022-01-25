# 이미지 가져오기

    1. 절대경로 웹서버에 올린 후 http://~~.jpg
    2. import 변수명 from "이미지 파일 경로";
    <img src={변수명} alt=""/>
    3. require() 사용
    <img src ={require("이미지경로")} />

# 페이지 연결

    <Link to="이동 경로"></Link>

# History

    - history.go() : 앞으로가기
    - history.back() / history.go(-1) : 뒤로가기
    = history.push(url) : 특정 url 으로가기
