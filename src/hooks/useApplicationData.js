import {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({day : "Monday", days:[], appointments: {}, interviewers : {} });

  const setDay = day => setState({...state, day});

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

  const bookInterview = (id, interview) => {
    console.log(id, interview);
    //PUT request for appointment
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(response => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
    
      setState(prev => ({...prev, appointments}))
    }); 
  };

  const cancelInterview = (id) => {
    console.log(id);
    return axios.delete(`/api/appointments/${id}`)
         .then(response => {
            const appointment = {
              ...state.appointments[id],
              interview : null
            };
            const appointments = {
              ...state.appointments,
              [id] : appointment
            };
            setState(prev => ({...prev, appointments}));
         })

  };

  return {state, setDay, bookInterview, cancelInterview}
};


export default useApplicationData;