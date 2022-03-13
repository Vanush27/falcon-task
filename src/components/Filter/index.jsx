import * as React from 'react';
import Button from "@mui/material/Button";

import "./style.scss";
import Language from "../Language";
import AutoFresh from "../AutoFresh";
import TopRated from "../TopRated";

const Filter = ({storiesData, getStoriesList, setStoriesData}) => {

    return (
        <div className='filter-wrapper'>
            <div className="container-main container-wrapper">

                <div className="container-filter">

                    <div className='filter-item'>
                        <AutoFresh
                            storiesData={storiesData}
                            getStoriesList={getStoriesList}
                            setStoriesData={setStoriesData}/>
                    </div>

                    <div className='filter-item'>
                        <TopRated storiesData={storiesData}
                                  setStoriesData={setStoriesData}
                                  getStoriesList={getStoriesList}/>
                    </div>

                    <div className='filter-item'>
                        <Language
                            storiesData={storiesData}
                            getStoriesList={getStoriesList}
                            setStoriesData={setStoriesData}/>
                    </div>

                    <Button className="btn" variant="contained">RESET</Button>
                </div>

            </div>
        </div>
    );
}

export default Filter;