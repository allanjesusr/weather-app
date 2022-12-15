import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Grid, Switch } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

import { Search, Weather } from './components';
import { RootState } from './store';
import { getWeatherThunk } from './store/slices/thunks';
import { setThemeDark, setThemeLight } from './store/slices';



const App: FC = () => {

  const dispatch = useDispatch();
  const { data, loading, error, themeDark } = useSelector((state: RootState) => state.weather);
  // console.log(data)
  const onChange = () => {
    if (themeDark) {
      dispatch(setThemeLight())
    } else {
      dispatch(setThemeDark())
    }
  }

  useEffect(() => {
    dispatch(getWeatherThunk())
  }, [])


  if (error) {
    toast(error)
  }
  return (
    <div style={{ padding: '2rem' }}>
      <Grid css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Switch
          checked={themeDark}
          size="xl"
          iconOn={<BsMoonFill />}
          iconOff={<BsFillSunFill />}
          onChange={onChange}
        />
      </Grid>
      <div>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}

        <Grid>
          <Grid css={{ mb: 10 }}>
            <Search />
          </Grid>
          {
            (loading)
              ?
              <Loading>Loading</Loading>
              :
              (data) &&
              <Weather data={data} />
          }
          {/* {
        (error) && toast(error) />
      } */}

        </Grid>
      </div>
    </div>
  );
}

export default App;
