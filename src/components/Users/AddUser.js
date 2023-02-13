import React from "react";

import "./AddUser.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <div className="col s12 m6 offset-m3 neuro">
        <div>
          <div>
            <form className="col s12" onSubmit={addUserHandler}>
              <div className="row m_t25">
                <div className="col s12">
                  <label htmlFor="Username">Password</label>
                  <input id="Username" type="text" />
                </div>
              </div>
              <div className="row m_t15">
                <div className="col s12">
                  <label htmlFor="age">Age (years)</label>
                  <input id="age" type="number" min={10} max={108} step={1} />
                </div>
              </div>
              <div className="row m_t15 col offset-m5">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddUser;
