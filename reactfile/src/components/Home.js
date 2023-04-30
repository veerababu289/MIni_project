import { React, useContext, useEffect, useState } from "react";
import { store } from "../Dashboard/Main";
import axios from "axios";

const Home = () => {
  let [token,setToken] = useContext(store);
  console.log("token in home", token);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/home", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);
  if (!token) {
    console.log("no token");
    return (window.location.href = "/login");
  }

  return (
    <center>
      {data && (
        <div>
          && <div> Hello {data.username} </div>
          <button onClick={setToken(null)}>Logout</button>
          <h1>Hello</h1>
        </div>
      )}
      <div>Hello</div>
    </center>
  );
};

export default Home;
