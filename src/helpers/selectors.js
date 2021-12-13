export const getAppointmentsForDay = (state, day) => {
  const filteredDay = state.days.filter(d => d["name"] === day);
  if(filteredDay.length === 0) {
    return [];
  }
  const appointmentArray = filteredDay[0]['appointments'];
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
  const filteredDay = state.days.filter(d => d["name"] === day);
  if(filteredDay.length === 0) {
    return [];
  }
  const interviewerArray = filteredDay[0]['interviewers'];
  const interviewersOnDay = interviewerArray.map(person => state.interviewers[person] )
  return interviewersOnDay;
 }