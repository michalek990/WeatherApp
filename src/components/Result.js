import React from 'react'

const Result = props => {
    const {err, city, date, sunrise, sunset, preasure, wind, temp} = props.weather
    let content = null

    if(!err && city){
        const sunriseTimeNow = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTimeNow = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp}</h4>
                <h4>Wschód slonca dzisiaj {sunriseTimeNow}</h4>
                <h4>Zachód slonca dzisiaj {sunsetTimeNow} </h4>

            </div>
        )
    }

    return ( 
        <div className='result'>
            {err ? `Nie mam w bazie ${city}`: content}
        </div>
     );
}
 
export default Result;