import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

import classes from './Hourly.css';

   

class Hourly extends Component {

    state = {hours:[
        {
            time:"12 pm",
            temp: 13,
            weather: "sun-shower"},
        {
            time:"1 pm",
            temp: 13,
            weather: "sun-shower"
        },
        {
            time:"2 pm",
            temp: 13,
            weather: "sun-shower"
        },
        {
            time:"3 pm",
            temp: 13,
            weather: "sun-shower"
        },
        {
            time:"4 pm",
            temp: 13,
            weather: "sun-shower"
        },
        {
            time:"5 pm",
            temp: 13,
            weather: "sun-shower"
        },
        {
            time:"6 pm",
            temp: 13,
            weather: "sun-shower"
        }
    ]};

    componentWillMount(){
        console.log(this.props.match.params.date)
        //console.log("componentWillMount")
    }
        

    render() {
        return(
            <div className = {classes.TableDiv}>
                <div className = {classes.H1}>
                <h3> Hourly weather prediction for {this.props.match.params.date}</h3>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Temperature</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hours.map((hour,index) => {
                                return(
                                    <tr key = {index}>
                                        <td>{hour.time}</td>
                                        <td>{hour.temp} Degree Celcuis</td>
                                        <td>{hour.weather}</td>
                                    </tr>
                                )
                            })   
                        }
                        
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default Hourly;