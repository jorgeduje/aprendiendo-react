import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    let getUser = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    getUser.then((res) => setUser(res.data)).catch((err) => console.log(err));
  }, [id]);

  console.log(user)

  return <div>UserDetail</div>;
};

export default UserDetail;
