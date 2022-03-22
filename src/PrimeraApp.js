// componentes en base a funciones o constantes
import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo } ) => {
    // return <h1>Hola Mundo</h1>;
    return (
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación con React</p>
        // </Fragment>
        <>
            <h1> { saludo } </h1>
             {/* <pre>{ JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{ subtitulo }</p> 
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
} 

PrimeraApp.defaultProps ={
    subtitulo : 'soy un subtitulo'
}

export default PrimeraApp;