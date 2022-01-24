import React from "react";

class Item extends React.Component {
  // Class 형
  constructor() {
    super();
    this.state = { name: "홍길동", age: 30 };
  }

  stateCng = () => {
    this.setState({ name: "이순신" });
  };

  render() {
    // let day = ["월", "화", "수", "목", "금", "토", "일"];

    return (
      // <div>
      //   {day.map((a, b) => {
      //     return (
      //       <div key={b}>
      //         <h1>{a}요일</h1>
      //       </div>
      //     );
      //   })}
      // </div>
      <div>
        <div>
          나의 이름은 {this.state.name} 나의 나이는 {this.state.age} 입니다
        </div>
        <button onClick={this.stateCng}> 변경</button>
      </div>
    );
  }
}

export default Item;
