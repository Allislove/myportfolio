import React, { useState } from "react";
import api from "../../../axios.config";
import "./css/subscribers.css";

export const Subscribers = (props) => {
  const [email, setEmail] = useState("");
    
  const handleSubmit = async (e) => {
    const sub = "/subscribers";
    // console.log(token);
    e.preventDefault();
    const data = {
      email,
    };

    const headers = {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${token}`,
      Accept: "application/json",
    };

    await api
      .post(sub, data, { headers: headers })
      .then((res) => {
        const data = res.data;
        // console.log(data)
        //console.log(data.message);
        if (
          data.message ===
            "Usuario registrado exitosamente a la BD de subscribers!" ||
          data.statusCode === 200
        ) {
          window.location.href = "/";
          console.log(":.OK.:");
        }
        // console.log(data.message);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="subscribers">
      <form onSubmit={handleSubmit}>
      <p> Subscribete a nuestro boletin, te informaremos de posts nuevos.</p>

        <div className="">
          <input
            type="text"
            className="form-control"
            placeholder="youremail@gmail.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-dark form-control mb-2 mr-sm-2 mt-5"
        >
          Subs
        </button>
      </form>
    </div>
  );
};
