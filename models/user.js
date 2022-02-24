import mongoose from 'mongoose'


//User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: true, maxLength: 30 },
	surname: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  telephone: { type: Number, required: true, unique: true, maxLength: 15 },
  gender: { type: String, required: true, unique: true, maxLength: 10 },
  dateOfBirth: { type: String, required: true, unique: true },
  comment: { type: String, required: true, maxLength: 500 },
  
})


export default mongoose.model('User', userSchema)
