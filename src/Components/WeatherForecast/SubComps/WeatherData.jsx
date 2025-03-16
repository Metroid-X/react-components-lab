



const WeatherData = (forecast) => {
    
    return (
        <>
            <p><strong>Conditions:</strong> {forecast.conditions}</p>
            <p><strong>Time:</strong> {forecast.time}</p>
        </>
    );
};

export default WeatherData;