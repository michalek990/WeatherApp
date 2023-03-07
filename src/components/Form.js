import React from 'react'

const Form = props => {
    return ( 
        <form onSubmit ={props.submit}>
            <input type = "text" value = {props.value} placeholder="wpisz nazwisko " onChange={props.change}/>
            <button>Wyszukaj użytkownika</button>
        </form>
     )
}
 
export default Form;