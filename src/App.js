import './App.scss';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

function App() {

    const storiesUrl = 'https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=20';

    const [storiesData, setStoriesData] = useState([]);

    const getStoriesList = async (selected) => {

        try {
            if (selected) {

                let newArray = selected.map(item => {
                    if (item === 'English') {
                        return 'en'
                    }
                    if (item === 'German') {
                        return 'de'
                    }
                    if (item === 'Chinese') {
                        return 'zh'
                    }
                    if (item === 'Italian') {
                        return 'it'
                    }
                })

                const splitArray = newArray.toString();
                let result = null

                if (splitArray.length) {
                    const query = `&languages=${splitArray}`
                    result = await axios.get(storiesUrl + query);
                } else {
                    result = await axios.get(storiesUrl);
                }

                setStoriesData(result.data);
            } else {
                const result = await axios.get(storiesUrl);
                setStoriesData(result.data);
            }

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getStoriesList();
    }, []);

    return (
        <>
            <Header/>

            <Main
                storiesData={storiesData}
                getStoriesList={getStoriesList}
                setStoriesData={setStoriesData}
            />


        </>
    )

}

export default App;
