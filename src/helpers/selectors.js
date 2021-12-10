export const getAppointmentsForDay = (state, day) => {
  const filteredDay = state.days.filter(d => d["name"] === day);
  if(filteredDay.length === 0) {
    return [];
  }
  const appointmentArray = filteredDay[0]['appointments'];
  const appointmentOnDay = appointmentArray.map(app => state.appointments[app] )
  return appointmentOnDay;
}