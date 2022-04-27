import React from "react";
import { useQuery } from "react-query";
import * as api from "./usersApi";

const Users = ({setUserId}) => {

  const { data, error, isError, isLoading } = useQuery("users", api.getUsers);

  if(isLoading) {
    return <div>Loading Users...</div>
  }

  if(isError) {
    return <div>'something is wrong'</div>
  }

  return (
    <>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name} <button onClick={() => setUserId(user.id)}>View</button> </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
