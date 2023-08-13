import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import data from "../world-cities_json.json";

function Search(props) {

    const [cities, setCities] = useState([]);
    const [searchLocation, setSearchLocation] = useState();

    function handleOnSelect(item) {
        setSearchLocation(item);
    }

    function formatResult(item) {
        return (
            <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}, {item.country}</span>
      </>
        )
    }

    useEffect(() => {
        setCities(data);
    }, [])

    useEffect(() => {
        props.onAdd(searchLocation)
    }, [props, searchLocation])

    return (
        <div className={props.type === "header" ? "search-bar-narrow" : "search-bar"} >
            <ReactSearchAutocomplete
                items={cities}
                onSelect={handleOnSelect}
                formatResult={formatResult}
                showIcon={false}
                maxResults={5}
                className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                placeholder="Search..."
                styling={props.type === "home" ? {
                    fontSize: "2rem",
                    borderRadius: "15px"
                } : {
                    fontSize: "1rem",
                    borderRadius: "15px"
                }}
            />
        </div>
    )
}

export default Search;