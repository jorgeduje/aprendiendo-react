import { useState, useEffect } from "react";
import styles from "./UsersList.module.css";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/users");
    data.then((res) => setUsers(res.data));
  }, []);

  return (
    <div className={styles.usersContainers}>
      {users.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h1
              style={{
                color: "yellow",
              }}
            >
              {elemento.name}
            </h1>
            <h3>{elemento.phone}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
