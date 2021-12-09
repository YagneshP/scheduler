import React, {useState} from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form(props) {
  const [student, setStudent]  = useState(props.student)
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList 
          interviewers = {props.interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {props.onCancel}>Cancel</Button>
          <Button confirm onClick = {props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}
