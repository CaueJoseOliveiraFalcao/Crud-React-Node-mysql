import  express  from "express";
import { getUsers } from "./controlles/user.js";
import  cors  from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/' , getUsers)

app.listen(8001)