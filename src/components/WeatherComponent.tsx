import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DateSelector from './DateSelector';
 

const WeatherForecastApp = () => {
    const [city, setCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [forecastData, setForecastData] = useState(null);
    const [filteredForecast, setFilteredForecast] = useState([]);
    const [error, setError] = useState(null);
    const [isFiveDaysForecast, setIsFiveDaysForecast] = useState(false);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=1b7b65fd0b5971289a96c783e9b42ad6&units=metric`);
                setForecastData(response.data);
                setError(null);
            } catch (error) {
                setError(`Ошибка извлечения базы данных погоды. Попробуйте еще раз`);
                setForecastData(null);
            };
        };

        if (city) {
            fetchForecastData();
        };
    }, [city]);

    useEffect(() => {
        if (forecastData) {
            let filteredData = [];
            if (isFiveDaysForecast) {
                // Фильтрация данных для прогноза на 5 дней
                filteredData = forecastData.list.filter(forecast => new Date(forecast.dt_txt)
                );
            } else if (selectedDate) {
                // Фильтрация данных для выбранной даты
                filteredData = forecastData.list.filter(forecast => forecast.dt_txt.includes(selectedDate)
                );
            }
            setFilteredForecast(filteredData);
        }
    }, [forecastData, selectedDate, isFiveDaysForecast]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleCheckboxChange = (e) => {
        setIsFiveDaysForecast(e.target.checked);
        if (e.target.checked) {
            setSelectedDate('');
        };
    };

    return (
        <div>
            <div className='heading'>
                <span>Прогноз погоды</span>
            </div>
            <div className='header'>
                <label htmlFor="city">Введите город:</label>
                <input type="text" id="city" value={city} onChange={handleCityChange} />
                <DateSelector onDateChange={handleDateChange} onCheckboxChange={handleCheckboxChange} isFiveDaysForecast={isFiveDaysForecast} />
            </div>
            {error && <p>{error}</p>}
            {filteredForecast && filteredForecast.length > 0 && (
                <div>
                    {filteredForecast.map((forecast, index) => (
                        <div key={index}>
                            <div>
                                <div className="information">
                                    <hr />
                                    <p><b>Дата:</b> {forecast.dt_txt}</p>
                                    <p><b>Температура:</b> {forecast.main.temp} °C</p>
                                    <p><b>Погода:</b> {forecast.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default WeatherForecastApp;
 