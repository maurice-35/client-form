import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get('/api/users')
        setUser(data)
        console.log('DATA', data)
      } catch (err) {
    console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <div> 
    <h1>Hello World</h1>
    </div>
  )
}

export default App
