import  express, {Application}  from "express";
import { connectDB } from "./config/db"; 
import movieRouter from './router/movie.router'
import userRputer from './router/UMS.router'
import bmsRouter from './router/BMS.router'

const app:Application = express()
app.use(express.json())
 const port:number = 3003
app.use('/movie', movieRouter)
app.use('/user', userRputer)
app.use('/bms', bmsRouter )


 app.listen(port, ()=> console.log(`server is runing on port ${port}`));
 connectDB()