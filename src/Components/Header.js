import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';

function Header(props) {
    return (
        <div className="container">
            {!props.queried ?
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <CloudIcon fontSize="large" color="action" />
                        <span className="fs-4">It's always sunny... somewhere</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/maps" className="nav-link">Maps</a></li>
                        <li className="nav-item"><a href="/airpollution" className="nav-link">Air Pollution</a></li>
                        <li className="nav-item"><a href="/random" className="nav-link">Random Location</a></li>
                    </ul>
                </header>
                :
                <header className="p-3 mb-3 border-bottom">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
                    >
                        <CloudIcon fontSize="large" color="action" />
                        <ul
                            className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
                        >
                            <li>
                                <a href="/" className="nav-link px-2 link-secondary"
                                >It's always sunny... somewhere</a
                                >
                            </li>
                            <li><a href="/maps" className="nav-link px-2 link-body-emphasis">Maps</a></li>
                            <li>
                                <a href="/airpollution" className="nav-link px-2 link-body-emphasis"
                                >Air Pollution</a
                                >
                            </li>
                            <li>
                                <a href="/random" className="nav-link px-2 link-body-emphasis"
                                >Random Location</a
                                >
                            </li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </form>
                    </div>
                </header>
            }
        </div>
    )
}

export default Header;