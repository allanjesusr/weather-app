import { NextUIProvider } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import App from './App';
import { RootState } from './store';
import { dartkTheme, lightTheme } from './theme';

export const WeatherApp = () => {

    const { themeDark } = useSelector((state: RootState) => state.weather)

    return (
        <NextUIProvider theme={themeDark ? dartkTheme : lightTheme}>
            <App />
        </NextUIProvider>
    )
}
