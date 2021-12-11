import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";
import {getAppointmentsForDay, getInterview} from "../helpers/selectors"
export default function Application(props) {

  const [state, setState] = useState({day : "Monday", days:[], appointments: {}, interviewers : {} });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const setDay = day => setState({...state, day});
  const setDays = days => setState(prevState => ({...prevState, days}));

  useEffect(() => {
    const daysPromise = axios.get("/api/days");
    const appointmentPromise = axios.get("/api/appointments");
    const interviewersPromise = axios.get("/api/interviewers");
    Promise.all([daysPromise, appointmentPromise, interviewersPromise])
           .then(response => {
              let days = response[0].data;
              let appointments = response[1].data;
              let interviewers = response[2].data;
              setState( prev => ({...prev, days, appointments, interviewers}))
            })
  }, []);

  const schedule = dailyAppointments.map(appointment => {
    const interview = getInterview(state,appointment.interview);
    return (
      <Appointment 
        key = {appointment.id} 
        id = {appointment.id}
        time = {appointment.time}
        interview = {interview}
      />
    );
  })
  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        
        <nav className="sidebar__menu">
          <DayList days={state.days} value = {state.day} onChange={setDay}/>
        </nav>
       
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
       
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
