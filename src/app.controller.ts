import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controlador Principal de la Aplicación.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Este controlador maneja la ruta raíz ('/') y muestra el menú principal de la evaluación.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  /**
   * Ruta: GET /
   * Renderiza la vista 'index.ejs' que contiene los enlaces a los ejercicios.
   */
  @Get()
  @Render('index')
  getHello() {
    // Retornamos un objeto vacío ya que el menú es estático y no requiere datos dinámicos por ahora.
    return {};
  }
}
