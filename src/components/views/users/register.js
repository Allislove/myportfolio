import React from "react";
import axios from "axios";
import '../../style/forms.css'
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nickname: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    document.title = "Sign up";
  }

  componentDidUpdate () { 
    document.title = "Sign up";
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://morning-ocean-92164.herokuapp.com/api/v1/signup`,
        this.state,
        {
          headers: headers,
        }
      )
      .then((res) => {
        const data = res.data;
        if (data.token) {
          // console.log("Usuario registrado y logeado!");
          // console.log(data.token);
           localStorage.setItem("token", data.token);
           this.setState({ isAuthenticated: true });
 
           console.log(this.state.isAuthenticated);
           // this.notifySucces();
           return window.location.href = '/';
         }
      })
      .catch((error) => {
        return new Error(error);
      });
  };

  render() {
    const { name, nickname, email, password } = this.state;
    return (
      <div className="main ioform text-center mt-5">
          <form style={{ maxWidth: "480px", margin: "auto"  }} onSubmit={this.handleSubmit}>
            <div className="form-group">
            <h3 className="h6 mb-3 font-weight-normal">
              Please sign up
            </h3>
              <input
                className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="text"
                name="nickname"
                value={nickname}
                onChange={this.handleChange}
                placeholder="Nickname"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-input border-2 rounded-md block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            rounded-md sm:btn sm:btn-primary sm:btn-dark sm:form-control 
            sm:mb-2 sm:mr-sm-2 sm:rounded-md" type="submit">
                Sign up
              </button>
              
              <p className="text-sm mt-4">
                Did you have an account yet? <br />
                <a className="text-blue-500 hover:text-blue-700" href="/signin">Sign in</a>
              </p>
            </div>
          </form>
      </div>
    );
  }
}
