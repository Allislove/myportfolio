import React, { useState, useEffect } from "react";
import api from '../../../axios.config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../style/forms.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    const signin = "signin";

    event.preventDefault();

    api
      .post(signin, { email, password })
      .then((res) => {
        const data = res.data;
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
          notifySuccess();
          console.log(isAuthenticated)
          return (window.location.href = "/");
        }
      })
      .catch((error) => {
        console.log("DATOS DE ACCESO INCORRECTOS.");
        return new Error(error) + notifyError();
      });
  };

  const notifySuccess = () => {
    toast.success("Usuario logeado!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      icon: "🚀",
      theme: "dark",
    });
  };

  const notifyError = () => {
    toast.error("Datos de acceso incorrectos", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="main ioform text-center container sm:mt-5">
      <form
        style={{ maxWidth: "480px", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <h3 className="h6 mb-3 font-weight-normal">Please sign in</h3>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder="Email"
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder="Password"
          required
        />
        <div className="checkbox">
          <input type="checkbox" value="remember-me" />
        </div>
        <div className="mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            rounded-md sm:btn sm:btn-primary sm:btn-dark sm:form-control 
            sm:mb-2 sm:mr-sm-2 sm:rounded-md"
            type="submit"
          >
            Sign in
          </button>
        </div>

        <p className="text-sm mt-4">
          Don't you have an account yet? <br />
          <a className="text-blue-500 hover:text-blue-700"href="/signup">Sign up</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}
