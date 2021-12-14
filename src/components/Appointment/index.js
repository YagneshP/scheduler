import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
export default function Appointment(props) {
  const {id, time, interview, interviewers, bookInterview, cancelInterview} = props;
  const {mode, transition, back} = useVisualMode( interview ?  SHOW :  EMPTY);
 
  const save = (name, interviewer) => { 
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() =>transition(SHOW) )
  }

  const confirmation = () => {
    transition(CONFIRM)
  }

  const edit = () => {
    transition(EDIT);
  }

  const cancel = () => {
    transition(DELETING)
    cancelInterview(id)
    .then(() => transition(EMPTY))
    
  }

  return (
    <article className='appointment'>
      <Header time = {time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers = {interviewers} onSave = {save} onCancel = {() => back()}/>}
      {mode === EDIT && <Form student={interview.student} interviewer = {interview.interviewer.id} interviewers={interviewers} onSave = {save} onCancel = {() => back()}/>}
      {mode === SAVING && <Status message = "Saving"/> }
      {mode === CONFIRM && <Confirm message= {'Are you sure you would like to delete?'} onCancel = {() => back()} onConfirm = {cancel}/>}
      {mode === DELETING && <Status message = "Deleting"/> }
      {mode === SHOW  && interview && (<Show student = {interview.student} interviewer = {interview.interviewer} onDelete = {confirmation} onEdit = {edit}/>) }
    </article>
  );
};
