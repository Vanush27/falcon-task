import * as React from 'react';
import {useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AutoFresh = ({getStoriesList}) => {
    const [time, setTime] = React.useState(10);
    const INTERVAL_TIME = 1000;

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    useEffect(() => {

        setInterval(() => {
            getStoriesList();
        }, time * INTERVAL_TIME);

    }, [time]);


    return (
        <>
            <FormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">auto refresh</InputLabel>

                <Select
                    labelId="mutiple-select-label"
                    value={time}
                    onChange={handleChange}
                    label="Time"
                >
                    <MenuItem value={10}>10s</MenuItem>
                    <MenuItem value={30}>30s</MenuItem>
                    <MenuItem value={60}>1min</MenuItem>
                    <MenuItem value={600}>10min</MenuItem>
                </Select>

            </FormControl>
        </>
    );
}

export default AutoFresh;