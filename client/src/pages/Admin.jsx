import React, { useState } from "react";
import api from "../services/api";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await api.post("/auth/login", { email, password });
      alert("Login Success");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}
