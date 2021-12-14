import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';
function InterviewerList(props) {
  const {interviewers, onChange, value} = props;
  const interviewersList = interviewers.map(interviewer => (
      <InterviewerListItem 
        key= {interviewer.id}
        name = {interviewer.name}
        avatar = {interviewer.avatar}
        selected = {interviewer.id === value}
        setInterviewer = {(e) => onChange(interviewer.id)}                                                                                  
      />)
    )

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersList}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers : PropTypes.array
}

export default InterviewerList;