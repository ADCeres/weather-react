import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div>
      <div class="row">
        <div class="col-1">
          <div class="row">
            <div class="button">
              <button class="converter" id="celsius">
                C
              </button>
            </div>
          </div>
          <div class="row">
            <div class="button">
              <button class="converter" id="fahrenheit">
                F
              </button>
            </div>
          </div>
        </div>

        <div class="col-3">
          <span id="cur-temp">57°F</span>
          <div class="row">
            <span class="reduce-padding subtext">62°F | 49°F</span>
          </div>
        </div>

        <div class="col-2">
          <span id="cur-emoji">🌧</span>
          <div class="row">
            <span class="reduce-padding subtext" id="cur-emoji-desc">
              Rain
            </span>
          </div>
        </div>

        <div class="col-3">
          <div class="row cats">Wind</div>
          <div class="row cats">Humidity</div>
          <div class="row cats">Percip.</div>
        </div>
        <div class="col-2">
          <div class="row cat_results" id="wind">
            10 MPH
          </div>
          <div class="row cat_results" id="humidity">
            30%
          </div>
          <div class="row cat_results" id="percipitation">
            10%
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
