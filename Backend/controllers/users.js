import User from '../models/user.js'

// Index Route
export const getAllUsers = async (_req, res) => {
	const users = await User.find()
	// console.log('USERS', users)
	return res.status(200).json(users)
}

// Create Route
export const addUser = async (req, res) => {
	try {
		// console.log('REQ.BODY', req.body)
		console.log( new Date(req.body.dateOfBirth))
		const userToAdd = await User.create(req.body)
		return res.status(201).json(userToAdd)
	} catch (err) {
		console.log(err)
		return res.status(422).json(err)
	}
}

// User Route
export const getOneUser = async (req, res) => {
	try {
		// console.log('REQ.BODY', req.body)
		const { id } = req.params
		const singleUser = await User.findById(id)
		if (!singleUser) throw new Error()
		return res.status(200).json(singleUser)
	} catch (err) {
		console.log(err)
		return res.status(404).json({ 'message': 'Not found' })
	}
}
