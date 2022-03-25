import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas archivo 08-imp-exp.test.js', () => {

    test('debe de retornar un héroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        // console.log(heroe);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );

    });

    test('debe de retornar undefine si Heroe no existe ', () => {
        
        const id = 35;
        const heroe = getHeroeById( id );

        // console.log(heroe);

        expect( heroe ).toBe( undefined );

    });
    
    // Debe de reotrnar un arrelgo con los heroes de DC
    // owner
    // toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( h => h.owner === owner);

        expect( heroes ).toEqual( heroesData );

    });
    
    // debe de retornar un arrelgo con los héroes de Marvel 
    // length = 2 // toBe
    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 2 );

    });
    




});