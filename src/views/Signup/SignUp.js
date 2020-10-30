import React, { useEffect, useState } from "react";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Signup.css";

import { register } from "../../reducers/auth";

const nameRegEx = /^\w{2,}$/;
const usernameRegEx = /^\w{3,}$/;
const emailRegEx = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^\w{4,}$/;

const SignUp = props => {
  const { history } = props;
  const [next, setNext] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState(null);
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState(null);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState(null);
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      firstnameError === null &&
      lastnameError === null &&
      usernameError === null &&
      passwordError === null &&
      confirmPasswordError === null
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    firstname,
    lastname,
    username,
    password,
    confirmPassword,
    firstnameError,
    lastnameError,
    usernameError,
    passwordError,
    confirmPasswordError
  ]);

  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      firstnameError === null &&
      lastnameError === null &&
      usernameError === null &&
      passwordError === null &&
      confirmPasswordError === null &&
      email !== "" &&
      company !== "" &&
      role !== "" &&
      emailError === null &&
      companyError === null &&
      roleError === null
    ) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [email, company, role, emailError, companyError, roleError]);

  const handleBlur = type => {
    if (type === "firstname") {
      if (!nameRegEx.test(firstname) && firstname !== "") {
        setFirstnameError("First Name cannot be less than 2 characters");
      } else {
        setFirstnameError(null);
      }
    }

    if (type === "lastname") {
      if (!nameRegEx.test(lastname) && lastname !== "") {
        setLastnameError("Last Name cannot be less than 2 characters");
      } else {
        setLastnameError(null);
      }
    }

    if (type === "username") {
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

    if (type === "confirmPassword") {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError(null);
      }
    }

    if (type === "email") {
      if (!emailRegEx.test(email) && email !== "") {
        setEmailError("Invalid Email");
      } else {
        setEmailError(null);
      }
    }

    if (type === "company") {
      if (company.length < 2 && company !== "") {
        setCompanyError("Company name is too short");
      } else {
        setCompanyError(null);
      }
    }

    if (type === "role") {
      if (role.length < 2 && role !== "") {
        setRoleError("Role name is too short");
      } else {
        setRoleError(null);
      }
    }
  };

  const handleNext = e => {
    e.preventDefault();
    setNext(true);
  };

  const onSubmit = async e => {
    e.preventDefault();

    await props.register(
      { firstname, lastname, username, password, email, company, role },
      history
    );
    await setPassword("");
  };

  return (
    <section className="form-section">
      <h1 className="login-text mr-5">S I G N U P</h1>
      <Form className="signup-form" onSubmit={e => onSubmit(e)}>
        {!next ? (
          <>
            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Row>
                <Col sm={12} md={6} className="name-col">
                  <Form.Label className="form-label">First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={({ target: { value } }) => setFirstname(value)}
                    required
                    value={firstname}
                    style={{
                      border: firstnameError ? "1px solid red" : "none"
                    }}
                    onBlur={() => handleBlur("firstname")}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label">Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={({ target: { value } }) => setLastname(value)}
                    required
                    value={lastname}
                    style={{
                      border: lastnameError ? "1px solid red" : "none"
                    }}
                    onBlur={() => handleBlur("lastname")}
                  />
                </Col>
              </Row>

              <div className="error-div">
                {firstnameError && (
                  <p className="error-text">{firstnameError}</p>
                )}
              </div>
              <div className="error-div">
                {lastnameError && <p className="error-text">{lastnameError}</p>}
              </div>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Username:</Form.Label>
              <Form.Control
                type="text"
                className="grid-input-style login-input-styles"
                onChange={({ target: { value } }) => setUsername(value)}
                required
                value={username}
                style={{
                  border: usernameError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("username")}
              />
              <div className="error-div">
                {usernameError && <p className="error-text">{usernameError}</p>}
              </div>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Create Password:</Form.Label>
              <Form.Control
                type="password"
                className="login-input-styles"
                onChange={({ target: { value } }) => setPassword(value)}
                required
                value={password}
                style={{
                  border: passwordError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("password")}
              />

              <div className="error-div">
                {passwordError && <p className="error-text">{passwordError}</p>}
              </div>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicPassword"
              className="form-input"
            >
              <Form.Label className="form-label">Confirm password:</Form.Label>
              <Form.Control
                type="password"
                className="login-input-styles"
                onChange={({ target: { value } }) => setConfirmPassword(value)}
                required
                value={confirmPassword}
                style={{
                  border: confirmPasswordError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("confirmPassword")}
              />

              <div className="error-div">
                {confirmPasswordError && (
                  <p className="error-text">{confirmPasswordError}</p>
                )}
              </div>
            </Form.Group>

            <Form.Group as={Col}>
              <button
                type="submit"
                className="btn-lg btn-styles"
                value="LOG IN"
                onClick={e => handleNext(e)}
                disabled={disabled}
                style={{
                  border: disabled ? "1px solid #c4c4c4" : "1px solid #b6e6bd",
                  background: disabled ? "#c4c4c4" : "#b6e6bd",
                  color: disabled ? "#FFFFFF" : "#5b5656"
                }}
              >
                Next
              </button>
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Email:</Form.Label>
              <Form.Control
                type="email"
                className="grid-input-style login-input-styles"
                onChange={({ target: { value } }) => setEmail(value)}
                required
                value={email}
                style={{
                  border: emailError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("email")}
              />
              <div className="error-div">
                {emailError && <p className="error-text">{emailError}</p>}
              </div>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Company name:</Form.Label>
              <Form.Control
                type="text"
                className="grid-input-style login-input-styles"
                onChange={({ target: { value } }) => setCompany(value)}
                required
                value={company}
                style={{
                  border: companyError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("company")}
              />
              <div className="error-div">
                {companyError && <p className="error-text">{companyError}</p>}
              </div>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Role:</Form.Label>
              <Form.Control
                type="text"
                className="grid-input-style login-input-styles"
                onChange={({ target: { value } }) => setRole(value)}
                required
                value={role}
                style={{
                  border: roleError ? "1px solid red" : "none"
                }}
                onBlur={() => handleBlur("role")}
              />
              <div className="error-div">
                {roleError && <p className="error-text">{roleError}</p>}
              </div>
            </Form.Group>

            <div className="error-div">
              {props.status === "error" && (
                <p className="error-text">Username/password is incorrect</p>
              )}
            </div>
            <Form.Group as={Col}>
              <button
                type="submit"
                className="btn-lg btn-back"
                onClick={e => {
                  e.preventDefault();
                  setNext(false);
                }}
              >
                Back
              </button>
            </Form.Group>
            <Form.Group as={Col}>
              <button
                type="submit"
                className="btn-lg btn-styles"
                value="LOG IN"
                disabled={submitButtonDisabled}
                style={{
                  border: submitButtonDisabled
                    ? "1px solid #c4c4c4"
                    : "1px solid #b6e6bd",
                  background: submitButtonDisabled ? "#c4c4c4" : "#b6e6bd",
                  color: submitButtonDisabled ? "#FFFFFF" : "#5b5656"
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
                  "SIGN UP"
                )}
              </button>
            </Form.Group>
          </>
        )}
        <div className="d-flex justify-content-center link">
          <p>Have an Account? </p> <Link to="/login">Login</Link>
        </div>
      </Form>
    </section>
  );
};

const mapStateToProps = ({ auth: { isLoading, status } }) => ({
  isLoading,
  status
});

export default connect(mapStateToProps, { register })(SignUp);
