import React from "react";
import className from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = className("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  const formatSpots = (num) => {
    if (num === 0) {
      return "no spots remaining";
    }
    if (num === 1) {
      return "1 spot remaining";
    }
    return `${num} spots remaining`;
  };
  return (
    <li
      className={dayClass}
      data-testid="day"
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)} </h3>
    </li>
  );
}
