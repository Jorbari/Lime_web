import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Signup.css";

const SignUp = props => {
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

  const handleBlur = () => {};

  const handleNext = e => {
    e.preventDefault();
    setNext(true);
  };

  return (
    <section className="form-section">
      <h1 className="login-text mr-5">S I G N U P</h1>
      <Form className="signup-form">
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
            </Form.Group>

            <Form.Group as={Col}>
              <button
                type="submit"
                className="btn-lg btn-styles"
                value="LOG IN"
                onClick={e => handleNext(e)}
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
              <Form.Label className="form-label">E-mail:</Form.Label>
              <Form.Control type="email" className="login-input-styles" />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicPassword"
              className="form-input"
            >
              <Form.Label className="form-label">Company name:</Form.Label>
              <Form.Control type="text" className="login-input-styles" />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="formBasicPassword"
              className="form-input"
            >
              <Form.Label className="form-label">Role:</Form.Label>
              <Form.Control type="text" className="login-input-styles" />
            </Form.Group>
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
                onClick={e => {
                  e.preventDefault();
                }}
              >
                SIGN UP
              </button>
            </Form.Group>
          </>
        )}
        <div className="d-flex justify-content-center link">
          <p>Have an Account? </p> <Link to="/login">Login</Link>
        </div>
      </Form>
    </section>
    // <>
    //   {!other ? (
    //     <Form className="login-form">
    //       <h1 className="login-text mr-5">S I G N U P</h1>
    //       <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
    //         <Row>
    //           <Col>
    //             <Form.Label>First Name:</Form.Label>
    //             <Form.Control type="text" className="grid-input-style" />
    //           </Col>
    //           <Col>
    //             <Form.Label>Last Name:</Form.Label>
    //             <Form.Control type="text" className="grid-input-style" />
    //           </Col>
    //         </Row>
    //       </Form.Group>

    //       <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
    //         <Form.Label>Create Password:</Form.Label>
    //         <Form.Control type="email" className="login-input-styles" />
    //       </Form.Group>

    //       <Form.Group as={Col} controlId="formBasicPassword" className="pt-5">
    //         <Form.Label>Confirm password:</Form.Label>
    //         <Form.Control type="password" className="login-input-styles" />
    //       </Form.Group>
    //       <Form.Group className="pt-5">
    //         <Button
    //           as={(Col, "input")}
    //           // as="input"
    //           variant="primary"
    //           type="button"
    //           className="btn-lg btn-styles mx-3"
    //           value="Next"
    //           onClick={e => {
    //             e.preventDefault();
    //             setOther(true);
    //           }}
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} controlId="formBasicCheckbox" className="ml-4">
    //         <Form.Text className="login-forget-password pt-2">
    //           Have an account? <span className="login-text">Login</span>
    //         </Form.Text>
    //       </Form.Group>
    //     </Form>

    //   ) : (
    //     <Form className="login-form">
    //       <h1 className="signup-text mr-5">S I G N U P</h1>
    // <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
    //   <Form.Label>E-mail:</Form.Label>
    //   <Form.Control type="email" className="login-input-styles" />
    // </Form.Group>

    // <Form.Group as={Col} controlId="formBasicPassword" className="pt-5">
    //   <Form.Label>Company name:</Form.Label>
    //   <Form.Control type="text" className="login-input-styles" />
    // </Form.Group>
    // <Form.Group as={Col} controlId="formBasicPassword" className="pt-5">
    //   <Form.Label>Role:</Form.Label>
    //   <Form.Control type="text" className="login-input-styles" />
    // </Form.Group>
    //       <Form.Group className="pt-5">
    //         <Button
    //           as={(Col, "input")}
    //           // as="input"
    //           variant="primary"
    //           type="submit"
    //           className="btn-lg btn-styles mx-3"
    //           value="SIGN UP"
    //         />
    //       </Form.Group>
    //     </Form>
    //   )}
    // </>
  );
};

export default SignUp;
