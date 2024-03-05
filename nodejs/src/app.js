import express from 'express'
import db from './config/db_connect';

db.on('error', console.log.bind(console, 'Conection error'));
db.once('open', () => {
    console.log('Database connection successful');
})

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

app.get('/books/:id', (req, res) => {
    const index = searchBook(req.params.id)
    res.status(200).json(books[index])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send()
})

app.put('/books/:id', (req, res) => {
    const index = searchBook(req.params.id)
    books[index].title = req.body.title
    res.status(200).json(books[index])
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params
    const index = searchBook(id)
    books.splice(index, 1)
    res.status(200).send()
})

function searchBook(id) {
    return books.findIndex(book => book.id == id)
}

export default app