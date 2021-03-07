import React from "react";
import { summaryDropdownData, summaryFormatTypes } from "./survey-summary.data";
import PieChart from '../pie-chart/pie-chart.component';
import BarChart from '../bar-chart/bar-chart.component';
import {
    MainContainer,
    ContentHeader,
    DropdownMenu,
    SummaryFormatDropdown,
    Caret,
    ContentBody,
    ContentFooter,
    QuestionDisplay,
  } from "./survey-summary.styles";
class SurveySummary extends React.Component {
    selectBox = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
        format: summaryFormatTypes.Pie
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevState, prevProps) {
  }

  setFormatProp = (format) => {
    this.setState({ format });
  };

  onFormatChange = (event) => {
    console.log("here")
    event.persist();
    event.stopPropagation();
    const id = event.target?.closest("div.dropdown-item")?.id;
    if (id) {
      this.setFormatProp(id);
    }
  };

  render() {
    const {  format } = this.state;
    return (
      <MainContainer>
        <ContentHeader>
            <QuestionDisplay>
              <span>Q1.</span>
              <div className="">
                <p className="question">What do you think about product A?</p>
                <p className="responses">9 responses</p>
              </div>
            </QuestionDisplay>

          <div
            className="dropdown"
          >
            <SummaryFormatDropdown
            data-toggle="dropdown"  ref={this.selectBox}>
              {summaryDropdownData()[format]}
            </SummaryFormatDropdown>
            <Caret></Caret>
            <DropdownMenu
              className="dropdown-menu"
              onClick={this.onFormatChange}
            >
              {Object.values(summaryDropdownData())}
            </DropdownMenu>
          </div>
        </ContentHeader>
        <ContentBody>
          {
            format === summaryFormatTypes.Pie?
            (
              <PieChart></PieChart>
            ):
            (
              <BarChart></BarChart>
            )
          }
        </ContentBody>
        <ContentFooter></ContentFooter>
      </MainContainer>
    );
  }
}

export default SurveySummary;
