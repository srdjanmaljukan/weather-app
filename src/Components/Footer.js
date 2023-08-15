import React from "react"

function Footer(props) {

    const year = new Date().getFullYear();

    return (
        <div className={`footer text-light text-center ${!props.queried ? "position-fixed bottom-0 start-50 translate-middle" : null}`}>
            <p className="copy mb-1">&copy; Copyright {year}</p>
            <p className="owner mb-1">Made by Srđan Maljukan</p>
            <p className="photo-owner mb-1">Background photo by <a className="text-light" href="https://unsplash.com/@resul?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Resul Mentes 🇹🇷</a> on <a className="text-light" href="https://unsplash.com/photos/DbwYNr8RPbg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
    )
}

export default Footer;


