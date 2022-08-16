import React from 'react';
import "./loader.css";
import { TailSpin } from  'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <TailSpin
                height="100"
                width="100"
                color="#0071c2"
                ariaLabel='loading'
            />
        </div>
    )
}

export default Loader