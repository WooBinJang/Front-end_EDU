import React from "react";
import { connect } from "react-redux";

function UserList({ users, aa }) {
  console.log(users);
  return (
    <div className="UserList">
      <div className="user-info-list">
        {users.map((userValue, userIndex, userArr) => {
          return (
            <div className="user-info-item" key={userValue.id}>
              <p>
                <span>Name : </span>
                {userValue.name}
              </p>
              <p>
                <span>Address : </span>
                {userValue.address.city}
              </p>
              <p>
                <span>Company: </span>
                {userValue.company.name}
              </p>
              <p>
                <span>Email : </span>
                {userValue.email}
              </p>
              <p>
                <span>Phone : </span>
                {userValue.phone}
              </p>
              <p>
                <span>Website: </span>
                {userValue.website}
              </p>
            </div>
          );
        })}
      </div>
      <p>{aa[0].name}</p>
    </div>
  );
}
function setProps(a) {
  return {
    aa: a,
  };
}
export default connect(setProps)(UserList);
