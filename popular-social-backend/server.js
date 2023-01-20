import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'
import dotenv from 'dotenv'

//app config
dotenv.config()
Grid.mongo = mongoose.mongo
const app = express()
const port = process.env.PORT || 9000
const connection_url = process.env.CONNECTION_URL

//middleware
app.use(bodyParser.json())
app.use(cors())

//DB Config
const connection = mongoose.createConnection(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const upload = multer({ storage })

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let gfs

connection.once('open', () => {
    console.log('DB Connected')
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: connection_url,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})

//api routes
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/upload/image', upload.single('file'),(req, res) => {
    res.status(201).send(req.file)
})

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`))