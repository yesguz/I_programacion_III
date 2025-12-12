/**
 * Definición de Enumeraciones (Enums) para el Ejercicio 2.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Las enumeraciones nos permiten crear un grupo de constantes con nombre, lo cual hace
 * que el código sea más legible y fácil de mantener, evitando "números mágicos" o cadenas sueltas.
 */

// Enumeración para clasificar los Géneros de las Películas.
export enum GeneroPelicula {
    ACCION = 'Acción',
    COMEDIA = 'Comedia',
    DRAMA = 'Drama',
    CIENCIA_FICCION = 'Ciencia Ficción',
    TERROR = 'Terror',
    AVENTURA = 'Aventura'
}

// Enumeración para definir los Países de origen de las Películas.
export enum PaisPelicula {
    USA = 'Estados Unidos',
    ESPANA = 'España',
    MEXICO = 'México',
    FRANCIA = 'Francia',
    JAPON = 'Japón',
    VENEZUELA = 'Venezuela'
}
