import { useState } from 'react'
import PropTypes, { number } from 'prop-types'


export const CounterApp = ({ value }) => {
    
    const [ counter, setCoutner ] = useState( value );
    
    const handleAdd = () => {
        // console.log(clientX, clientY);
        // setCoutner( counter + 1 );
        setCoutner( (c)=> c + 1 )       // la 'c' es el valor inicial del counter
    }
    const handleSubstract = () => { setCoutner( counter -1 ) };
    const handleReset = () => { setCoutner( value ) };
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
