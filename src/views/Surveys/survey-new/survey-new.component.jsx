import React, { useState, useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import CustomButton from "../../../components/custom-button/custom-button.component";
import { getAllProjects } from "../../../redux/project/project.actions";
import { createSurvey } from "../../../redux/survey/survey.action";

import { DropdownMenu, Caret, ButtonGroup } from "./survey-new.styles";

const SurveyNew = (props) => {
  const { toggleNewSurveyView, history, projects, surveys } = props;
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const findIndex = projects.find((data) => data._id == project);
    // console.log(findIndex);
    // console.log(project);

    await props.createSurvey(
      {
        name,
        tag,
        category,
        project: findIndex?.title,
        projectId: project,
      },
      history,
      surveys,
      toggleModal,
      toggleNewSurveyView
    );
  };

  useEffect(() => {
    props.getAllProjects();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Modal
        open={open}
        onClose={() => toggleModal()}
        center
        modalId
        dialogClassName="br-4"
      >
        <div style={{ height: "fit-content", padding: "30.8px 35.8px" }}>
          <p className="title">Create Survey</p>
          <form
            className="w-full max-w-lg new-project-form"
            onSubmit={(e) => handleSubmit(e)}
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
                  borderRadius: 0,
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
                  <div className="dropdown">
                    <Form.Control
                      type="text"
                      className="grid-input-style login-input-styles dropdown-toggle"
                      required
                      data-toggle="dropdown"
                      value={category}
                      placeholder="Name of Category"
                      readOnly
                      style={{
                        height: "36px",
                        fontSize: "15px",
                        backgroundColor: "white",
                        paddingLeft: 0,
                        borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                        borderRadius: 0,
                        cursor: "pointer",
                      }}
                    />
                    <Caret></Caret>
                    <DropdownMenu
                      className="dropdown-menu"
                      onClick={(event) => {
                        event.persist();
                        console.log(event);
                        setCategory(event.target.id);
                      }}
                    >
                      <span className="dropdown-item" id="Baseline">
                        Baseline
                      </span>
                      <span className="dropdown-item" id="Midline">
                        Midline
                      </span>
                      <span className="dropdown-item" id="Endline">
                        Endline
                      </span>
                    </DropdownMenu>
                  </div>
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
                      borderRadius: 0,
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
                onChange={(e) => setProject(e.target.value)}
                style={{
                  height: "36px",
                  fontSize: "15px",
                  backgroundColor: "white",
                  paddingLeft: 0,
                  borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
                  borderRadius: 0,
                }}
              >
                <option value="" disabled selected>
                  Select Project
                </option>
                {projects?.length > 0 &&
                  projects.map((item) => (
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

      <ButtonGroup>
        <CustomButton type="submit" primary onClick={() => toggleModal()}>
          Start from scratch
        </CustomButton>
        <CustomButton type="submit" primary>
          Import questions
        </CustomButton>
        {/* <CustomButton type="submit" primary>Suggest Template</CustomButton> */}
      </ButtonGroup>
    </div>
  );
};

const mapStateToProps = ({
  survey: { isLoading, status, surveys },
  project: { projects },
}) => ({
  isLoading,
  status,
  surveys,
  projects,
});

export default connect(mapStateToProps, { createSurvey, getAllProjects })(
  SurveyNew
);
