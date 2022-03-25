describe('Pruebas en el archivo demo.test.js', () => { 
    
    test('Debe ser iguales los String', () => { 
    
        // 1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. estímulo
        const mensaje2 = 'Hola Mundo';
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // ===

    });

});
