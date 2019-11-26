import React from "react";

//erb vor poxancvuma mi parametr u veradarcvuma mi blok <div> karank senc grenk
const Weather = props => (
  // stex stugvuma ete orinak city === true (aysinkn datark chi ) && erkrord city === true tpuma Location ... hakarak depkum ban chi tpum
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location :{" "}
        <span className="weather__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature :{" "}
        <span className="weather__value">{props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity : <span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Conditions :<span className="weather__value">{props.description}</span>{" "}
      </p>
    )}
    {props.erorr && <p className="weather__error">{props.erorr}</p>}
  </div>
);

export default Weather;
