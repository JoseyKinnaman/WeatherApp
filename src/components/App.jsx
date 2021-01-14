import './App.css';
import CurrentLocation from './CurrentLocation';
import Location from './Location'

const App = () => {
  // const {location: currentLocation, error: currentError} = useCurrentLocation();
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentLocation />
      <Location/>
    </div>
  );
}

export default App;
