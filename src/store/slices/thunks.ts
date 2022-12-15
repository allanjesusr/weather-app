import { AppDispatch, RootState } from '../store';
import { WeatherData, WeatherError } from '../../interfaces';
import { getWeather, setError } from './weatherSlice';


export const getWeatherThunk: Function = (city: string = "Maracaibo") => {
    return async (dispatch: AppDispatch, getState: RootState) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43c0277f97ec6ea7e50c9b95ee72f028`);
            if (!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch(getWeather(resData));

        } catch (err) {
            dispatch(setError({ error: (err) }))
        }
    }
}