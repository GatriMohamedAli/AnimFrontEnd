import React, { useEffect } from "react";
import "./login.css";
import axios from "axios";
const Login = () => {
  const user = {
    username: "di",
    password: "daly",
  };
  const fetchEmp = async () => {
    const response = await axios
      .post("http://localhost:8080/users/api/login", user)
      .then((response) => console.log("Respone ",response))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchEmp();
  }, []);

  return (
    <>
      <div class='sidenav'>
        <div class='login-main-text'>
          <h2>
            Application
            <br /> Login Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div class='main'>
        <div class='col-md-6 col-sm-12'>
          <div class='login-form'>
            <form>
              <div class='form-group'>
                <label>User Name</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='User Name'
                />
              </div>
              <div class='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  class='form-control'
                  placeholder='Password'
                />
              </div>
              <button type='submit' class='btn btn-black'>
                Login
              </button>
              <button type='submit' class='btn btn-secondary'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
