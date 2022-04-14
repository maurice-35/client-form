import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './component/UserForm'
import Swal from 'sweetalert2'



const App = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    gender: '',
    dateOfBirth: '',
    comment: '',
  })
  const [errors, setErrors] = useState({
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    gender: '',
    dateOfBirth: '',
    comment: '',
  })


  useEffect(() => {
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get('/api/users')
        console.log('DATA', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    // reset(userInfo)
  }, [])

  const handleChange = (name, value) => {
    const newFormData = { ...userInfo, [name]: value }
    setUserInfo(newFormData)
    console.log('Event', name, value)
    console.log('NEW', newFormData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        '/api/users',
        userInfo)
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted Successfully 👍🏾',
      })
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(err.text)
      Swal.fire({
        icon: 'error',
        title: 'Oops, something went wrong 🤔, please check your details and try again.',
        text: err.text,
      })
    }
    // e.target.reset()
    reset(userInfo)
    // setState({...resetForm})
  }

  return (
    <>
      <UserForm
        handleSubmit={handleSubmit}
        handle={handleChange}
        errors={errors}
        Next="Next"
      />
    </>
  )
}

export default App
