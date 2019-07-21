import React from 'react';
import classes from './Icons.css';

const icon = (props) =>{

    let icon_pic = null;

    switch(props.weather){

        case 'sun-shower' :
            icon_pic = (
                <div className={classes.Icon}>
                    <div className={classes.icon}>
                        <div className={classes.cloud}></div>
                        <div className={classes.sun}>
                            <div className={classes.rays}></div>
                        </div>
                        <div className={classes.rain}></div>
                    </div>
                </div>
                )
            break;

        case 'thunder-storm' :
            icon_pic = (
                <div className={classes.Icon}>
                    <div className={classes.icon}>
                        <div className={classes.cloud}></div>
                        <div className={classes.lightning}>
                            <div className={classes.bolt}></div>
                            <div className={classes.bolt}></div>
                        </div>
                    </div>
                </div>
                )
            break;
            

        case 'cloudy' :
            icon_pic = (
                <div className={classes.Icon}>
                    <div className={classes.icon}>
                        <div className={classes.cloud}></div>
                        <div className={classes.cloud}></div>
                    </div>
                </div>
                )
            break;

        case 'flurries' :
                icon_pic = (
                    <div className={classes.Icon}>
                        <div className={classes.icon}>
                            <div className={classes.cloud}></div>
                            <div className={classes.snow}>
                                <div className={classes.flake}></div>
                                <div className={classes.flake}></div>
                            </div>
                        </div>
                    </div>
                    )
                break;

        case 'sunny' :
                icon_pic = (
                    <div className={classes.Icon}>
                        <div className={classes.icon}>
                            <div className={classes.sun}>
                                <div className={classes.rays}></div>
                            </div>
                        </div>
                    </div>
                    )
                break;

        case 'rainy' :
                icon_pic = (
                    <div className={classes.Icon}>
                      <div className={classes.icon}>
                            <div className={classes.cloud}></div>
                            <div className={classes.rain}></div>
                        </div>  
                    </div>
                    )
                break;

        default:
            icon_pic = <div className={classes.Icon}>
                <div className={classes.unavailable}>
                    Unavailable
                </div>
            </div>
    }

    return icon_pic

}

export default icon;