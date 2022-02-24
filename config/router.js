import express from 'express'
import { getAllUsers, addUser, getOneUser } from '../controllers/users.js'

const router = express.Router()

router.route('/users')
.get(getAllUsers)
.post(addUser)

router.route('/users/:id')
.get(getOneUser)

export default router