/**
 * Definición de Enumeraciones (Enums) para el Ejercicio 2.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Estas enumeraciones permiten tipar y restringir los valores para Géneros y Países,
 * facilitando el mantenimiento y la escalabilidad del código.
 */

// Enumeración para Géneros de Películas
export enum GeneroPelicula {
    ACCION = 'Acción',
    COMEDIA = 'Comedia',
    DRAMA = 'Drama',
    CIENCIA_FICCION = 'Ciencia Ficción',
    TERROR = 'Terror',
    AVENTURA = 'Aventura'
}

// Enumeración para Países de Origen
export enum PaisPelicula {
    USA = 'Estados Unidos',
    ESPANA = 'España',
    MEXICO = 'México',
    FRANCIA = 'Francia',
    JAPON = 'Japón',
    VENEZUELA = 'Venezuela'
}
