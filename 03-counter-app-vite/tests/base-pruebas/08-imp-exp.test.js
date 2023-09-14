import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => {
    
    test('getHeroeById debe de retornar un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
    });
    
    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toBeFalsy();
    });

    // Tarea getHeroesByOwner
    // Debe retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado
    
    // Debe de retornar un arreglo con los héroes de Marvel
    // Length === 2

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = "DC";
        const heroesDC = getHeroesByOwner(owner);

        expect( heroesDC.length ).toBe(3);
        expect( heroesDC ).toEqual( heroes.filter((heroe)=> heroe.owner === owner))
        expect( heroesDC ).toEqual( [                                                                  
            { id: 1, name: 'Batman', owner: 'DC' },                          
            { id: 3, name: 'Superman', owner: 'DC' },                        
            { id: 4, name: 'Flash', owner: 'DC' }                            
        ])
    })
    
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = "Marvel";
        const heroesMarvel = getHeroesByOwner(owner);
        
        expect( heroesMarvel.length ).toBe(2);
        expect( heroesMarvel ).toEqual( heroes.filter((heroe)=> heroe.owner === owner))
        expect(heroesMarvel).toEqual([                                                                  
            { id: 2, name: 'Spiderman', owner: 'Marvel' },                   
            { id: 5, name: 'Wolverine', owner: 'Marvel' }                    
        ])
    })


})