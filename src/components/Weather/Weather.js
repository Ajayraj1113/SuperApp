import { useEffect, useState } from "react";
import { getWeatherDetails } from "../../apis/weather";

const Weather = () => {
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetchWeatherDetails();
    }, [])

    const fetchWeatherDetails = async () => {
        const result = await getWeatherDetails();
        // console.log(result)

        setWeather(result.current)
        setDate(result.location.localtime)
    }

  return (
    <div
        style={{
            width: "31vw",
            minHeight: "20vh",
            background: "#101744",
            borderRadius: "12px",
            marginTop: "5px",
        }}
    >
        <div
            style={{
                height: "7vh",
                background: "#FF4ADE",
                borderRadius: "12px",
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                fontSize: "2rem",
            }}
        >
            <span>{date}</span>
        </div>
        <div>
            {weather ? (
                <div
                    style={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <div>
                        <img
                            src={weather?.condition?.icon}
                            style={{ width: "45px", height: "45px" }}
                            alt="Weather condition icon"
                        />
                        <p>{weather?.condition?.text}</p>
                    </div>

                    <span style={{fontSize: "35px"}}>|</span>
                    
                    <div>
                        <p
                            style={{
                                marginBottom: "12px",
                                fontSize: "24px",
                                marginTop: "10px",
                            }}
                        >
                            <span>{weather?.temp_c}</span>C
                        </p>
                        <p>{weather?.pressure_mb} pressure</p>
                    </div>

                    <span style={{fontSize: "35px"}}>|</span>

                    <div>
                        <p
                            style={{
                                marginBottom: "12px",
                                fontSize: "24px",
                                marginTop: "10px",
                            }}
                        >
                            {weather?.wind_kph} wind
                        </p>
                        <p>{weather?.humidity} humidity</p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    </div>
  );
};

export default Weather;