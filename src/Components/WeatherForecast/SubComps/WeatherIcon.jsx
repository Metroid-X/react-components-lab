
const WeatherIcon = (forecast) => {
    return (
        <>
            <img src={forecast.img} alt={forecast.imgAlt} />
        </>
    );
};



export default WeatherIcon;