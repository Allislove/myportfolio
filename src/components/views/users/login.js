import React from "react";
import api from '../../../axios.config';
import "../../style/forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false
    };
  }



  componentDidMount() {
    document.title = "Login";
  }

  componentDidUpdate () { 
    document.title = "Login";
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    const signin = 'signin'

    event.preventDefault();

    api
      .post(
        signin,
        this.state
      )
      .then((res) => {
        console.log(res);
        const data = res.data;
        console.log(data);
        if (data.token) {
         // console.log("Usuario logeado!");
         // console.log(data.token);
          localStorage.setItem("token", data.token);
          this.setState({ isAuthenticated: true });

          console.log(this.state.isAuthenticated);
          // this.notifySucces();
          return window.location.href = '/';
        }
      })
      .catch((error) => {
        console.log("DATOS DE ACCESO INCORRECTOS.");
        return new Error(error) + this.notifyError();
      });
  };

  notifySucces = () => {
    toast.success("Usuario logeado!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      icon: "🚀",
      theme: "dark"

    });
  };

  notifyError = () => {
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

  render() {
    const { email, password } = this.state;
    return (
      <div className="main ioform text-center container mt-5">
        <form
          style={{ maxWidth: "480px", margin: "auto" }}
          onSubmit={this.handleSubmit}
        >
          <h3 className="h6 mb-3 font-weight-normal">Please sign in</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="form-control mb-2 mr-sm-2"
            placeholder="Email"
            required
            autoFocus
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control mb-2 mr-sm-2"
            placeholder="Password"
            required
          />
          <div className="checkbox">
            <input type="checkbox" value="remember-me" />
          </div>
          <div className="mt-3">
            <button
              className="btn btn-primary btn-dark form-control mb-2 mr-sm-2"
              type="submit"
            >
              Sign in
            </button>
          </div>

          <p>
            Don't you have an account yet? <br />
            <a href="/signup">Sign up</a>
          </p>
        </form>
        <ToastContainer/>
      </div>
    );
  }
}
