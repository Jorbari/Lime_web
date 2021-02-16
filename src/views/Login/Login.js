import React, { useEffect, useState } from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authenticate } from "../../redux/auth/auth.actions";

import "./Login.css";

const usernameRegEx = /^\w{3,}$/;
// const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
const passwordRegEx = /^\w{4,}$/;

const Login = (props) => {
  const { history } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleEmailInput = (value) => {
    if (usernameRegEx.test(value) && passwordRegEx.test(password)) {
      setUsername(value);
      setSubmitButtonDisabled(false);
      setUsernameError(false);
      return;
    }

    if (usernameRegEx.test(value) && !passwordRegEx.test(password)) {
      setUsername(value);
      setUsernameError(false);
      setSubmitButtonDisabled(true);
      return;
    }

    setUsername(value);
    setSubmitButtonDisabled(true);
    setUsernameError(true);
    return;
  };

  const handlePasswordInput = (value) => {
    if (passwordRegEx.test(value) && usernameRegEx.test(username)) {
      setPassword(value);
      setSubmitButtonDisabled(false);
      setPasswordError(false);
      return;
    }

    if (passwordRegEx.test(value) && !usernameRegEx.test(username)) {
      setPassword(value);
      setPasswordError(false);
      setSubmitButtonDisabled(true);
      return;
    }

    setPassword(value);
    setSubmitButtonDisabled(true);
    setPasswordError(true);
    return;
  };

  useEffect(() => {
    if (usernameRegEx.test(username) && passwordRegEx.test(password)) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [username, password]);

  const handleBlur = (type) => {
    if (type === "email") {
      if (!usernameRegEx.test(username) && username !== "") {
        setUsernameError("Username cannot be less than 3 characters");
      } else {
        setUsernameError(null);
      }
    }

    if (type === "password") {
      if (!passwordRegEx.test(password) && password !== "") {
        setPasswordError("Password cannot be less than 4 characters");
      } else {
        setPasswordError(null);
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await props.authenticate({ username, password }, history);
    await setPassword("");
  };

  return (
    <section className="form-section">
      <h1 className="login-text">LOG IN</h1>
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Col} controlId="formBasicEmail" className="form-input">
          <Form.Label className="form-label">Username:</Form.Label>
          <Form.Control
            type="text"
            className="login-input-styles"
            onChange={(e) => handleEmailInput(e.target.value)}
            required
            value={username}
            style={{
              border: usernameError ? "1px solid red" : "none",
            }}
            onBlur={() => handleBlur("email")}
          />
        </Form.Group>
        <div className="error-div">
          {usernameError && <p className="error-text">{usernameError}</p>}
        </div>

        <Form.Group
          as={Col}
          controlId="formBasicPassword"
          className="form-input"
        >
          <Form.Label className="form-label">Password:</Form.Label>
          <Form.Control
            type="password"
            className="login-input-styles"
            onChange={(e) => handlePasswordInput(e.target.value)}
            required
            value={password}
            style={{
              border: passwordError ? "1px solid red" : "none",
            }}
            onBlur={() => handleBlur("password")}
          />
        </Form.Group>

        <div className="error-div">
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>
        <div className="error-div">
          {props.status === "error" && (
            <p className="error-text">{props.payload}</p>
            // <p className="error-text">Username/password is incorrect</p>
          )}
        </div>
        <Form.Group as={Col}>
          <button
            type="submit"
            className="btn-lg btn-styles"
            value="LOG IN"
            disabled={props.isLoading ? props.isLoading : submitButtonDisabled}
            style={{
              background: submitButtonDisabled ? "#c4c4c4" : "#b6e6bd",
              border: submitButtonDisabled
                ? "1px solid #c4c4c4"
                : "1px solid #b6e6bd",
            }}
          >
            {props.isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "LOG IN"
            )}
          </button>
        </Form.Group>

        <div className="d-flex justify-content-center link">
          <Link to="/signup">Create Account</Link>
        </div>
      </Form>
    </section>
  );
};

const mapStateToProps = ({ auth: { isLoading, status } }) => ({
  isLoading,
  status,
});

export default connect(mapStateToProps, { authenticate })(Login);
