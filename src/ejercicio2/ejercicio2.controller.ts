import { Controller, Get, Render } from '@nestjs/common';
import { GeneroPelicula, PaisPelicula } from './enums';

/**
 * Controlador para el Ejercicio 2.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Este controlador maneja la visualización de los datos enumerados (Enums).
 * Su objetivo es preparar los datos de géneros y países para enviarlos a la vista.
 */
@Controller('ejercicio2')
export class Ejercicio2Controller {

    /**
     * Método para mostrar los listados de Enums.
     * Ruta: GET /ejercicio2
     * 
     * Recupera los valores definidos en los Enums de TypeScript y los pasa a la plantilla.
     */
    @Get()
    @Render('ejercicio2') // Renderizamos la vista 'ejercicio2.ejs'.
    mostrarEnums() {
        // Utilizamos Object.values() para convertir los valores del Enum en un arreglo (array)
        // que podamos recorrer fácilmente en nuestra vista EJS con un bucle.
        const generos = Object.values(GeneroPelicula);
        const paises = Object.values(PaisPelicula);

        // Retornamos un objeto con toda la información necesaria para la vista.
        return {
            generos: generos, // Lista de géneros
            paises: paises,   // Lista de países
            titulo: 'Listado de Géneros y Países (Ejercicio 2)' // Título dinámico
        };
    }
}
