import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyFormbody from '@fastify/formbody';
import ejs from 'ejs';
import path from 'path';
import { GeneroPelicula, PaisPelicula } from '../enums'; // Importar subiendo un nivel desde 'api'

const server = Fastify({ logger: true });

// Configuración de vistas
server.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
    // Al ejecutarse como función serverless en /api, 'views' está dos niveles arriba en el árbol de archivos desplegado
    root: path.join(__dirname, '..', '..', 'views'),
});

server.register(fastifyFormbody);

// --- RUTAS ---
server.get('/', async (request, reply) => {
    return reply.view('index.ejs');
});

server.get('/ejercicio1', async (request, reply) => {
    return reply.view('ejercicio1-form.ejs');
});

server.post('/ejercicio1', async (request, reply) => {
    const body: any = request.body;
    const nombre = body.nombreAnimal;
    return reply.view('ejercicio1-result.ejs', { animal: nombre });
});

server.get('/ejercicio2', async (request, reply) => {
    const generos = Object.values(GeneroPelicula);
    const paises = Object.values(PaisPelicula);

    return reply.view('ejercicio2.ejs', {
        generos,
        paises,
        titulo: 'Listado de Géneros y Países (Ejercicio 2)'
    });
});

// Handler para Vercel Serverless
export default async function (req: any, res: any) {
    await server.ready();
    server.server.emit('request', req, res);
}
