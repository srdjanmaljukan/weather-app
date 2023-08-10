import React from "react";

function Search() {
    return (
        <div className="search-bar">
            <form className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                />
            </form>
        </div>
    )
}

export default Search;