import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const {interviewers} = props;
  const interviewersList = interviewers.map(interviewer => {
                                            return (<InterviewerListItem 
                                                      key={interviewer.id}
                                                      {...interviewer}
                                                      selected = {interviewer.id === props.interviewer}
                                                      setInterviewer = {props.setInterviewer}
                                                      />)
                                            })

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersList}
      </ul>
    </section>
  );
};

