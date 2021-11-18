import React from "react"
import logo from '../style/img/logo.svg'
const header = props => {



    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="chuk norris logo"/>
            </div>

        </header >
    )

}

export default header;