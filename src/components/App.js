import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  render() {
    const cities = ["Goa(India)", "Amsterdam(Netherlands)", "New York(USA)", "Darjeeling(India)","Tokyo(Japan) ","Lonavala(India) "];
    return (
      <ol key="citiesList">
        {relatives.map((cities, index) => (
          <li key={`citiesListItem${index + 1}`}>{cities}</li>
        ))}
      </ol>
    );
  }
}

export default App;
