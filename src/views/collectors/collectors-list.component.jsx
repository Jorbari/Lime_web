import React, { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import { connect } from "react-redux";

import { getAllSurveys } from "../../redux/survey/survey.action";
import { getAllProjects } from "../../redux/project/project.actions";
import {
  ButtonContainer,
  form_inputs,
  mb,
  collector_button,
  Accordion,
} from "./collectors-list.style";
import Spinner from "../../components/spinner/spinner";
import Notifier from "../../components/Notifier/notifier.component";

import {
  createCollector,
  getCollectors,
  getCollectorProject,
} from "../../api/collectors";
import { setHeading } from "../../redux/layout/layout.action";
import Select from "react-select";

const CollectorsList = (props) => {
  const { projects, setHeading } = props;
  const [open, setOpen] = useState(false);
  const [collectorList, setcollectorList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [project, setProject] = useState([]);
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [];

  setHeading("Collectors");

  useEffect(() => {
    projects.map((item) =>
      options.push({
        value: item._id,
        label: item.title,
      })
    );
  }, [projects, options]);

  useEffect(() => {
    const fetchProjects = async () => {
      await props.getAllProjects();
    };

    fetchProjects();

    fetchCollectors();
  }, []);

  const fetchCollectors = async () => {
    setisLoading(true);
    try {
      const api = await getCollectors();
      console.log(api);
      setcollectorList(api.data.data);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      console.log(err);
    }
  };

  const getProjectsId = (projects) => {
    return projects.map((project) => project.value);
  };

  const getCollectorProjects = async (id) => {
    setProject([]);
    setisLoading(true);
    try {
      const api = await getCollectorProject(id);
      setProject(api.data.data);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      console.log(err);
    }
  };

  const toggleModal = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
      projects: getProjectsId(selectedOption),
    };

    try {
      await createCollector(payload);
      setApiMessageFeedback("Collector created successfully");
      setOpenModal(true);
      toggleModal();
      fetchCollectors();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Notifier
        open={openModal}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />

      <Modal
        open={open}
        onClose={() => toggleModal()}
        center
        modalId
        dialogClassName="br-4"
      >
        <div style={{ height: "fit-content", padding: "30.8px 35.8px" }}>
          <p className="title" style={mb("1.7rem")}>
            Create Collector
          </p>
          <form
            className="w-full max-w-lg new-project-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
              style={mb()}
            >
              <Form.Label
                className="form-label"
                style={{ marginBottom: "7.5px" }}
              >
                Username:
              </Form.Label>
              <Form.Control
                type="text"
                className="login-input-styles"
                placeholder="Name of Survey"
                onChange={({ target: { value } }) => setusername(value)}
                required
                value={username}
                style={form_inputs}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
              style={mb("2.7rem")}
            >
              <Form.Label className="form-label" style={mb()}>
                Password:
              </Form.Label>
              <Form.Control
                type="text"
                className="login-input-styles"
                placeholder="Name of Survey"
                onChange={({ target: { value } }) => setpassword(value)}
                required
                value={password}
                style={form_inputs}
              />
            </Form.Group>

            <Form.Group style={mb("3rem", "29rem")}>
              <Select
                defaultValue={selectedOption}
                isMulti
                onChange={setSelectedOption}
                options={options}
              />
            </Form.Group>

            <button
              className="form-btn btn bottom-save-btn"
              disabled={!username || !password || !selectedOption}
              style={
                !username || !password || !selectedOption
                  ? collector_button("gray")
                  : collector_button()
              }
              type="submit"
            >
              Create Collector
            </button>
          </form>
        </div>
      </Modal>

      <div className="mx-8 relative bg-white flex flex-col md:flew-wrap ">
        <ButtonContainer className="relative bg-white mr-6">
          <div className="px-2 md:px-10 mx-auto w-full">
            <div className="flex justify-end">
              <button
                className="newProjectButton"
                onClick={() => toggleModal()}
              >
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                New Collector
              </button>
            </div>
          </div>
        </ButtonContainer>
      </div>

      {isLoading && collectorList.length === 0 ? (
        <Spinner showSpinner={true} radius={"5rem"} />
      ) : (
        <Accordion class="accordion" id="analyticsAccordion">
          {collectorList.length > 0 ? (
            <>
              {collectorList.map((collector, index) => (
                <div
                  class="card"
                  data-toggle="collapse"
                  data-target={`#collapseRecommendation${index}`}
                  aria-expanded="false"
                  aria-controls={`collapseRecommendation${index}`}
                  onClick={() => getCollectorProjects(collector.id)}
                >
                  <div class="title__header">
                    <div class="title__count">
                      {collector.username}
                      {/* <div class="title__count--tag">3</div> */}
                    </div>
                    <div class="title__icon">
                      <svg
                        width="5"
                        height="9"
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.496428 1.04156C0.222138 1.31585 0.221896 1.76049 0.495886 2.03508L3.15663 4.70163C3.19558 4.74067 3.19558 4.80387 3.15663 4.8429L0.495887 7.50945C0.221896 7.78404 0.222138 8.22868 0.496428 8.50297C0.770931 8.77747 1.21599 8.77747 1.49049 8.50297L4.51408 5.47937C4.90461 5.08885 4.90461 4.45568 4.51408 4.06516L1.49049 1.04156C1.21599 0.767062 0.77093 0.767061 0.496428 1.04156Z"
                          fill="#191E51"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    id={`collapseRecommendation${index}`}
                    class="collapse collapse__container"
                    aria-labelledby="recommendation"
                    data-parent="#analyticsAccordion"
                  >
                    <h4>Project List</h4>
                    {isLoading && project.length === 0 ? (
                      <Spinner showSpinner={true} radius={"2rem"} />
                    ) : (
                      <ul>
                        {project.map((data) => (
                          <li key={data.id}>{data.projectName}</li>
                        ))}
                      </ul>
                    )}

                    {!isLoading && project.length === 0 && (
                      <p>No projects assigned</p>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </Accordion>
      )}
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

export default connect(mapStateToProps, {
  getAllSurveys,
  getAllProjects,
  setHeading,
})(CollectorsList);
