import express from 'express'
import { getAllUsers } from '../controllers/users.js'

const router = express.Router()

router.route('/users').get(getAllUsers)

export default router