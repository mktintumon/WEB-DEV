import React from "react";
import { useState, useEffect } from "react";

function User() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // fetching data from API server
  useEffect(function fn() {
    (async function () {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      let data = await response.json();

      setUser(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <>
      <h1>USERS</h1>
      {loading == true ? <div>Loading...</div> : <h2>{user.name}</h2>}
    </>
  );
}

export default User;
