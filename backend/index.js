import express from "express"
import cors from "cors"
import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET all expenses
app.get('/expenses', async (req, res) => {
    let expenses = []
    if (!req.query.category) {
        expenses = await prisma.expense.findMany()
    } else {
        expenses = await prisma.expense.findMany(
            {
                where: {
                    category: req.query.category
                }
            }
        )
    }
    res.json(expenses)
})

// GET expense by id
app.get('/expenses/:id', async (req, res) => {
    const expense = await prisma.expense.findFirst({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(expense)
})

// POST expense data
app.post('/expenses', async (req, res) => {
    const { name, amount, date, category } = req.body
    const expense = await prisma.expense.create({
        data: {
            name,
            amount,
            date,
            category
        }
    })
    res.json(expense)
})

// PUT expense data
app.put('/expenses/:id', async (req, res) => {
    const { name, amount, date, category } = req.body
    const expense = await prisma.expense.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            name,
            amount,
            date,
            category
        }
    })
    res.json(expense)
})

// DELETE expense data
app.delete('/expenses/:id', async (req, res) => {
    const expense = await prisma.expense.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(expense)
})


// listen to port 4000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`)
})