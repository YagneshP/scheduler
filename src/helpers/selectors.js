export const getAppointmentsForDay = (state, day) => {
  const filteredDay = state.days.find (d => d["name"] === day);
  if(!filteredDay) {
    return [];
  }
  const appointmentArray = filteredDay['appointments'];
  const appointmentOnDay = appointmentArray.map(app => state.appointments[app] )
  return appointmentOnDay;
};


export const getInterview = (state, interview) => {
  if(!interview) {
    return null;
  }
  let interviewer = interview["interviewer"];
  let obj = {
    student: interview["student"],
    interviewer : state["interviewers"][interviewer]
  }
  return obj;
}

 export const getInterviewersForDay = (state,day) => {
  const filteredDay = state.days.find(d => d["name"] === day);
  if(!filteredDay) {
    return [];
  }
  const interviewerArray = filteredDay['interviewers'];
  const interviewersOnDay = interviewerArray.map(person => state.interviewers[person] )
  return interviewersOnDay;
 }

 export const getSpotsForDay = (appointments,day) => {
  let spots = 0;
  for(let appointmentId of day["appointments"]) {
    if(appointments[appointmentId]["interview"] === null ){
      spots++
    }
  }
   return spots;
 }