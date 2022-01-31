import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div>
      <h2>4 Day Forecast</h2>

      <div className="row">
        <div className="col-3">
          <div className="row forecast_day" id="d_for1">
            <p>Thursday</p>
          </div>
          <div className="row">
            <div className="card forecast_emo" id="e_for1">
              🌧
              <div className="card-body">
                <p className="card-text">Rain</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row forecast_day" id="d_for2">
            <p>Friday</p>
          </div>
          <div className="row">
            <div className="card forecast_emo" id="e_for2">
              🌧
              <div className="card-body">
                <p className="card-text">Rain</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row forecast_day" id="d_for3">
            <p>Saturday</p>
          </div>
          <div className="row">
            <div className="card forecast_emo" id="e_for3">
              🌧
              <div class="card-body">
                <p class="card-text">Rain</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row forecast_day" id="d_for4">
            <p>Sunday</p>
          </div>
          <div class="row">
            <div class="card forecast_emo" id="e_for4">
              🌧
              <div class="card-body">
                <p class="card-text">Rain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
