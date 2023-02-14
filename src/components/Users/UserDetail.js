import React from "react";

const UserDetail = (props) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <p>
              {props.name} - {`${props.age} years old`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
