import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";

import limeLogo from "../../assets/Group 9.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

import { authenticate } from "../../reducers/auth";
import { decodeToken } from "../../api/helpers";

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
    /* width: 450px; */
    height: 64px;
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
  }

  .login-forget-password {
    width: 462px;
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

const Login = (props) => {
  const { history } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await props.authenticate({ username, password }, history);
    await setPassword("");
    // console.log("user", first_name);
  };

  return (
    <LoginContainer className="mw-100 pt-5 mt-4">
      <Image src={limeLogo} width="61px" height="61px" className="limeLogo" />
      <Row md={10}>
        <Col className="pt-5">
          <Image src={people} width="900px" height="700px" />
        </Col>
        <Col className="pt-5">
          <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
            <h1 className="login-text mr-5">L O G I N</h1>
            <Form.Group as={Col} controlId="formBasicEmail" className="pt-5">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                className="login-input-styles"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
                value={username}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword" className="pt-5">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                className="login-input-styles"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                value={password}
              />
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

// const mapStateToProps = ({ auth: { isLoading } }) => ({
//   isLoading,
// });
export default connect(null, { authenticate })(Login);
