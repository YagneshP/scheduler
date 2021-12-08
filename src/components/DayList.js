import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  console.log("props", props);
  let dayListItems = props.days.map(day => {
  return( <DayListItem 
                 key ={day.id} 
                 name = {day.name}
                 spots = {day.spots} 
                 selected={day.name === props.day} 
                 setDay={props.setDay} 
          />)
        });
  return(<ul>
    {dayListItems}
  </ul>);
}