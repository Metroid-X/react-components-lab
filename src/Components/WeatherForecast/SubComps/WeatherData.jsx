



const WeatherData = () => {
    
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const hourTimes = [
        {hour: 12, half: "am",},
        {hour: 1, half: "am",},
        {hour: 2, half: "am",},
        {hour: 3, half: "am",},
        {hour: 4, half: "am",},
        {hour: 5, half: "am",},
        {hour: 6, half: "am",},
        {hour: 7, half: "am",},
        {hour: 8, half: "am",},
        {hour: 9, half: "am",},
        {hour: 10, half: "am",},
        {hour: 11, half: "am",},
        {hour: 12, half: "pm",},
        {hour: 1, half: "pm",},
        {hour: 2, half: "pm",},
        {hour: 3, half: "pm",},
        {hour: 4, half: "pm",},
        {hour: 5, half: "pm",},
        {hour: 6, half: "pm",},
        {hour: 7, half: "pm",},
        {hour: 8, half: "pm",},
        {hour: 9, half: "pm",},
        {hour: 10, half: "pm",},
        {hour: 11, half: "pm",},
    ];
    const date = new Date(Date.now());

    const mins = (n) => {
        let result = n;
        
        if(String(n).length != 2) {
            result = "0"+String(n);
        }
        return result; 
    };
    const dateToday = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const timeOfDay = `${hourTimes[date.getHours()].hour}:${mins(date.getMinutes())} ${hourTimes[date.getHours()].half}`;

    return (
        <>
            <h4><strong>Today's Date: </strong>{dateToday}</h4>
            <h4><strong>Current Time: </strong>{timeOfDay}</h4>
            <h4>Today's Conditions: (insert conditions here)</h4>
        </>
    );
};

export default WeatherData;