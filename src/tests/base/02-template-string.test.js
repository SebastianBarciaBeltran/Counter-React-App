import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo 02-template-string.test.js', () => { 

    test('getSaludo debe retornar Hola $nombre', () => {
        
        const nombre = 'Sebastián';

        const saludo = getSaludo( nombre );
        
        expect( saludo ).toBe( `Hola ${ nombre }` );
    });
    
    // getSaludo debe de retornar Hola Carlos! si no hay nombre
    
    test('getSaludo debe de retornar Hola Carlos! si no hay $nombre', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!' );   
    });


});