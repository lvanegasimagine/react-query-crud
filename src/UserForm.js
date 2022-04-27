import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "./usersApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });
  const queryClient = useQueryClient();
  const {isLoading, mutate} = useMutation(api.updateUser, {
   
    onSuccess: (data) => {
      queryClient.setQueryData(["user", user.id], data);
      setIsEditing(false);
    }
  });
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      mutate(fields);
  }

  // if(isLoading){
  //   return 'Saving Your Changes';
  // }

  return <div style={{paddingTop: 20}}>
      <form onSubmit={handleSubmit}>
            <label>
                Name: name
                <input name="name" type='text' value={fields.name} onChange={handleChange} style={{width: '100%', marginBottom: 20}}/>
            </label>
            <label>
                Name: details
                <input name="details" type='text' value={fields.details} onChange={handleChange} style={{width: '100%', marginBottom: 20}}/>
            </label>
            <button type="submit">Save</button>
      </form>
  </div>;
};

export default UserForm;
