import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { getAllResponsesForSurvey } from "../../../api/survey";

import { SurveyCollectorsStyle } from "./survey-collectors.styles";

class SurveyCollector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      all_responses: [],
      all_survey: [],
      web_link: [],
    };
  }

  componentWillMount = async () => {
    try {
      console.log(this.props.match.params.id);

      const all_response_api = await getAllResponsesForSurvey(
        this.props.match.params.id
      );

      if (all_response_api.data.data.length > 0) {
        this.setState({ all_responses: all_response_api.data.data });
      }

      console.log(all_response_api.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <SurveyCollectorsStyle>
        <div className="collector__wrapper">
          <Tabs>
            <TabList className="tab__collector">
              <Tab className="tab__collector__list">All Responses</Tab>
              <Tab className="tab__collector__list">Live Survey</Tab>
              <Tab className="tab__collector__list">Web Link</Tab>
            </TabList>

            {/* All Responses View */}
            <TabPanel className="tab__collector__content">
              <table className="survey-table table-fixed w-full xl:w-10/12 mb-12 xl:mb-0 pr-4">
                <thead>
                  <tr>
                    <th className="w-2/4 py-6"></th>
                    <th className="w-2/4 py-6">Name</th>
                    <th className="w-2/4 py-6">Date collected</th>
                    <th className="w-2/4 py-6">Collection method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Link Sharing</Link>
                    </td>
                  </tr>

                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Link Sharing</Link>
                    </td>
                  </tr>

                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Link Sharing</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>

            {/* Live Survey View */}
            <TabPanel className="tab__collector__content">
              <table className="survey-table table-fixed w-full xl:w-10/12 mb-12 xl:mb-0 pr-4">
                <thead>
                  <tr>
                    <th className="w-2/4 py-6"></th>
                    <th className="w-2/4 py-6">Name</th>
                    <th className="w-2/4 py-6">Location</th>
                    <th className="w-2/4 py-6">Date collected</th>
                    <th className="w-2/4 py-6">Time method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Wuye</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">02:00 pm</Link>
                    </td>
                  </tr>
                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Wuye</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">02:00 pm</Link>
                    </td>
                  </tr>
                  <tr className="table__row">
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">
                        <input
                          type="checkbox"
                          className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                        />
                      </Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Response 110</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">Wuye</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">10/01/2020</Link>
                    </td>
                    <td className="w-2/4 py-6">
                      <Link className="mb-4">02:00 pm</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>

            {/* Web-link View */}
            <TabPanel>
              <Accordion>
                <Card className="colorLess">
                  <Card.Header className="colorLess">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Show web link
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="copy__link">
                        <p>lime.com/LAPDcustomersatisfactionxxccjnwfcjb</p>
                        <button>Copy</button>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <div className="tab__collector__content--copy">
                <table className="survey-table table-fixed w-full xl:w-10/12 mb-12 xl:mb-0 pr-4">
                  <thead>
                    <tr>
                      <th className="w-2/4 py-6"></th>
                      <th className="w-2/4 py-6">Name</th>
                      <th className="w-2/4 py-6">Location</th>
                      <th className="w-2/4 py-6">Date collected</th>
                      <th className="w-2/4 py-6">Time method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table__row">
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">
                          <input
                            type="checkbox"
                            className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                          />
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Response 110</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Wuye</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">10/01/2020</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">02:00 pm</Link>
                      </td>
                    </tr>
                    <tr className="table__row">
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">
                          <input
                            type="checkbox"
                            className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                          />
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Response 110</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Wuye</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">10/01/2020</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">02:00 pm</Link>
                      </td>
                    </tr>
                    <tr className="table__row">
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">
                          <input
                            type="checkbox"
                            className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                          />
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Response 110</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">Wuye</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">10/01/2020</Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link className="mb-4">02:00 pm</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </SurveyCollectorsStyle>
    );
  }
}

export default withRouter(SurveyCollector);
