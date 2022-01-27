# 리덕스 redux

    - 하나의 스토어에서 모든 데이터를 관리
    - 컴포넌트 -> dispatch() -> 액션 -> 리듀서 -> 스토어 -> connect() -> 컴포넌트
    src - store - actions
                - reudcers
        - component - Nav / ProductList / ProductItem / CartList / CartItem

# fetch("주소").then()

==============================================================

# 액션 Action => 객체

        - type 속성을 가지고 있어야 한다. ( 어떤 동직인지를 표시하는 표기 )
        - 액션 생성 함수 Action Creator  액션응 생성해 주는 함수

# 리듀서 Reducer

        - state 에 변화를 일으키는 함수
        - 현재상태 state 와 Action을 파라미터로 받아서 스토어에서 Action에 맞춰서 State 변화를 준다.

# 스토어 store

        - 현재 앱의 state, Reducer함수, 내장함수를 가지고 있다.
        - State를 수시로 확인을 해서 현재 변경된 상태를 알려준다.
        - store가 가진 내장함수
                - dispatch(Action) : Action를 파라미터로 가지오 있고 스토어가 리듀서 함수를 실행하고 리듀서 함수가 넘긴 액션을 처리해서 새로운 상태로 만들어 준다.
                - subscribe() : dispatch가 될 때 함수를 호출 한다.
        - 하나의 스토어만 사용한다.
        - state 는 읽기 전용 기존의 고유의 값은 수정 되지 않는다.
        - 리듀서는 현재(이전)상태를 수정하는것이 아니라 변화를 일으킨 상태 객체를 만들어 반환한다.
        - store를 만들 때
        - const store =createStore(파라미터)

# combineReducers

        - 여러개의 리듀서를 묶어준다

# useSelector()

        - 상태를 조회 해준다.
        - state 상태에 어떤 값이 있는지 조회 해준다.
