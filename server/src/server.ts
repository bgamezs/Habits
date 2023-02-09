import Fastify from 'fastify'
import { Prisma, PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

/*
Criando uma Rota
Metodo HTTP: Get, Post, Put, Patch, Delete
*/




app.listen({
    port: 3333,
}). then(() => {
    console.log('HTTP server running')
})