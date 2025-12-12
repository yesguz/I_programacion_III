import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ejercicio1Controller } from './ejercicio1/ejercicio1.controller';
import { Ejercicio2Controller } from './ejercicio2/ejercicio2.controller';

@Module({
  imports: [],
  controllers: [AppController, Ejercicio1Controller, Ejercicio2Controller],
  providers: [AppService],
})
export class AppModule { }
