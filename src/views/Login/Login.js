import React from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import limeLogo from "../../assets/Group 9.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

import { authenticate } from "../../reducers/auth";

import "./Login.css";

const usernameRegEx = /^\w{3,}$/;
// const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
const passwordRegEx = /^\w{4,}$/;

const Login = props => {
  const { history } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleEmailInput = value => {
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

  const handlePasswordInput = value => {
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

  const onSubmit = async e => {
    e.preventDefault();

    await props.authenticate({ username, password }, history);
    await setPassword("");
    // console.log("user", first_name);
  };

  console.log("isLoading", props.isLoading);

  return (
    <section className="form-section">
      <h1 className="login-text">LOG IN</h1>
      <Form className="login-form" onSubmit={e => onSubmit(e)}>
        <Form.Group as={Col} controlId="formBasicEmail" className="form-input">
          <Form.Label className="form-label">Username:</Form.Label>
          <Form.Control
            type="text"
            className="login-input-styles"
            onChange={e => handleEmailInput(e.target.value)}
            required
            value={username}
            style={{
              border: usernameError ? "1px solid red" : "none"
            }}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formBasicPassword"
          className="form-input"
        >
          <Form.Label className="form-label">Password:</Form.Label>
          <Form.Control
            type="password"
            className="login-input-styles"
            onChange={e => handlePasswordInput(e.target.value)}
            required
            value={password}
            style={{
              border: passwordError ? "1px solid red" : "none"
            }}
          />
        </Form.Group>
        <div className="error-div">
          {props.status === "error" && (
            <p className="error-text">Username/password is incorrect</p>
          )}
        </div>
        {/* <Form.Group as={Col} controlId="formBasicCheckbox">
          <Form.Text className="login-forget-password">
            Forgot password?
          </Form.Text>
        </Form.Group> */}
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
                : "1px solid #b6e6bd"
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
  status
});

export default connect(mapStateToProps, { authenticate })(Login);
