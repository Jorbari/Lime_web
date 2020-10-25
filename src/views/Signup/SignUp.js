import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import limeLogo from "../../assets/Group 9.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

import "./Signup.css";

const SignUp = () => {
  const [next, setNext] = React.useState(false);

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
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label">Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
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
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input"
            >
              <Form.Label className="form-label">Create Password:</Form.Label>
              <Form.Control type="email" className="login-input-styles" />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicPassword"
              className="form-input"
            >
              <Form.Label className="form-label">Confirm password:</Form.Label>
              <Form.Control type="password" className="login-input-styles" />
            </Form.Group>

            <Form.Group as={Col}>
              <button
                type="submit"
                className="btn-lg btn-styles"
                value="LOG IN"
                onClick={e => {
                  e.preventDefault();
                  setNext(true);
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
