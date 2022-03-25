import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en el archivo 05-funciones.test.js', () => { 

    test('getUser() debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    });
    
    test('getUsuarioActivo( nombre ) debe retornar un objeto', () => {
        
        const nombre = 'Antonio';
        const user     = getUsuarioActivo( nombre );
        
        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
    });




    });

});