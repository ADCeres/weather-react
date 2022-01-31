import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div>
      <form>
        <input type="submit" value="" id="current-location-button" />
        <input
          type="text"
          placeholder="Enter Name of City Here"
          id="entry-line"
          autofocus="on"
          autocomplete="off"
        />
        <input type="submit" value="Change City" id="submit-button" />
      </form>
    </div>
  );
}
