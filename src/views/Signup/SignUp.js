import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";

import limeLogo from "../../assets/Group 9.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

const SignUpContainer = styled.div`
  /* margin: 0 auto; */

  .signup-text {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #5b5656;
    mix-blend-mode: normal;
  }

  .login-form {
    width: 60%;
    padding: 25px;
    margin: auto;
    height: 100%;
  }

  .login-input-styles {
    /* width: 557px; */
    height: 64px;
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
  }

  .grid-input-style {
    width: inherit;
    height: 64px;
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
  }

  .login-forget-password {
    width: 332px;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    text-align: right;
    color: #5b5656;
  }

  .login-text {
    width: 420px;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    text-align: right;
    text-decoration-line: underline;
    color: #5b5656;
  }

  .btn-styles {
    width: 485px;
    height: 76px;
    background: #b6e6bd;
    border: 1px solid #b6e6bd;
    box-sizing: border-box;
    border-radius: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #5b5656;
  }

  .limeLogo {
    margin-left: 91px;
  }
`;

const SignUp = () => {
  const [other, setOther] = React.useState(false);

  return (
    <SignUpContainer className="mw-100 pt-3 mt-3">
      <Image src={limeLogo} width="61px" height="61px" className="limeLogo" />
      <Row md={10}>
        <Col className="pt-5">
          <Image src={people} width="900px" height="700px" />
        </Col>
        <Col className="pt-2">
          {!other ? (
            <Form className="login-form">
              <h1 className="signup-text mr-5">S I G N U P</h1>
              <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
                <Row>
                  <Col>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" className="grid-input-style" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" className="grid-input-style" />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="email" className="login-input-styles" />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formBasicPassword"
                className="pt-5"
              >
                <Form.Label>Confirm password:</Form.Label>
                <Form.Control type="password" className="login-input-styles" />
              </Form.Group>
              <Form.Group className="pt-5">
                <Button
                  as={(Col, "input")}
                  // as="input"
                  variant="primary"
                  type="button"
                  className="btn-lg btn-styles mx-3"
                  value="Next"
                  onClick={(e) => {
                      e.preventDefault();
                    setOther(true);
                  }}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formBasicCheckbox"
                className="ml-4"
              >
                <Form.Text className="login-forget-password pt-2">
                  Have an account? <span className="login-text">Login</span>
                </Form.Text>
              </Form.Group>
            </Form>
          ) : (
            <Form className="login-form">
              <h1 className="signup-text mr-5">S I G N U P</h1>
              <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control type="email" className="login-input-styles" />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formBasicPassword"
                className="pt-5"
              >
                <Form.Label>Company name:</Form.Label>
                <Form.Control type="text" className="login-input-styles" />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formBasicPassword"
                className="pt-5"
              >
                <Form.Label>Role:</Form.Label>
                <Form.Control type="text" className="login-input-styles" />
              </Form.Group>
              <Form.Group className="pt-5">
                <Button
                  as={(Col, "input")}
                  // as="input"
                  variant="primary"
                  type="submit"
                  className="btn-lg btn-styles mx-3"
                  value="SIGN UP"
                />
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
    </SignUpContainer>
  );
};

export default SignUp;
