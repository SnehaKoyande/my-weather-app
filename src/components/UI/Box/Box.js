import React from 'react';

import Icons from '../Icons/Icons';
import classes from './Box.css';

const box = (props)=> {
    return(
        <div 
            className={classes.Box}
            onClick = {props.clicked}>
            <div className={classes.Date}>
                {props.day.date}   
            </div>
            
            <Icons weather = {props.day.weather}/>
            
            <div className={classes.MinMax}>
                <span className={classes.Min}>Min: {props.day.min} </span>
                <span>Max: {props.day.max}</span>
            </div>
        </div>
    )
};

export default box;