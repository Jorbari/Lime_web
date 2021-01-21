import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRenderedDivs } from "../../../redux/report/report.selectors";
import CustomButton from "../../custom-button/custom-button.component";
import ReportBuilderDates from "../report-builder-dates/report-builder-dates.component";
import ReportBuilderDescription from "../report-builder-description/report-builder-description.component";
import ReportBuilderGoals from "../report-builder-goal/report-builder-goal.component";
import ReportBuilderTeam from "../report-builder-team/report-builder-team.component";
import * as Style from "./report-buider-document.styles";
import ReportBuilderScope from "../report-builder-scope/report-builder-scope.component";
import ReportBuilderPlan from "../report-builder-plan/report-builder-plan.component";
import ReportBuilderRequirement from "../report-builder-requirement/report-builder-requirement.component";
import ReportBuilderBudget from "../report-builder-budget/report-builder-budget.component";
import ReportBuilderSurvey from "../report-builder-survey/report-builder-survey.component";
import noDataImg from "../../../assets/empty.png";

import html2pdf from "html2pdf.js";

const ReportBuiderDocs = ({ current_report, rendered_div }) => {
  useEffect(() => {
    console.log(current_report);
  });

  const {
    description,
    goals_and_objective,
    team_members,
    date_and_milestone,
    scope,
    execution_plan,
    resource_requirement,
    budget,
    survey_information,
  } = rendered_div;
  const handlePagePrint = () => {
    let element = document.getElementById("project_document");
    html2pdf()
      .from(element)
      .save();
  };
  return (
    <>
      {!description &&
      !goals_and_objective &&
      !team_members &&
      !date_and_milestone &&
      !scope &&
      !execution_plan &&
      !resource_requirement &&
      !budget &&
      !survey_information ? (
        <Style.DefaultView>
          <img alt="" src={noDataImg} />
          <p>Click on a category from the left to build report</p>
        </Style.DefaultView>
      ) : (
        <Style.ReportBuiderDocsContainer>
          <Style.DocsTopNavContainer>
            <Style.DocsTopNav>
              <CustomButton primary onClick={handlePagePrint}>
                Print Document
              </CustomButton>
              <CustomButton primary onClick={handlePagePrint}>
                Save As PDF
              </CustomButton>
            </Style.DocsTopNav>
          </Style.DocsTopNavContainer>
          <Style.DocsBody id={"project_document"}>
            <Style.Title>{current_report.title}</Style.Title>
            {rendered_div.description ? <ReportBuilderDescription description={current_report.description} /> : null}
            {rendered_div.goals_and_objective ? (
              <ReportBuilderGoals
                goals={current_report.goals}
                objectives={current_report.objectives}
              />
            ) : null}
            {rendered_div.team_members ? (
              <ReportBuilderTeam
                projectManager={current_report.manager.name}
                executiveSponsor={current_report.sponsor.name}
              />
            ) : null}
            {rendered_div.date_and_milestone ? (
              <ReportBuilderDates
                startDate={current_report.startDate}
                endDate={current_report.endDate}
              />
            ) : null}
            {rendered_div.scope ? (
              <ReportBuilderScope
                inScope={current_report.inScope}
                outScope={current_report.outScope}
              />
            ) : null}
            {rendered_div.execution_plan ? <ReportBuilderPlan /> : null}
            {rendered_div.resource_requirement ? (
              <ReportBuilderRequirement
                requirements={current_report.requirements}
              />
            ) : null}
            {rendered_div.budget ? <ReportBuilderBudget /> : null}
            {rendered_div.survey_information ? <ReportBuilderSurvey /> : null}
          </Style.DocsBody>
        </Style.ReportBuiderDocsContainer>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  rendered_div: selectRenderedDivs,
});

export default connect(mapStateToProps)(ReportBuiderDocs);
