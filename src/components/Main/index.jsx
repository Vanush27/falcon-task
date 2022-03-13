import React, {useState} from 'react';
import "./style.scss";
import Filter from "../Filter";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Stores from "../Stores/Stores";

const Main = ({storiesData, setStoriesData, getStoriesList}) => {

        const [toggle, setToggle] = useState(false);
        const handleFilter = () => {
            setToggle(!toggle);
        }

        const handleRefresh = () => {
            window.location.reload(false);
        }

        return (

            <div className="container container-wrapper">


                <div>
                    <div className="watchlist-Name">
                        <h2>Watchlist Name</h2>

                        <div className="two-button">
                            <button className="btn-refresh"
                                    onClick={handleRefresh}>
                                <RefreshOutlinedIcon color={"primary"}/>
                                <span className="refresh">Refresh</span>
                            </button>

                            <button className="btn-filter"
                                    onClick={handleFilter}>
                                <FilterAltOutlinedIcon color={"primary"}/>
                                <span className="filter">Filter</span>
                            </button>

                        </div>
                    </div>

                    {toggle ?
                        <Filter storiesData={storiesData}
                                setStoriesData={setStoriesData}
                                getStoriesList={getStoriesList}/>
                        : null}
                    <Stores storiesData={storiesData}/>
                </div>
                <div className="rectangle">
                </div>

            </div>
        );
    }
;

export default Main;