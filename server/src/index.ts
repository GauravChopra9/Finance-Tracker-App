// pwd is EBR4yaBETfleCJRJ
import express, {Express} from 'express';
import mongoose from 'mongoose';

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json)


const mongoURI: string = "mongodb+srv://gmchopra:EBR4yaBETfleCJRJ@personalfinancedb.249nzep.mongodb.net/" 
mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Database"))
    .catch((err) => console.error("Failed to connect to MongoDB Database", err))

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

