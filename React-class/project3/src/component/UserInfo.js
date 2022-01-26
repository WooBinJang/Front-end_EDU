import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import Loading from "./Loading";
function UserInfo() {
  const [users, usersCng] = useState([]);
  const [loading, loadingCng] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        usersCng(res.data);
        loadingCng(false);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="UserInfo">
      <h1>UserInfo</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <UserList users={users} />
        </div>
      )}

      {}
    </div>
  );
}

export default UserInfo;
