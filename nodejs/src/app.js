import express from 'express'

const app = express()

app.use(express.json())

const books = [
    { id: 1, title: 'The Lord of The Rings' },
    { id: 2, title: 'The Hobbit' }
]

app.get('/', (req, res) => {
    res.status(200).send('Node course')
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send()
})

export default app