import axios from "axios";
import React from "react";

function AjaxPage() {
  return (
    <div className="AjaxPage">
      <h1>Ajax 사용해 봅시다.</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
              result.data.forEach((x) => {
                console.log(x.name);
              });
            })
            .catch(() => {
              console.log("실패");
            });
        }}
      >
        Ajax 요청
      </button>
    </div>
  );
}

export default AjaxPage;
