import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";

import { createSurvey } from "../reducers/survey";

import "./NewSurvey.css";

const NewSurvey = props => {
  const { toggleNewSurveyView, history, projects, surveys } = props;
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  const handleSubmit = async e => {
    e.preventDefault();
    await props.createSurvey(
      {
        name,
        tag,
        category,
        project: project === "" ? projects[0]._id : project
      },
      history,
      surveys,
      toggleModal,
      toggleNewSurveyView
    );
  };
  return (
    <div style={{ position: "relative" }}>
      <Modal open={open} onClose={() => toggleModal()} center>
        <div style={{ height: "fit-content", padding: "30.8px 35.8px" }}>
          <p className="title">Create Survey</p>
          <form
            className="w-full max-w-lg new-project-form"
            onSubmit={e => handleSubmit(e)}
          >
            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
              style={{ marginBottom: "27px" }}
            >
              <Form.Label
                className="form-label"
                style={{ marginBottom: "7.5px" }}
              >
                Survey Name:
              </Form.Label>
              <Form.Control
                type="text"
                className="login-input-styles"
                placeholder="Name of Survey"
                onChange={({ target: { value } }) => setName(value)}
                required
                value={name}
                style={{
                  height: "36px",
                  fontSize: "15px",
                  backgroundColor: "white",
                  paddingLeft: 0,
                  borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                  borderRadius: 0
                }}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
              style={{ marginBottom: "27px" }}
            >
              <Row>
                <Col sm={12} md={6} className="name-col">
                  <Form.Label
                    className="form-label"
                    style={{ marginBottom: "7.5px" }}
                  >
                    Survey Category:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={({ target: { value } }) => setCategory(value)}
                    required
                    value={category}
                    placeholder="Name of Category"
                    style={{
                      height: "36px",
                      fontSize: "15px",
                      backgroundColor: "white",
                      paddingLeft: 0,
                      borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                      borderRadius: 0
                    }}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label
                    className="form-label"
                    style={{ marginBottom: "7.5px" }}
                  >
                    Tags:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={({ target: { value } }) => setTag(value)}
                    required
                    value={tag}
                    placeholder="Tag name"
                    style={{
                      height: "36px",
                      fontSize: "15px",
                      backgroundColor: "white",
                      paddingLeft: 0,
                      borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                      borderRadius: 0
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
              style={{ marginBottom: "27px" }}
            >
              <Form.Label
                className="form-label"
                style={{ marginBottom: "7.5px" }}
              >
                Project:
              </Form.Label>
              <Form.Control
                as="select"
                rows={3}
                className="login-input-styles"
                required
                value={project}
                onChange={({ target: { value } }) =>  setProject(value)}
                style={{
                  height: "36px",
                  fontSize: "15px",
                  backgroundColor: "white",
                  paddingLeft: 0,
                  borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                  borderRadius: 0
                }}
              >
                {projects.length > 0 &&
                  projects.map(item => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>

            <button className="form-btn btn bottom-save-btn" type="submit">
              Create Survey
            </button>
          </form>
        </div>
      </Modal>

      <div className="top-btn-group pr-4">
        <button
          className="form-btn btn top-save-btn"
          type="submit"
          onClick={() => toggleModal()}
        >
          Start from scratch
        </button>
        <button className="form-btn btn top-save-btn" type="submit">
          Import questions
        </button>
        <button className="form-btn btn top-save-btn" type="submit">
          Suggest Template
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ survey: { isLoading, status, surveys } }) => ({
  isLoading,
  status,
  surveys
});

export default connect(mapStateToProps, { createSurvey })(NewSurvey);
