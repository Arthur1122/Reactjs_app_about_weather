import React from "react";

//erb vor poxancvuma mi parametr u veradarcvuma mi blok <div> karank senc grenk
const Weather = props => (
  // stex stugvuma ete orinak city === true (aysinkn datark chi ) && erkrord city === true tpuma Location ... hakarak depkum ban chi tpum
  <div>
    {props.city && props.country && (
      <p>
        Location : {props.city}, {props.country}
      </p>
    )}
    {props.temperature && <p>Temperature : {props.temperature}</p>}
    {props.humidity && <p>Humidity : {props.humidity}</p>}
    {props.description && <p>Conditions : {props.description}</p>}
    {props.erorr && <p>{props.erorr}</p>}
  </div>
);

export default Weather;
