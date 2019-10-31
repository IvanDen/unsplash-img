import React from 'react';
import Class from './Main.module.css';

const Main = (props) => {
    return (
        <div className={`${Class.appWrap}`}>
            <h1>Image loader</h1>
            <div className={`${Class.imagesContainer}`}>
                <div className={`${Class.imgItem}`}>
                    <figure>
                        <div className={`${Class.linkWrap}`} >
                            <a className={Class.linkImg} title={"Some title"} href="/">
                                <div className={`${Class.imageWrap}`}>
                                    <img src="img/photo-15725.jpg" alt="pic1"/>
                                </div>
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
                                    <div className={`${Class.authorInfo}`}>
                                        <div className={`${Class.authorInfo}`}>
                                            <span className={`${Class.authorName}`}>
                                                <a href="/@hubblecontacts">username</a>
                                            </span>
                                            <span className={`${Class.authorProf}`}>
                                                <a href="/@hubblecontacts">userprofile</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Main;