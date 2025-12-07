import express from 'express'
import {prisma} from './utils/prisma.js'
import cors from 'cors'

// Inicializa a aplicação Express
const app = express()
app.use(express.json())
app.use(cors())

const users = []

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

// Rota para editar um novo usuário
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

// Rota para apagar um usuário
app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso"})

})

// Rota para listar todos os usuários cadastrados
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    // Retorna status 200 e envia o array completo de usuários
    res.status(200).json(users)

})

// Inicia o servidor na porta 3000
app.listen(3000)

