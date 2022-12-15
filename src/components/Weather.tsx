import React, { FC } from 'react';
import { WeatherData } from '../interfaces';
import { Grid, Text, Input, Button, Spacer } from '@nextui-org/react';


interface WeatherProps {
    data: WeatherData
}

export const Weather: FC<WeatherProps> = ({ data }) => {

    // console.log(data)

    const farenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <Grid css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text h1 css={{ marginBottom: 50 }}>{data.name} - {data.sys.country}</Text>
            <Grid xs={12} css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text h2>{data.weather[0].description}</Text>
                <Text>
                    <img src={`http://openweathermap.org./img/wn/${data.weather[0].icon}.png`} style={{ width: '85px', height: '85px' }} />
                </Text>
            </Grid>
            <Grid xs={12} css={{ mb: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text h1>T</Text>
                        <Text h2>emp</Text>
                    </div>
                    <Text css={{ marginBotton: '1rem' }}>{data.main.temp} K</Text>
                    <Text css={{ marginBotton: '1rem' }}>{farenheit} <sup>&#8457;</sup></Text>
                    <Text>{celsius} <sup>&#8451;</sup></Text>
                </div>
                <Spacer x={2} />
                <div style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text h2>T</Text>
                            <Text h3>emp Max</Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Text css={{ marginBotton: '1rem' }}>{data.main.temp_max} K</Text>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text h2>T</Text>
                            <Text h3>emp Min</Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Text css={{ marginBotton: '1rem' }}>{data.main.temp_min} K</Text>
                        </div>
                    </div>
                </div>

            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text h2>H</Text>
                    <Text h3>umidity</Text>
                </div>
                <Spacer y={2} />
                <Text b>{data.main.humidity}</Text>
            </div>
            <Grid xs={12} justify="center" alignItems="center">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text h2>P</Text>
                    <Text h3>ressure</Text>
                </div>
                <Spacer y={2} />
                <Text b>{data.main.pressure}</Text>
            </Grid>
            <Grid xs={12} justify="center" alignItems="center">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text h2>W</Text>
                    <Text h3>ind</Text>
                </div>
                <Spacer y={2} />
                <Text b>{data.wind.speed} m/s</Text>
            </Grid>
        </Grid>
    )
}
