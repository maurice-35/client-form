// import React, { useState } from 'react'
// import axios from 'axios'
// import UserForm from './UserForm'



// const  Users = () => {
//   const [userInfo, setUserInfo] = useState({
//     firstName: '',
//     surname: '',
//     email: '',
//     telephone: '',
//     gender: '',
//     dateOfBirth: '',
//     comment: '',
//   })
//   const [errors, setErrors] = useState({
//     firstName: '',
//     surname: '',
//     email: '',
//     telephone: '',
//     gender: '',
//     dateOfBirth: '',
//     comment: '',
//   })

//   const handleChange = (event) => {
//     const newFormData = { ...userInfo, [event.target.name]: event.target.value }
//     const newErrors = { ...errors, [event.target.name]: '' }
//     setUserInfo(newFormData)
//     setErrors(newErrors)
//   }


//     const handleSubmit = async (event) => {
//       event.preventDefault()
//       try {
//         await axios.post('/api/users', userInfo,
//         )
//       } catch (err) {
//         console.log(err)
//       }
//     }


//   return (
//     <section>
//       <div>
//         <UserForm 
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         formData={userInfo}
//         errors={errors}
//         buttonText="button"
//       />
//       </div>
//     </section>
//   )

// }

// export default Users
