import React, { Component, Fragment} from 'react';


import classes from './Summary.css';
import Box from '../../components/UI/Box/Box'; 
import axios from '../../axios-instance';


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
    responseReceived : false,
    city: "",
    country: ""
    
  };


  onClickHandler = (day) => {
    //this.setState({clickedDate : day.date})
    axios.get('/forecast?q=Washington,US&APPID=f63bf5e46ecfbbd1cf2c288c06501828')
      .then(res => {
        console.log((res.data.list[0].main.temp_min-273.15).toFixed(1))
        const encodedURI = encodeURI(day.date)
        this.props.history.push('/hourly/'+encodedURI)
      })
    
      
  };

  cityChangeHandler = (event) => {
    this.setState({city: event.target.value})
  };

  countryChangeHandler = (event) => {
    this.setState({country: event.target.value})
  }

  onSubmitHandler = (event) => {
    axios.get('/weather?q='+this.state.city+','+this.state.country+'&APPID=f63bf5e46ecfbbd1cf2c288c06501828')
      .then(res => {
        console.log(res.data)
        this.setState({responseReceived:true})
      })
    event.preventDefault()
  }

  render() {

    let summaryBoxes = null;
    if (this.state.responseReceived){
      summaryBoxes = (
        <div className={classes.Cards}>
          { 
            this.state.days.map((day, index) => {
              return(
                <Box 
                  key={index}
                  day = {day}
                  clicked = {() => this.onClickHandler(day)}/>
              )
            })
          }
        </div>
      )
    }

    return (
      <Fragment>
        <div className={classes.Summary}>
          <h1>Weather</h1>
          <form onSubmit={this.onSubmitHandler} className={classes.Form}>
            <label>
              City:
              <input 
                type="text" 
                placeholder = "Enter City"
                value={this.state.city} 
                onChange={this.cityChangeHandler} />
            </label>
            <br/>
            <label>
              Country:
              <input 
                type="text" 
                placeholder = "Enter Country"
                value={this.state.country} 
                onChange={this.countryChangeHandler} />
            </label>
            <br/>
            <input 
              type="submit" value="Submit" />
          </form>
          <br/>
          {summaryBoxes}
        </div>
      </Fragment>
    );
  }
}


export default Summary;