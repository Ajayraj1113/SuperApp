import axios from "axios";

const DEFAULT_LOCATION = "Delhi";

export const getWeatherDetails = async () => {
    try {
        const getUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${DEFAULT_LOCATION}`;
        const response = await axios.get(getUrl);
        // console.log(response)
        
        return response.data;
    } catch (error) {
        console.log(error);
        // toast message error
        // alert("Something went wrong!, Try after sometime....")
    }
};