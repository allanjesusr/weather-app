import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Grid, Text, Input, Button, Spacer } from '@nextui-org/react';
import { toast, Toaster } from 'react-hot-toast';
import { getWeather, setLoading } from '../store/slices';
import { getWeatherThunk } from '../store/slices/thunks';

interface SearchProps {
    title?: string;
}

export const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: any) => {
        setCity(e.currentTarget.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            return toast.error('City is required');
        }

        dispatch(setLoading());
        dispatch(getWeatherThunk(city));
        setCity('');

    }

    return (
        <Grid css={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
            <Text h1>{title}</Text>
            <form onSubmit={onSubmit}>
                <Input
                    label="Search a city"
                    type="text"
                    size="xl" 
                    fullWidth
                    placeholder="Enter city name"
                    onChange={changeHandler}
                    value={city}
                />
                <Spacer y={0.5} />
                <Button
                    color="primary"
                    size="lg"
                    // auto
                    css={{ margin: '0 auto' }}
                    type="submit"
                >
                    Search
                </Button>
            </form>
        </Grid>
    )
}

