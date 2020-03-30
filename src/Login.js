import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please login</h2>
          <input
            type="text"
            class="form-control mb-2"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
          />
          <input
            type="password"
            class="form-control mb-2"
            name="password"
            placeholder="Password"
            required=""
          />
          <label class="checkbox mb-4">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
