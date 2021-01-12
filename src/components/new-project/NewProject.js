import React, { useState, useEffect } from "react";
import { Accordion, Button, Card, Form, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Notifier from "../Notifier/notifier.component";
import { getSingleProjectRequest, editProjectRequest } from "../../api/project";

import { createProject } from "../../redux/project/project.actions";

import "./NewProject.css";

const NewProject = (props) => {
  const {
    toggleNewProjectView,
    history,
    projects,
    status,
    error,
    match: {
      params: { id },
    },
  } = props;

  const [title, setTitle] = useState("");
  const [manager, setManager] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("Agriculture");
  const [goals, setGoals] = useState("");
  const [objectives, setObjectives] = useState("");
  const [inScope, setInScope] = useState("");
  const [outScope, setOutScope] = useState("");
  const [requirements, setRequirements] = useState("");

  const [managerEmail, setManagerEmail] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const [currentProject, setCurrentProject] = useState({});
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");

  useEffect(() => {
    if (status === "error") {
      if (error !== undefined || error !== null) {
        console.log(error);
        setApiMessageFeedback(error);
      }

      setOpen(true);
    }
  }, [status]);

  useEffect(() => {
    if (id) {
      const val = async () => {
        const value = await getSingleProjectRequest(id);
        console.log(value);
        if (value.status === 200) {
          setCurrentProject(value.data.data);
          console.log(value.data.data);
          patchFormValues();
        }
      };

      val();
    }
  }, [currentProject.title]);

  const patchFormValues = () => {
    console.log(currentProject.manager?.name);
    console.log(currentProject);
    setTitle(currentProject.title);
    setManager(currentProject.manager?.name);
    setSponsor(currentProject.sponsor?.name);
    setStartDate(currentProject.startDate);
    setEndDate(currentProject.endDate);
    setCategory(currentProject.category);
    setGoals(currentProject.goals);
    setObjectives(currentProject.objectives);
    setInScope(currentProject.inScope);
    setOutScope(currentProject.outScope);
    setRequirements(currentProject.requirements);

    setManagerEmail(currentProject.manager?.email);
    setSponsorEmail(currentProject.sponsor?.email);
    setDescription(currentProject.description);
  };

  const editProject = (e) => {
    e.preventDefault();

    const payload = {
      title,
      manager: { name: manager, email: managerEmail },
      sponsor: { name: sponsor, email: sponsorEmail },
      startDate: new Date(`${startDate}`).getTime(),
      endDate: new Date(`${endDate}`).getTime(),
      category,
      goals,
      objectives,
      inScope,
      outScope,
      requirements,
      description,
    };

    const makeCall = async () => {
      const response_ = await editProjectRequest(id, payload);
      console.log(response_);
      if (response_.status === 200) {
        console.log(response_);
        setApiMessageFeedback("Project was updated successfully");
        setOpen(true);
      }
    };

    makeCall();
  };

  const handleClick = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.createProject(
      {
        title,
        manager: { name: manager, email: managerEmail },
        sponsor: { name: sponsor, email: sponsorEmail },
        startDate: new Date(`${startDate}`).getTime(),
        endDate: new Date(`${endDate}`).getTime(),
        category,
        goals,
        objectives,
        inScope,
        outScope,
        requirements,
        description,
      },
      history,
      toggleNewProjectView,
      projects
    );
  };

  const checkIfFilled = () => {
    if (
      title &&
      manager &&
      managerEmail &&
      sponsor &&
      sponsorEmail &&
      startDate &&
      endDate &&
      category &&
      goals &&
      objectives &&
      inScope &&
      outScope &&
      requirements &&
      description
    ) {
      return false;
    }
    return true;
  };
  return (
    <div style={{ position: "relative" }}>
      <Notifier
        open={open}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />
      <form
        className="w-full max-w-lg new-project-form"
        style={{ padding: "3rem 0" }}
        onSubmit={(e) => (id ? editProject(e) : handleSubmit(e))}
      >
        <div className="top-save-btn-div pr-4">
          <button
            className="form-btn btn top-save-btn"
            type="submit"
            disabled={checkIfFilled()}
          >
            {id ? "Save Changes" : "Save"}
          </button>
        </div>

        <Accordion
          defaultActiveKey="0"
          style={{ marginTop: "60px" }}
          className="accordion-form"
        >
          <Card>
            <Card.Header>
              <p className="title">Key Information </p>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <i className="fas fa-chevron-up text-secondary" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="form-content">
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
                      Project Title:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="login-input-styles"
                      placeholder="Name of Project"
                      onChange={({ target: { value } }) => setTitle(value)}
                      // required
                      value={title || ""}
                      style={{ height: "36px", fontSize: "15px" }}
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
                          Project Manager:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setManager(value)
                          }
                          // required
                          value={manager}
                          placeholder="Name of Manger"
                          style={{ height: "36px", fontSize: "15px" }}
                        />
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Label
                          className="form-label"
                          style={{ marginBottom: "7.5px" }}
                        >
                          Email:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setManagerEmail(value)
                          }
                          value={managerEmail}
                          placeholder="Email Address of Manager"
                          style={{ height: "36px", fontSize: "15px" }}
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
                    <Row>
                      <Col sm={12} md={6} className="name-col">
                        <Form.Label
                          className="form-label"
                          style={{ marginBottom: "7.5px" }}
                        >
                          Executive Sponsor:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setSponsor(value)
                          }
                          // required
                          value={sponsor}
                          placeholder="Name of Sponsor"
                          style={{ height: "36px", fontSize: "15px" }}
                        />
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Label
                          className="form-label"
                          style={{ marginBottom: "7.5px" }}
                        >
                          Email:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setSponsorEmail(value)
                          }
                          value={sponsorEmail}
                          placeholder="Email Address of Sponsor"
                          style={{ height: "36px", fontSize: "15px" }}
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
                      Description:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={({ target: { value } }) =>
                        setDescription(value)
                      }
                      value={description}
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
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
                          Project Start Date:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setStartDate(value)
                          }
                          value={startDate}
                          // required
                          style={{ height: "36px", fontSize: "15px" }}
                        />
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Label
                          className="form-label"
                          style={{ marginBottom: "7.5px" }}
                        >
                          Project End Date:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="grid-input-style login-input-styles"
                          onChange={({ target: { value } }) =>
                            setEndDate(value)
                          }
                          value={endDate}
                          // required
                          style={{ height: "36px", fontSize: "15px" }}
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
                      Category:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      rows={3}
                      className="login-input-styles"
                      // required
                      value={category}
                      onChange={({ target: { value } }) => setCategory(value)}
                      style={{ height: "36px", fontSize: "15px" }}
                    >
                      <option defaultValue value="Agriculture">
                        Agriculture
                      </option>
                      <option value="Mining">Mining</option>
                      <option value="Construction">Construction</option>
                      <option value="Manufacturing &amp; Production">
                        Manufacturing &amp; Production
                      </option>
                      <option value="Transportation">Transportation</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Retail &amp; Trading<">
                        Retail &amp; Trading
                      </option>
                      <option value="Finance">Finance</option>
                      <option value="Public Administration">
                        Public Administration
                      </option>
                      <option value="Information Techonology">
                        Information Techonology
                      </option>
                      <option value="Services">Services</option>
                      <option value="Communications">Communications</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <p className="title">Project Goals and Objectives</p>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <i className="fas fa-chevron-up text-secondary" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="form-content">
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
                      Project Goals:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={({ target: { value } }) => setGoals(value)}
                      value={goals}
                      // required
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
                    />
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
                      Project Objectives:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={({ target: { value } }) => setObjectives(value)}
                      value={objectives}
                      // required
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
                    />
                  </Form.Group>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <p className="title">Project Scope</p>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <i className="fas fa-chevron-up text-secondary" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="form-content">
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
                      In Scope:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={({ target: { value } }) => setInScope(value)}
                      value={inScope}
                      // required
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
                    />
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
                      Out of Scope:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={({ target: { value } }) => setOutScope(value)}
                      value={outScope}
                      // required
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
                    />
                  </Form.Group>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <p className="title">Project Requirements</p>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <i className="fas fa-chevron-up text-secondary" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div className="form-content">
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
                      Requirements:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      onChange={({ target: { value } }) =>
                        setRequirements(value)
                      }
                      value={requirements}
                      // required
                      className="login-input-styles"
                      style={{ fontSize: "15px" }}
                    />
                  </Form.Group>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-end bottom-btn-div">
          <button
            className="form-btn btn bottom-cancel-btn"
            type="button"
            onClick={() => history.push("/projects")}
          >
            Cancel
          </button>
          <button
            className="form-btn btn bottom-save-btn"
            type="submit"
            disabled={checkIfFilled()}
          >
            {id ? "Save Changes" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  project: { isLoading, status, projects, error },
}) => ({
  isLoading,
  status,
  projects,
  error,
});

export default withRouter(
  connect(mapStateToProps, { createProject })(NewProject)
);
