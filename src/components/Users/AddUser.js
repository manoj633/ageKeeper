import React, { useState } from "react";

import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UsersList from "./UsersList";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameValidity, setUsernameValidity] = useState(true);

  const [enteredAge, setEnteredAge] = useState("");
  const [ageValidity, setAgeValidity] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length < 1) {
      setUsernameValidity(false);
      setAgeValidity(false);
      return;
    }
    props.onAddUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    });
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setUsernameValidity(true);
    }
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 1) {
      setAgeValidity(true);
    }
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <div className="col s12 m6 offset-m3 neuro">
        <div>
          <div>
            <form className="col s12" onSubmit={addUserHandler}>
              <div className="row m_t25">
                <div className="col s12">
                  <label
                    htmlFor="Username"
                    className={` ${usernameValidity ? "" : "invalid"} `}
                  >
                    Username
                  </label>
                  <input
                    id="Username"
                    type="text"
                    value={enteredUsername}
                    minLength="3"
                    onChange={usernameChangeHandler}
                  />
                </div>
              </div>
              <div className="row m_t15">
                <div className="col s12">
                  <label
                    htmlFor="age"
                    className={` ${ageValidity ? "" : "invalid"} `}
                  >
                    Age (years)
                  </label>
                  <input
                    id="age"
                    min={10}
                    max={108}
                    step={1}
                    value={enteredAge}
                    onChange={ageChangeHandler}
                  />
                </div>
              </div>
              <div className="row m_t15 col offset-m5">
                <Button type="submit" label="Add User" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddUser;
