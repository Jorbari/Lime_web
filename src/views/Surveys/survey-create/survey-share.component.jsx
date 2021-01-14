import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { ShareSurvey } from "./survey-create.styles";

class ShareSurveyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
                    <p>lime.com/LAPDcustomersatisfactionxxccjnwfcjb</p>
                    <button>Copy</button>
                  </div>
                </Card.Body>
              </Card>
            </TabPanel>

            {/* Send via email View */}
            <TabPanel className="tab__collector__content">
              <form action="" className="sendViaMail">
                <div className="form__group">
                  <label htmlFor="">To:</label>
                  <input type="text" />
                </div>
                <div className="form__group">
                  <label htmlFor="">Subject:</label>
                  <input type="text" />
                </div>
                <div className="form__group">
                  <label htmlFor="">Message</label>
                  <input type="text" />
                </div>
                <div className="form__group">
                  <button>Cancel</button>
                  <button>Send</button>
                </div>
              </form>
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
                  <button>Next</button>
                </section>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </ShareSurvey>
    );
  }
}

export default ShareSurveyComponent;
