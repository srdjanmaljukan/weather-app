import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import Search from "./Search";

function Header(props) {
    return (
        <div className="container">
            {!props.queried ?
                <header className="d-flex justify-content-center main-header py-3 mb-2 border-bottom">
                    <a href="/" className="mx-auto me-md-auto link-body-emphasis text-decoration-none">
                        <CloudIcon fontSize="large" color="action" />
                        <span className="fs-4 ms-2">It's always sunny... somewhere</span>
                    </a>
                </header>
                :
                <header className="p-3 mb-3 border-bottom">
                    <div
                        className="w-100 d-flex flex-wrap row align-items-center justify-content-center justify-content-lg-start"
                    >
                        <div className="heading logo col-6 col-md-4">
                            <CloudIcon fontSize="large" color="action" />
                            <a href="/" className="nav-link px-2 link-secondary"
                            >It's always sunny... somewhere</a>
                        </div>
                        <ul
                            className="nav col-md-4 mb-2 justify-content-end mb-md-0"
                        >
                            <li><a href="/#current" className="nav-link me-lg-3 px-2 link-body-emphasis">Current</a></li>
                            <li>
                                <a href="/#hourly" className="nav-link me-lg-3 px-2 link-body-emphasis"
                                >Hourly</a>
                            </li>
                            <li>
                                <a href="/#daily" className="nav-link me-lg-3 px-2 link-body-emphasis"
                                >Daily</a>
                            </li>
                        </ul>
                        <Search type="header" onAdd={props.onSearch} />
                    </div>
                </header>
            }
        </div>
    )
}

export default Header;