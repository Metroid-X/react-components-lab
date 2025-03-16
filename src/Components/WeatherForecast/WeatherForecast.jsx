
import './WeatherForecast.css'
import WeatherData from './SubComps/WeatherData';
import WeatherIcon from './SubComps/WeatherIcon';


const today = new Date(Date.now()); 

const WeatherForecast = (forecast) => {
    return (
        <div className="weather">
            <h2>{forecast.day}</h2>
            <WeatherIcon key={forecast.day} {...forecast}/>
            <WeatherData key={forecast.day} {...forecast}/>
        </div>
    );
};

export default WeatherForecast;
