import { createSlice } from '@reduxjs/toolkit';
import { WeatherState } from '../../interfaces/interfaces';

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: '',
    themeDark: true,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.error = '';
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, { payload }) => {
            state.error = payload
            state.loading = false;
        },
        setThemeDark: (state) => {
            state.themeDark = true;
        },
        setThemeLight: (state) => {
            state.themeDark = false;
        },
    }
});


export const { getWeather, setLoading, setError, setThemeDark, setThemeLight } = weatherSlice.actions; 