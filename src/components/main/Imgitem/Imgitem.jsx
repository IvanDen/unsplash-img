import React from 'react';
import Class from '../Main.module.css';

const Imgitem = (props) => {
    return (
        <div className={`${Class.imgItem}`}>
            <div className={`${Class.linkWrap}`} >
                <a className={`${Class.linkImg}` } title={"Some title"} href="/">
                    <img src="../../img/photo-15725.jpg" alt="pic1" />
                </a>
                <div className={`${Class.infoWrap}`}>
                    <div className={`${Class.background}`}></div>
                    <div className={`${Class.usePanel} ${Class.panelTop}`}>
                        <div className={`${Class.likeCollect}`}>
                            <button title="Like photo" className={`${Class.like}`}>Like</button>
                            <button title="Add to collection" className={`${Class.collect}`}>Collect</button>
                        </div>
                    </div>
                    <div className={`${Class.usePanel} ${Class.panelBottom}`}>
                        <div className={`${Class.authorPanel}`}>
                            <div className={`${Class.authorInfoWrap}`}>
                                <a className={`${Class.userLinc}`} href="/@hubblecontacts">
                                    <img className={`${Class.userPhoto}`} src="../../img/user-photo.png" alt="user_photo"/>
                                </a>
                                <div className={`${Class.authorItems}`}>
                                    <a href="/@hubblecontacts">username</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imgitem;