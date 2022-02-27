import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './component/UserForm'



const App = () => {
  const [userInfo, setUserInfo] = useState([])


  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get('/api/users')
        setUserInfo(data)
        console.log('DATA', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  return (
    <UserForm />
  )
}

export default App
