import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import moment from "moment";
import {
  getAllResponsesForSurvey,
  getAllResponsesForLiveSurvey,
  getAllResponsesForWebLink,
} from "../../../api/survey";

import Notifier from "../../../components/Notifier/notifier.component";

import { SurveyCollectorsStyle } from "./survey-collectors.styles";
import { lime_web } from "../../../api/client";

class SurveyCollector extends React.Component {
  baseLinkUrl = lime_web;

  constructor(props) {
    super(props);

    this.state = {
      all_responses: [],
      live_survey: [],
      web_link: [],

      openNotifier: false,
      notifierMessageFeedback: "",
      webLinkApi: `${this.baseLinkUrl}/survey/webLink/${this.props.match.params.id}`,
      NotifierAutoHideDuration: 0,
    };
  }

  componentWillMount = async () => {
    try {
      console.log(this.props.match.params.id);

      const all_response_api = await getAllResponsesForSurvey(
        this.props.match.params.id
      );

      const live_survey_response_api = await getAllResponsesForLiveSurvey(
        this.props.match.params.id
      );

      const web_link_survey_response_api = await getAllResponsesForWebLink(
        this.props.match.params.id
      );

      // if (all_response_api.data.data.length > 0) {
      //   this.setState({ all_responses: all_response_api.data.data });
      // }

      this.setState({
        all_responses: all_response_api.data.data,
        live_survey: live_survey_response_api.data.data,
        web_link: web_link_survey_response_api.data.data,
      });

      console.log(all_response_api.data.data);
      console.log(live_survey_response_api.data.data);
      console.log(web_link_survey_response_api.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  closeNotifier = () => {
    if (this.state.NotifierAutoHideDuration > 0) {
      this.setState({ openNotifier: false, NotifierAutoHideDuration: 0 });
    } else {
      this.setState({ openNotifier: false });
    }
  };

  copyLink = () => {
    navigator.clipboard.writeText(this.state.webLinkApi);
    this.setState({
      NotifierAutoHideDuration: 2000,
      openNotifier: true,
      notifierMessageFeedback: `Link copied!!!`,
    });
  };

  render() {
    return (
      <>
        <Notifier
          open={this.state.openNotifier}
          handleClick={this.closeNotifier}
          message={this.state.notifierMessageFeedback}
          autoHideDuration={this.state.NotifierAutoHideDuration}
        />

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
                    {this.state.all_responses.length > 0 &&
                      this.state.all_responses.map((response, index) => (
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
                            <Link className="mb-4">Response {index + 1}</Link>
                          </td>
                          <td className="w-2/4 py-6">
                            <Link className="mb-4">
                              {moment(response?.dateCollected).format(
                                "DD/MM/YYYY"
                              )}
                            </Link>
                          </td>
                          <td className="w-2/4 py-6">
                            <Link className="mb-4">
                              {response?.collectionMethod}
                            </Link>
                          </td>
                        </tr>
                      ))}
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
                    {this.state.live_survey.length > 0 &&
                      this.state.live_survey.map((response, index) => (
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
                            <Link className="mb-4">Response {index + 1}</Link>
                          </td>
                          <td className="w-2/4 py-6">
                            <Link className="mb-4">{response?.location}</Link>
                          </td>
                          <td className="w-2/4 py-6">
                            <Link className="mb-4">
                              {moment(response?.dateCollected).format(
                                "DD/MM/YYYY"
                              )}
                            </Link>
                          </td>
                          <td className="w-2/4 py-6">
                            <Link className="mb-4">02:00 pm</Link>
                          </td>
                        </tr>
                      ))}
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
                          <p>{this.state.webLinkApi}</p>
                          <button onClick={this.copyLink}>Copy</button>
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
                      {this.state.web_link.length > 0 &&
                        this.state.web_link.map((response, index) => (
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
                              <Link className="mb-4">Response {index + 1}</Link>
                            </td>
                            <td className="w-2/4 py-6">
                              <Link className="mb-4">{response?.location}</Link>
                            </td>
                            <td className="w-2/4 py-6">
                              <Link className="mb-4">
                                {moment(response?.dateCollected).format(
                                  "DD/MM/YYYY"
                                )}
                              </Link>
                            </td>
                            <td className="w-2/4 py-6">
                              <Link className="mb-4">
                                {response?.timeCollected.slice(0, 8)}
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </SurveyCollectorsStyle>
      </>
    );
  }
}

export default withRouter(SurveyCollector);
