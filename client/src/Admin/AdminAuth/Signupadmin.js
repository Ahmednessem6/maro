import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function SignupAdmin() {
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Axios.post("http://localhost:4000/api/v1/use/signUP", {
      firstName: name,
      lastName: secondname,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data.save !== undefined) {
        localStorage.setItem("Idforadmin", res.data.save._id);
        navigate("/questions");
      }

    });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(to bottom right, #1d2b3a, #0f3460)",
      padding: "50px"
    }}>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)"
      }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Second Name:
          <input
            type="text"
            value={secondname}
            onChange={(e) => setSecondname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" style={{
          backgroundColor: "#f5af19",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>Submit</button>
      </form>
    </div>
  );
}