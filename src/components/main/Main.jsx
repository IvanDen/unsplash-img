import React from 'react';
import Class from './Main.module.css';

const Main = (props) => {
    return (
        <div className={`${Class.appWrap}`}>
            <h1>Image loader</h1>
            <div className={`${Class.imagesContainer}`}>
                <div className={`${Class.imgItem}`}>
                    <img src="img/photo-1562.jpg" alt="pic1"/>
                </div>
                <div className={`${Class.imgItem}`}>
                    <img src="img/photo-1562.jpg" alt="pic1"/>
                </div>
            </div>
        </div>
    )
}

export default Main;