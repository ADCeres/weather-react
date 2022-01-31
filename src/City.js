import React from "react";
import "./App.css";

export default function City() {
  return (
    <div>
      <h1 id="selected-city"> New York City </h1>
      <div className="currentday">
        <p id="cur-day-time">Wednesday, 7:00PM</p>
      </div>
      <br />
    </div>
  );
}
