import React, {useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


import {MenuProps, topRated,} from "../../utils";

const TopRated = ({getStoriesList}) => {

    const [selected, setSelected] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelected(value);
        getStoriesList(value);
    };


    return (
        <>
            <FormControl>
                <InputLabel id="multiple-select-label">ORDER</InputLabel>

                <Select
                    labelId="multiple-select-label"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >

                    {topRated.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}>
                            <ListItemIcon>
                                <Checkbox checked={selected.indexOf(option) > -1}/>
                            </ListItemIcon>
                            <ListItemText primary={option}/>
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>
        </>

    );
}

export default TopRated;