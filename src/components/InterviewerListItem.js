import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const{id, name, avatar, setInterviewer} = props;
  let interViewerClass = classNames("interviewers__item", 
                                    {"interviewers__item--selected" :  props.selected}) 
  return(
    <li className={interViewerClass} onClick = {() => setInterviewer(id)}>
      <img
      className="interviewers__item-image"
      src={avatar}
      alt={name}
    />
   {props.selected && name}
  </li>
  );
}