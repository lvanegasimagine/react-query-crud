import React, { useState } from "react";
import { useQuery } from "react-query";
import UserForm from "./UserForm";
import * as api from "./usersApi";

const UserDetails = ({ userId }) => {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    enabled: Boolean(userId), // solo obtener si el ID de usuario es verdadero
  });
  const [isEditing, setIsEditing] = useState(false);

  if (!userId) {
    return "select a user.";
  }

  if (isLoading) {
    return "loading...";
  }

  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "CANCEL" : "EDIT"}
      </button>
      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.details}</p>
        </>
      )}
    </div>
  );
};

export default UserDetails;
