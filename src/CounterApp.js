import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [ couter, setCounter ] = useState( value );
    
    // handleAdd
    const handleAdd = () => {

        setCounter( couter + 1 );
        // setCounter( (counter)=> counter + 1 )
    }

    // handleSubstranc
    const handleSubstranc = () => {
        if (couter == 0) {
            return;
        } else{
            setCounter( couter - 1);
        }
    }

    // handleReset
    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2>{ couter }</h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset}> Reset </button>
            <button onClick={ handleSubstranc }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
    // value: PropTypes.number.isRequired
} 

export default CounterApp;
