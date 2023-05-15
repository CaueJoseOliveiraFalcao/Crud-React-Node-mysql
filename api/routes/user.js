import  express  from "express";
import { getUsers ,addUser , updateUser , deleteUser} from "../controlles/user.js";
const route = express.Router()
route.get('/', getUsers)
route.post('/', addUser)
route.put('/:id',updateUser)
route.delete('/:id', deleteUser)


export default route