import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

/**
 * Archivo de punto de entrada de la aplicación.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Aquí se inicia el servidor NestJS y se configuran aspectos globales como el motor de vistas.
 */
async function bootstrap() {
  // Creamos la aplicación NestJS especificando que usaremos Express como plataforma
  // (NestExpressApplication) para tener acceso a funcionalidades como setBaseViewsDir.
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configuración de MVC (Modelo-Vista-Controlador):
  // 1. Definimos dónde se encuentran nuestros archivos de vista (plantillas).
  //    Usamos 'join' para construir la ruta absoluta a la carpeta 'views'.
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // 2. Establecemos EJS (Embedded JavaScript) como nuestro motor de plantillas
  //    para poder generar HTML dinámico.
  app.setViewEngine('ejs');

  // Iniciamos el servidor escuchando en el puerto definido en las variables de entorno o en el 3000 por defecto.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
