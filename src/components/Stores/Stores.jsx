import React from 'react';
import HistoryCard from "../HistoryCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const Stores = ({storiesData}) => {

    return (

        <div>
            {storiesData.stories?.length ? storiesData.stories
                .filter(item => {
                    if (item.category === "mp" || item.category === "op")
                        return item;
                    else if (item.category === "r") {
                        return item;
                    }
                })
                .map(item => {
                    return <HistoryCard key={item.id} item={item}/>
                }) : <CircularProgress/>
            }

        </div>
    );
};

export default Stores;