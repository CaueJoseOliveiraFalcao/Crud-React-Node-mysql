import  express  from "express";
import { getUsers } from "./controlles/user.js";
const app = express()
app.use(express.json())
app.use('/' , getUsers)

app.listen(8000)