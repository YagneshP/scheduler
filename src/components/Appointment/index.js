import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
export default function Appointment(props) {
  const {id, time, interview, interviewers, bookInterview} = props;
  const {mode, transition, back} = useVisualMode( interview ?  SHOW:  EMPTY);
 
 
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview);
  }
  return (
    <article className='appointment'>
      <Header time = {time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers = {interviewers} onSave = {save} onCancel = {() => back()}/>}
      {mode === SHOW && (<Show student = {interview.student} interviewer = {interview.interviewer}/>) }
    </article>
  );
};
