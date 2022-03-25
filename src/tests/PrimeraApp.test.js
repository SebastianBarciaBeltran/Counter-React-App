import '@testing-library/jest-dom';
import React       from 'react';
import { render }  from '@testing-library/react';
import { shallow } from 'enzyme';
import PrimeraApp  from '../PrimeraApp';

describe('Prueba en <PrimeraApp>', () => {

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        // SIN ENZYME
        // const saludo = 'Hola, soy Goku';
        // const { getByText } = render( <PrimeraApp saludo={saludo} /> );
        // wrapper.getByText();
        // expect( getByText(saludo) ).toBeInTheDocument();


        // CON ENZYME
        const wrapper = shallow( <PrimeraApp saludo='Hola, soy goku' /> );

        expect( wrapper ).toMatchSnapshot();


    });

    test('Debe de mostrar el subTitulo enviado por props', () => {

        const saludo = 'Hola, soy goku';
        const subTitulo = 'soy un subtitulo'
        const wrapper = shallow( <PrimeraApp saludo={saludo} subTitulo={subTitulo} /> );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo ); 

    });

});