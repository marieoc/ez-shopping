import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserView from "./UserView";

const UserContainer = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(
    useSelector((state) => state.usersReducer.firstname)
  );
  const [lastName, setLastName] = useState(
    useSelector((state) => state.usersReducer.lastname)
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.usersReducer.email)
  );

  const userName = useSelector((state) => state.usersReducer.firstname);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_USER_DATA",
      payload: { firstname: firstName, lastname: lastName, email: email },
    });
  };

  return (
    <UserView
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      userName={userName}
      submitHandler={submitHandler}
    />
  );
};

export default UserContainer;
