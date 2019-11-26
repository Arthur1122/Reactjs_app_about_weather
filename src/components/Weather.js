import React from "react";

class Weather extends React.Component {
  render() {
    return (
      // stex stugvuma ete orinak city === true (aysinkn datark chi ) && erkrord city === true tpuma Location ... hakarak depkum ban chi tpum
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location : {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && (
          <p>Temperature : {this.props.temperature}</p>
        )}
        {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
        {this.props.description && <p>Conditions : {this.props.description}</p>}
        {this.props.erorr && <p>{this.props.erorr}</p>}
      </div>
    );
  }
}

export default Weather;
