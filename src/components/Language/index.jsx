import React, {useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./style.scss";

import {MenuProps, options} from "../../utils";


const Language = ({getStoriesList}) => {


    const [selected, setSelected] = useState([]);

    const isAllSelected = options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {

        const value = event.target.value;
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }

        setSelected(value);
        getStoriesList(value);
    };

    const allLang = (options) => {

        if (selected.length === options.length) {
            return "All Language";
        } else {
            return "Language";
        }
    }

    const handleAllLanguages = () => {
        const lang = ['English', 'German', 'Chinese', 'Italian']
        setSelected(lang);
        getStoriesList(lang);
    }

    return (

        <>
            <FormControl>
                <InputLabel id="mutiple-select-label">{allLang(options)}</InputLabel>

                <Select
                    labelId="mutiple-select-label"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >

                    <MenuItem
                        value="all"
                    >
                        <ListItemIcon>
                            <Checkbox

                                checked={isAllSelected}
                                indeterminate={
                                    selected.length > 0 && selected.length < options.length
                                }
                            />

                        </ListItemIcon>
                        <ListItemText
                            onClick={handleAllLanguages}
                            primary="Select All"
                        />
                    </MenuItem>

                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
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
export default Language;