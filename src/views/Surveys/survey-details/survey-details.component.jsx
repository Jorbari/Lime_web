import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { withRouter } from "react-router-dom";
import { SapsProjectContainer } from "./survey.details.styles";
import SurveySummary from "../survey-summary/survey-summary";
import SurveyCollector from "../survey-collectors/survey-collectors.component";

class SurveyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSurveyId: this.props.match.params.id,
    };
  }

  render() {
    return (
      <SapsProjectContainer>
        <div className="content__wrapper">
          <div className="flex__right">
            <button>Record response </button>
            <button
              onClick={() =>
                this.props.history.push(
                  `/surveys/edit/${this.state.currentSurveyId}`
                )
              }
            >
              Edit
            </button>
            <button>Analyse</button>
          </div>

          <Tabs>
            <TabList className="tab">
              <Tab className="tab__list">Summary</Tab>
              <Tab className="tab__list">Preview</Tab>
              <Tab className="tab__list">Collectors</Tab>
              <Tab className="tab__list">Analyse</Tab>
            </TabList>

            <TabPanel>
              <SurveySummary id={this.state.currentSurveyId} />
            </TabPanel>
            <TabPanel>hello two</TabPanel>
            <TabPanel>
              <SurveyCollector />
            </TabPanel>
            <TabPanel>
              <h1>Hello four</h1>
            </TabPanel>
          </Tabs>
        </div>
      </SapsProjectContainer>
    );
  }
}

export default withRouter(SurveyDetails);
