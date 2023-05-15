import  express  from "express";
import { getUsers } from "../controlles/user.js";
const route = express.Router()
route.get('/', getUsers)

export default route