
import './WeatherForecast.css'
import WeatherData from './SubComps/WeatherData';
import WeatherIcon from './SubComps/WeatherIcon';


const daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
]

const today = new Date(Date.now()); 

const WeatherForecast = () => {
    return (
        <div className="weather">
            <h2>{daysOfWeek[today.getDay()]}</h2>
            <WeatherIcon />
            <WeatherData />
        </div>
    );
};

export default WeatherForecast;
