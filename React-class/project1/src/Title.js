import React from "react";

class Title extends React.Component {
  render() {
    let arr1 = [
      { title1: "html/css", title2: "상" },
      { title1: "javascript", title2: "중상" },
      { title1: "react", title2: "중" },
    ];

    return (
      <div>
        {arr1.map(function (a, b) {
          return <div key={a.title1}>{a.title1}</div>;
        })}
      </div>
    );
  }
}
export default Title;
