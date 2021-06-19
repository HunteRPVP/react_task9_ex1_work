import React from "react";

const ProfileDetails = (props) => {
  const user = props.resource.user.read();
  return (
    <div>
      <h4>{user.name}</h4>
      <ul>
        <li>Имя: {user.username}</li>
        <li>Почта: {user.email}</li>
        <li>Номер телефона: {user.phone}</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
