import {usContext} from '../../src/base-pruebas/06-deses-obj'

describe('Prueba en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', () => {
        const datos = {
            clave: "IronMan",
            edad: 30
        }
        const useContext = usContext(datos);
        const expectObject = {
            nombreClave: datos.clave,
            anios: datos.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        expect( expectObject ).toEqual(useContext);
    })
})