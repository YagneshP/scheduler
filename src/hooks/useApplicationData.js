import { useState, useEffect } from "react";
import axios from "axios";
import { getSpotsForDay } from "helpers/selectors";

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

  const updateSpots = (appointments, day) => {
    const newSpots = getSpotsForDay(appointments, day);
    day["spots"] = newSpots;
    return day;
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

        const days = state.days.map((day) => {
          if (day["name"] === state.day) {
            return updateSpots(appointments, day);
          }
          return day;
        });
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
      const days = state.days.map((day) => {
        if (day["name"] === state.day) {
          return updateSpots(appointments, day);
        }
        return day;
      });
      setState((prev) => ({ ...prev, appointments, days }));
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
