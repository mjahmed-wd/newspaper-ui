import React from 'react'
import BrandLogo from "../assets/images/prothomaloLogo.png"

const Header = () => {
    return (
        <div className="header">
            <img src={BrandLogo} alt="Leading Newspaper" />
        </div>
    )
}

export default Header