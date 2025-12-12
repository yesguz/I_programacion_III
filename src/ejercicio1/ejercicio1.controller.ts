import { Controller, Get, Post, Body, Render } from '@nestjs/common';

/**
 * Controlador para el Ejercicio 1.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Este archivo contiene la lógica para manejar las rutas relacionadas con el primer ejercicio.
 * Se utilizan decoradores de NestJS para definir las rutas y los métodos HTTP.
 */
@Controller('ejercicio1')
export class Ejercicio1Controller {

    /**
     * Método para mostrar el formulario de ingreso.
     * Ruta: GET /ejercicio1
     * 
     * Utilizamos @Get() para indicar que este método responde a solicitudes GET.
     * El decorador @Render('ejercicio1-form') le dice a NestJS que use la plantilla 'ejercicio1-form.ejs'
     * ubicada en la carpeta views para renderizar la respuesta HTML.
     */
    @Get()
    @Render('ejercicio1-form')
    mostrarFormulario() {
        // No es necesario enviar datos iniciales al formulario, por eso retornamos un objeto vacío.
        return {};
    }

    /**
     * Método para procesar los datos enviados por el usuario.
     * Ruta: POST /ejercicio1
     * 
     * Utilizamos @Post() para recibir los datos enviados desde el formulario.
     * Con el decorador @Body(), extraemos la información que viene en el cuerpo de la petición.
     * En este caso, esperamos una propiedad llamada 'nombreAnimal'.
     */
    @Post()
    @Render('ejercicio1-result') // Una vez procesado, mostramos la vista de resultado 'ejercicio1-result.ejs'.
    procesarFormulario(@Body() body: { nombreAnimal: string }) {
        // Capturamos el valor enviado por el usuario.
        const nombre = body.nombreAnimal;

        // Retornamos un objeto con los datos que queremos usar dentro de la plantilla EJS.
        // La variable 'animal' estará disponible en el HTML para mostrar el nombre.
        return { animal: nombre };
    }
}
