# SPA ( Single Page Application )

# JSX 문법을 사용한다.

# npm start

    - 리액트 시작

# 변수

    - 변수는 {} 안에

# 단독태그

    - ex) <input /> 으로 선언

# class - x // className - o

# inline 에 스타일 적용 시

    - style = {{fontSize :"50px",width:"300px}} : Object으로 값을 받는다. 키값은 카멜표기법 사용

# 주석 처리

    - {/*주석문 내용*/}

# MVC 방식 ( Model / Controller / View )

# 컴포넌트

    - props : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 데이터 값
    - state : 컴포넌트의 상태는 저장하고 변경 되면 변경된 값으로 변경
    - context : 상위 컴포넌트에서 생성해서 모든 하위 요소로 전달 되는 데이터

# props

    - prop 값이 없으면 true 리턴
    - 상위 컴포넌트에서 하위 컴포넌트로 전달 / 하위 컴포넌트p rops 읽기 전용 (하위 컴포넌트에서는 props 값을 변경 할 수 없다)
    - defaultProps : default 값 정의
    - propTypes : type 정의 (isRequired : 필수 여부 정의)

# state

    - 동적으로 값을 변경 할 수 있다.
    - useState 함수 컴포넌트를 사용

# map()

    - Array.map(function(a,b,c) {})
    a : 요소 / b : index / c : Array 전체

# class형 components

    # state 생성
    - constructor(){} 안에 state를 만든다.
    - this.state ={ 키 : 기본값}
    - 그 값을 꺼내 올때 this.state.값

    # state 변경
    - this.setState(변경값)

    # render()
    - render() 함수가 jsx 부분을 반환

# useEffect()

    - useEffect(()=>{ 마운팅될때 실행할 값 return 언마운트 될때 값},[])
    - 마운팅 -> 업데이트 -> 언마운트

# useRef()

    - DOM에 접근해야 할때 사용
    - 스크롤, DOM 크기, 무비플레이어, 케러셀 ... 외부라이브러리
    - input, textarea

# context()

    - 전역으로 값을 사용 할 수 있게 해주는
