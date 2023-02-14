import React from "react";

import UserDetail from "./UserDetail";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card>
      <div className="col s12 m12 offset-m3">
        {props.usersData.map((item) => {
          return <UserDetail name={item.name} age={item.age} key={item.id} />;
        })}
      </div>
    </Card>
  );
};

export default UsersList;
