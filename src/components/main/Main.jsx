import React from 'react';
import Class from './Main.module.css';
import Imgitem from "./Imgitem/Imgitem";

const Main = (props) => {
    return (
        <div className={`${Class.appWrap}`}>
            <h1>Image loader</h1>
            <div className={`${Class.imagesContainer}`}>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
                <Imgitem/>
            </div>
        </div>
    )
}

export default Main;