import React, { Component } from 'react'
import './weather.scss'
import { connect } from 'react-redux'
import { getWeatherData } from '../store/homeActions';
//天气
export class Weather extends Component {
  constructor(props) {
    super(props);
     this.fetchData()
    
  }
  
  fetchData(){
    this.props.dispatch(getWeatherData())
  }

  render() {
    const { location } = this.props.weatherData.basic
    const { cond_txt,tmp } = this.props.weatherData.now
    return (
      <div className='weather'>
      {location}  {cond_txt} {tmp}°C
      </div>
    )
  }
}
const mapState = state =>({
  weatherData : state.weatherReducer.weather
})
export default connect(mapState,null)(Weather)
