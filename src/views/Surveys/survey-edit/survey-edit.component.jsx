import React, { useState, useEffect } from "react";
import SurveySideBar from "../../../components/survey-side-bar/survey-side-bar.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import FormBuilder from "../../../components/form-builder/form-builder.component";
import { updateQuestions } from "../../../redux/questions/questions.action";
import { setHeading } from "../../../redux/layout/layout.action";
import Notifier from "../../../components/Notifier/notifier.component";
import Spinner from "../../../components/spinner/spinner";
import { getSurveyQuestions } from "../../../api/survey";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { convertQuestions } from "../../../helpers/helper";
import {
  MainContainer,
  ButtonContainer,
  Eye,
  CaretDown,
  Nav,
  NavItem,
  FormBuilderContainer,
} from "./survey-edit.styles";

const EditSurvey = ({ updateQuestions, match, setHeading, history }) => {
  setHeading("Edit Survey");
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getSurveys = async () => {
      console.log("i am here >>>>>>>>");
      setLoading(true);
      try {
        const {
          data: { data },
        } = await getSurveyQuestions(match.params.id);
        console.log(data);
        setQuestions(convertQuestions(data.question));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setApiMessageFeedback("An Error Occured, Try again 😓");
        setOpen(true);
        setQuestions([]);
      }
    };

    getSurveys();
  }, []);
  useEffect(() => {
    console.log(questions);
    updateQuestions(questions);
    return () => {
      updateQuestions([]);
    };
  }, [questions]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <MainContainer>
      <Notifier
        open={open}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />

      <ButtonContainer>
        <CustomButton primary onClick={() => history.goBack()}>
          <svg
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z"
              fill="#5B5656"
            />
          </svg>
          <span>Back</span>
        </CustomButton>
        <CustomButton
          primary
          onClick={() =>
            history.push(`/surveys/details/${match.params.id}?defaultIndex=1`)
          }
        >
          <Eye></Eye>
          <span>Preview</span>
        </CustomButton>
      </ButtonContainer>
      <Nav>
        <NavItem className="active">Edit</NavItem>
      </Nav>
      {loading ? (
        <div className="" style={{ marginTop: "2rem" }}>
          <Spinner showSpinner={true} radius={"5rem"} />
        </div>
      ) : (
        <FormBuilderContainer>
          <SurveySideBar></SurveySideBar>
          <FormBuilder></FormBuilder>
        </FormBuilderContainer>
      )}
    </MainContainer>
  );
};

export default connect(null, { updateQuestions, setHeading })(
  withRouter(EditSurvey)
);
