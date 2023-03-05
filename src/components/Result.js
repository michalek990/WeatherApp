import React from 'react'

const Result = props => {
    const {err, city, date, sunrise, sunset, preasure, wind} = props.weather

    return ( 
        <React.Fragment>
            <div>Pogoda dla: {city} </div>
            <div>Pogoda z dnia: {date}</div> 
            <div>Wschód słonca: {sunrise} </div>
            <div>Zachód słonca: {sunset}</div> 
            <div>Ciśnienie: {preasure} </div>
            <div>Wiatr: {wind}</div>
        </React.Fragment> 
     );
}
 
export default Result;