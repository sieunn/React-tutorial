import React, { useState } from 'react';

const Weather = () => {
    const [temperature, setTemperature] = useState('');

    const getWeather = () => {
        fetch('https://goweather.herokuapp.com/weather/Seoul')
            .then((response) => response.json())
            .then((data) => {
                setTemperature(data['temperature']);
            })
            .catch((error) => {
                console.error('날씨 정보를 가져오는 중 오류가 발생했습니다.', error);
            });
    };

    return (
        <>
            <h1>오늘의 서울 날씨</h1>
            <button onClick={getWeather}>날씨 가져오기</button>
            <p id="temperature">{temperature}</p>
        </>
    );
};

export default Weather;
