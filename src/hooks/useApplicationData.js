import { useState, useEffect } from "react";
import axios from "axios";


const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    const daysPromise = axios.get("/api/days");
    const appointmentPromise = axios.get("/api/appointments");
    const interviewersPromise = axios.get("/api/interviewers");
    Promise.all([daysPromise, appointmentPromise, interviewersPromise]).then(
      (response) => {
        let days = response[0].data;
        let appointments = response[1].data;
        let interviewers = response[2].data;
        setState((prev) => ({ ...prev, days, appointments, interviewers }));
      }
    );
  }, []);

  const updateSpots = (state, appointments) => {
    const days = state.days.map((d) => {
      if (d["name"] === state.day) {
        const appointmentsOfTheDay = d["appointments"].map(id => appointments[id]);
        let updatedSpots = appointmentsOfTheDay.filter((appointment) => appointment["interview"] === null).length;
        return {...d, spots : updatedSpots}
      }
      return d;
    })
    return days;
  };

  const bookInterview = (id, interview) => {
    //PUT request for appointment
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview },
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };

        const days = updateSpots(state, appointments);
        setState((prev) => ({ ...prev, appointments, days }));
      });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then((response) => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };
      const days = updateSpots(state, appointments);
      setState((prev) => ({ ...prev, appointments, days }));
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
