import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
import { ShareSurvey } from "./survey-create.styles";
import { shareSurvey } from "../../../api/survey";
import Notifier from "../../../components/Notifier/notifier.component";
import Spinner from "../../../components/spinner/spinner";
import { lime_web } from "../../../api/client";

class ShareSurveyComponent extends React.Component {
  baseLinkUrl = lime_web;

  constructor(props) {
    super(props);

    this.state = {
      emailTo: "",
      emailSubject: "",
      emailMessage: "",
      notifierMessageFeedback: "",
      openNotifier: false,
      submitting: false,
      validEmailFormat: false,
      surveyId: this.props.match.params.id,
      webLink: `${this.baseLinkUrl}/survey/webLink/${this.props.match.params.id}`,
      NotifierAutoHideDuration: 0,
    };
  }

  modifyInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendMail = async (event) => {
    this.setState({ submitting: true });

    const payload = {
      to: this.state.emailTo,
      subject: this.state.emailSubject,
      message: this.state.emailMessage,
    };

    try {
      const api = await shareSurvey(this.state.surveyId, payload);

      this.setState({
        openNotifier: true,
        notifierMessageFeedback: `Mail successfully sent to ${payload.to}!`,
        submitting: false,
      });

      this.clearMailInputs();
    } catch (error) {
      console.log(error);
      this.setState({
        openNotifier: true,
        notifierMessageFeedback: "An error occurred, please try again!",
        submitting: false,
      });
    }
  };

  handleEmailFormat = (email) => {
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      this.setState({ validEmailFormat: true, emailTo: email });
    } else {
      this.setState({ validEmailFormat: false, emailTo: email });
    }
  };

  clearMailInputs = () => {
    this.setState({ emailTo: "" });
    this.setState({ emailSubject: "" });
    this.setState({ emailMessage: "" });
  };

  closeNotifier = () => {
    if (this.state.NotifierAutoHideDuration > 0) {
      this.setState({ openNotifier: false, NotifierAutoHideDuration: 0 });
    } else {
      this.setState({ openNotifier: false });
    }
  };

  openLiveSurvey = () => {
    window.open(
      `${this.baseLinkUrl}/survey/liveSurvey/${this.state.surveyId}`,
      "_blank"
    );
  };

  copyLink = () => {
    navigator.clipboard.writeText(this.state.webLink);
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
        <ShareSurvey>
          <div className="collector__wrapper">
            <Tabs>
              <TabList className="tab__collector">
                <Tab className="tab__collector__list">Generate web link</Tab>
                <Tab className="tab__collector__list">Send via email</Tab>
                <Tab className="tab__collector__list">Live survey</Tab>
              </TabList>

              {/* Generate web link */}
              <TabPanel className="tab__collector__content">
                <Card className="colorLess">
                  <Card.Header className="colorLess"></Card.Header>
                  <Card.Body>
                    <div className="copy__link">
                      <p>{this.state.webLink}</p>
                      <button onClick={this.copyLink}>Copy</button>
                    </div>
                  </Card.Body>
                </Card>
              </TabPanel>

              {/* Send via email View */}
              <TabPanel className="tab__collector__content">
                <div className="sendViaMail">
                  <div className="form__group">
                    <label htmlFor="">To:</label>
                    <input
                      type="email"
                      name="emailTo"
                      value={this.state.emailTo}
                      className={this.state.validEmailFormat ? "" : "error__"}
                      onChange={(event) =>
                        this.handleEmailFormat(event.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="">Subject:</label>
                    <input
                      type="text"
                      name="emailSubject"
                      className={this.state.emailSubject ? "" : "error__"}
                      value={this.state.emailSubject}
                      onChange={this.modifyInput}
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="">Message</label>
                    <input
                      type="text"
                      name="emailMessage"
                      className={this.state.emailMessage ? "" : "error__"}
                      value={this.state.emailMessage}
                      onChange={this.modifyInput}
                    />
                  </div>
                  <div className="form__group">
                    <button onClick={this.clearMailInputs}>Cancel</button>
                    <button
                      onClick={this.sendMail}
                      disabled={
                        !this.state.emailTo ||
                        !this.state.emailSubject ||
                        !this.state.emailMessage ||
                        !this.state.validEmailFormat
                      }
                    >
                      <span>Send</span>
                      {this.state.submitting ? (
                        <span>
                          <Spinner showSpinner={true} radius={"1rem"} />
                        </span>
                      ) : null}
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Live survey View */}
              <TabPanel className="panel">
                <div className="options_control colored__">
                  <section>
                    <input type="checkbox" id="geoTagging" />
                    <label htmlFor="geoTagging">Enable Geotagging</label>
                  </section>
                  <section>
                    <input type="checkbox" disabled />
                    <label htmlFor="">Enable recording</label>
                  </section>
                </div>
                <div className="options_control">
                  <section>
                    <p>NOTE: You can only enable recording on mobile app</p>
                  </section>
                  <section>
                    <button onClick={this.openLiveSurvey}>Next</button>
                  </section>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </ShareSurvey>
      </>
    );
  }
}

export default withRouter(ShareSurveyComponent);
