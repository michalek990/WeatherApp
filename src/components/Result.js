import React from 'react'
import '../components/Result.css'

const Result = props => {
    const {err, name, surname, age, gender} = props.infoAboutUser
    let content = null

    if(!err && surname){
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla nazwiska<em>{surname}</em></h3>
                <h4>Imie: {name}</h4>
                <h4>Wiek: {age}</h4>
                if({gender === 1}){
                    <h4>Plec: Mężczyzna</h4>
                }
                else if({gender} === 2){
                    <h4>Plec: Kobieta</h4>
                }
                
            </div>
        )
    }

    return ( 
        <div className='result'>
            {err ? `Nie mam w bazie osoby o nazwisku ${surname}`: content}
        </div>
     );
}
 
export default Result;