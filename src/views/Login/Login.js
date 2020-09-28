import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";

// import lime from "./assets/Ellipse 1.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

const LoginContainer = styled.div`
  /* margin: 0 auto; */

  .login-text {
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
    width: 450px;
    height: 64px;
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
  }

  .login-forget-password {
    width: 420px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
    text-decoration-line: underline;
    color: #5b5656;
  }

  .btn-styles {
    width: 450px;
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
`;

const Login = () => {
  return (
    <LoginContainer className="mw-100 pt-5 mt-4">
      <Row md={10}>
        {/* <Image src={lime} /> */}
        <Col className="pt-5">
          <Image src={people} width="900px" height="700px" />
        </Col>
        <Col className="pt-5">
          <Form className="login-form">
            <h1 className="login-text ml-5">LOG IN</h1>
            <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="email" className="login-input-styles" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword" className="pt-5">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" className="login-input-styles" />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicCheckbox" className="ml-4">
              <Form.Text className="login-forget-password pt-2">
                Forgot password?
              </Form.Text>
            </Form.Group>
            <Form.Group className="pt-5">
              <Button
                as={(Col, "input")}
                // as="input"
                variant="primary"
                type="submit"
                className="btn-lg btn-styles mx-3"
                value="LOG IN"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </LoginContainer>
  );
};

export default Login;
