import "./App.css";
import WeatherApp from "./weatherApp";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>

      <WeatherApp />

      <footer>
        {" "}
        <a href="https://github.com/bonisiweGabela/weather-app-react">
          Open-source code
        </a>{" "}
        by Bonisiwe Gabela
      </footer>
    </div>
  );
}
