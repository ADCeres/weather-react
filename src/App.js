import "./App.css";
import Form from "./Form.js";
import City from "./City.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="container">
      <Form />
      <br />
      <City />
      <br />
      <Weather />
      <br />
      <Forecast />
      <br />
      <a href="https://github.com/ADCeres/weather-react">
        https://github.com/ADCeres/weather-react
      </a>
    </div>
  );
}
