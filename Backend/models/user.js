import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: true, maxLength: 30 },
	surname: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
  telephone: { type: Number, required: true, unique: true, maxLength: 15, miinLength: 11 },
  gender: { type: String, required: true, maxLength: 10 },
  dateOfBirth: { type: Date, required: true },
  comment: { type: String, required: true, maxLength: 500 },
  
})


export default mongoose.model('User', userSchema)
