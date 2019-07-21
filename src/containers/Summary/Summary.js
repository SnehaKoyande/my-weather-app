import React, { Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';

import classes from './Summary.css';
import Box from '../../components/UI/Box/Box'; 


class Summary extends Component {

  state = {days:[
    {
      date:"8 Jun",
      min: 19,
      max: 23,
      weather: "sun-shower"
    },
    {
      date:"9 Jun",
      min: 12,
      max: 26,
      weather: "thunder-storm" 
    },
    {
      date:"10 Jun",
      min: 10,
      max: 20,
      weather: "cloudy"
    },
    {
      date:"11 Jun",
      min: 15,
      max: 24,
      weather: "flurries"
    },
    {
      date:"12 Jun",
      min: 11,
      max: 30,
      weather: "sunny"
    },
    {
      date:"13 Jun",
      min: 15,
      max: 28,
      weather: "rainy"
    },
  ],
  redirect: false};

  setRedirect = (day) => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = (day) => {
    console.log("inside render redirect")
    if (this.state.redirect) {
      const encodedURI = encodeURI(day.date)
      return <Redirect to={'/'+encodedURI} />
    }
  };

  render() {
    return (
      <Fragment>
        <div className={classes.Summary}
          onClick = {this.onWeatherHandler}>
          <h1>Weather</h1>
          <div className={classes.Cards}>
            { 
              this.state.days.map((day, index) => {
                this.renderRedirect(day)
                //console.log(day.date)
                return(
                  <Box 
                  key={index}
                  day = {day}
                  clicked = {this.setRedirect}
                  />)
              } )
            }
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Summary;