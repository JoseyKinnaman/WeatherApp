import './App.css';
import CurrentLocation from './CurrentLocation';


const App = () => {
  return (
    <div className="App">
      <h1>The Weather App</h1>
      <CurrentLocation />
      <footer><a href="https://github.com/JoseyKinnaman/WeatherApp.git">Josey Kinnaman, 2021</a></footer>
    </div>
  );
}

export default App;
