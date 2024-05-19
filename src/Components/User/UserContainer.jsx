import React from "react";
import { useEffect, useState } from "react";
import { getUser } from "../ApiCalls";
import User from ".";

const UserContainer = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();
      setName(data.name);
      //Error Handling
    };
    fetchData();
  }, []);

  return <User name={name} />;
};

export default UserContainer;
